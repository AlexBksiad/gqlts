import { GraphQLSchema } from "graphql";
import { chainTypeName } from "../chain/objectType";
import { RenderContext } from "../common/RenderContext";
import { requestTypeName } from "../requestTypes/requestTypeName";
import { RUNTIME_LIB_NAME } from "../../config";
import { renderEnumsMaps } from "./renderClient";

export const renderClientDefinition = (schema: GraphQLSchema, ctx: RenderContext) => {
  const queryType = schema.getQueryType();
  const mutationType = schema.getMutationType();
  const subscriptionType = schema.getSubscriptionType();

  ctx.addCodeBlock(`
    import { FieldsSelection, GraphqlOperation, ClientOptions, Observable } from '${RUNTIME_LIB_NAME}'
    import { Client as WSClient } from "graphql-ws"
    export * from './schema'
    ${renderClientTypesImports({ mutationType, queryType, subscriptionType })}
    export declare const createClient:(options?: ClientOptions) => Client
    export declare const everything: { __scalar: boolean }
    export declare const version: string
  `);

  // Client interface
  ctx.addCodeBlock(renderClientType({ mutationType, queryType, subscriptionType }));

  // generateQueryOp and QueryResult types
  ctx.addCodeBlock(
    renderSupportFunctionsTypes({
      mutationType,
      queryType,
      subscriptionType,
    })
  );

  ctx.addCodeBlock(renderEnumsMaps(schema, "type"));
};

function renderClientTypesImports({ queryType, mutationType, subscriptionType }) {
  const imports: string[] = [];
  if (queryType) {
    imports.push(requestTypeName(queryType), chainTypeName(queryType, "Promise"), queryType.name);
  }

  if (mutationType) {
    imports.push(requestTypeName(mutationType), chainTypeName(mutationType, "Promise"), mutationType.name);
  }
  if (subscriptionType) {
    imports.push(
      requestTypeName(subscriptionType),
      chainTypeName(subscriptionType, "Observable"),
      subscriptionType.name
    );
  }
  if (imports.length > 0) {
    return `import {${imports.join(",")}} from './schema'`;
  }
  return "";
}

function renderClientType({ queryType, mutationType, subscriptionType }) {
  let interfaceContent = "";
  let chainTypeContent = "";

  if (queryType) {
    interfaceContent += `
        query<R extends ${requestTypeName(queryType)}>(
            request: R & { __name?: string },
        ): Promise<GraphqlResponse<FieldsSelection<${queryType.name}, R>>>
        `;
    chainTypeContent += `
        query: ${chainTypeName(queryType, "Promise")}
        `;
  }

  if (mutationType) {
    interfaceContent += `
        mutation<R extends ${requestTypeName(mutationType)}>(
            request: R & { __name?: string },
        ): Promise<GraphqlResponse<FieldsSelection<${mutationType.name}, R>>>
        `;
    chainTypeContent += `
        mutation: ${chainTypeName(mutationType, "Promise")}
        `;
  }

  if (subscriptionType) {
    interfaceContent += `
        subscription<R extends ${requestTypeName(subscriptionType)}>(
            request: R & { __name?: string },
        ): Observable<GraphqlResponse<FieldsSelection<${subscriptionType.name}, R>>>
        `;
    chainTypeContent += `
        subscription: ${chainTypeName(subscriptionType, "Observable")}
        `;
  }

  return `
    export interface GraphqQLError {
        message: string
        code?: string
        locations?: {
            line: number
            column: number
        }[]
        path?: string[]
        [key: string]: any
    }

    export interface GraphqlResponse<D = any, E = GraphqQLError[], X = any> {
      data?: D;
      errors?: E;
      extensions?: X;
    }

    export interface Client {
        wsClient?: WSClient
        ${interfaceContent}
        chain: {
            ${chainTypeContent}
        }
    }
    `;
} // TODO add the close method that closes the ws client

function renderSupportFunctionsTypes({ queryType, mutationType, subscriptionType }) {
  let code = "";
  if (queryType) {
    code += `
        export type QueryResult<fields extends ${requestTypeName(queryType)}> = GraphqlResponse<FieldsSelection<${
      queryType.name
    }, fields>>

        export declare const generateQueryOp: (fields: ${requestTypeName(
          queryType
        )} & { __name?: string }) => GraphqlOperation`;
  }
  if (mutationType) {
    code += `
        export type MutationResult<fields extends ${requestTypeName(mutationType)}> = GraphqlResponse<FieldsSelection<${
      mutationType.name
    }, fields>>

        export declare const generateMutationOp: (fields: ${requestTypeName(
          mutationType
        )} & { __name?: string }) => GraphqlOperation`;
  }
  if (subscriptionType) {
    code += `
        export type SubscriptionResult<fields extends ${requestTypeName(
          subscriptionType
        )}> = GraphqlResponse<FieldsSelection<${subscriptionType.name}, fields>>

        export declare const generateSubscriptionOp: (fields: ${requestTypeName(
          subscriptionType
        )} & { __name?: string }) => GraphqlOperation`;
  }

  return code;
}
