import { FieldsSelection, Observable } from "@genqlx/runtime";

export type Scalars = {
  Boolean: boolean;
  Float: number;
  ID: string;
  Int: number;
  String: string;
};

/** mutation root */
export interface mutation_root {
  /** delete data from the table: "user" */
  delete_user?: user_mutation_response;
  /** delete single row from the table: "user" */
  delete_user_by_pk?: user;
  /** insert data into the table: "user" */
  insert_user?: user_mutation_response;
  /** insert a single row into the table: "user" */
  insert_user_one?: user;
  /** update data of the table: "user" */
  update_user?: user_mutation_response;
  /** update single row of the table: "user" */
  update_user_by_pk?: user;
  __typename: "mutation_root";
}

/** column ordering options */
export type order_by = "asc" | "asc_nulls_first" | "asc_nulls_last" | "desc" | "desc_nulls_first" | "desc_nulls_last";

/** query root */
export interface query_root {
  /** fetch data from the table: "user" */
  user: user[];
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: user_aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: user;
  __typename: "query_root";
}

/** subscription root */
export interface subscription_root {
  /** fetch data from the table: "user" */
  user: user[];
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: user_aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: user;
  __typename: "subscription_root";
}

/** columns and relationships of "user" */
export interface user {
  age: Scalars["Int"];
  id: Scalars["String"];
  name: Scalars["String"];
  __typename: "user";
}

/** aggregated selection of "user" */
export interface user_aggregate {
  aggregate?: user_aggregate_fields;
  nodes: user[];
  __typename: "user_aggregate";
}

/** aggregate fields of "user" */
export interface user_aggregate_fields {
  avg?: user_avg_fields;
  count?: Scalars["Int"];
  max?: user_max_fields;
  min?: user_min_fields;
  stddev?: user_stddev_fields;
  stddev_pop?: user_stddev_pop_fields;
  stddev_samp?: user_stddev_samp_fields;
  sum?: user_sum_fields;
  var_pop?: user_var_pop_fields;
  var_samp?: user_var_samp_fields;
  variance?: user_variance_fields;
  __typename: "user_aggregate_fields";
}

/** aggregate avg on columns */
export interface user_avg_fields {
  age?: Scalars["Float"];
  __typename: "user_avg_fields";
}

/** unique or primary key constraints on table "user" */
export type user_constraint = "user_pkey";

/** aggregate max on columns */
export interface user_max_fields {
  age?: Scalars["Int"];
  id?: Scalars["String"];
  name?: Scalars["String"];
  __typename: "user_max_fields";
}

/** aggregate min on columns */
export interface user_min_fields {
  age?: Scalars["Int"];
  id?: Scalars["String"];
  name?: Scalars["String"];
  __typename: "user_min_fields";
}

/** response of any mutation on the table "user" */
export interface user_mutation_response {
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: user[];
  __typename: "user_mutation_response";
}

/** select columns of table "user" */
export type user_select_column = "age" | "id" | "name";

/** aggregate stddev on columns */
export interface user_stddev_fields {
  age?: Scalars["Float"];
  __typename: "user_stddev_fields";
}

/** aggregate stddev_pop on columns */
export interface user_stddev_pop_fields {
  age?: Scalars["Float"];
  __typename: "user_stddev_pop_fields";
}

/** aggregate stddev_samp on columns */
export interface user_stddev_samp_fields {
  age?: Scalars["Float"];
  __typename: "user_stddev_samp_fields";
}

/** aggregate sum on columns */
export interface user_sum_fields {
  age?: Scalars["Int"];
  __typename: "user_sum_fields";
}

/** update columns of table "user" */
export type user_update_column = "age" | "id" | "name";

/** aggregate var_pop on columns */
export interface user_var_pop_fields {
  age?: Scalars["Float"];
  __typename: "user_var_pop_fields";
}

/** aggregate var_samp on columns */
export interface user_var_samp_fields {
  age?: Scalars["Float"];
  __typename: "user_var_samp_fields";
}

/** aggregate variance on columns */
export interface user_variance_fields {
  age?: Scalars["Float"];
  __typename: "user_variance_fields";
}

export type Query = query_root;
export type Mutation = mutation_root;
export type Subscription = subscription_root;

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export interface Int_comparison_exp {
  _eq?: Scalars["Int"] | null;
  _gt?: Scalars["Int"] | null;
  _gte?: Scalars["Int"] | null;
  _in?: Scalars["Int"][] | null;
  _is_null?: Scalars["Boolean"] | null;
  _lt?: Scalars["Int"] | null;
  _lte?: Scalars["Int"] | null;
  _neq?: Scalars["Int"] | null;
  _nin?: Scalars["Int"][] | null;
}

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export interface String_comparison_exp {
  _eq?: Scalars["String"] | null;
  _gt?: Scalars["String"] | null;
  _gte?: Scalars["String"] | null;
  _ilike?: Scalars["String"] | null;
  _in?: Scalars["String"][] | null;
  _is_null?: Scalars["Boolean"] | null;
  _like?: Scalars["String"] | null;
  _lt?: Scalars["String"] | null;
  _lte?: Scalars["String"] | null;
  _neq?: Scalars["String"] | null;
  _nilike?: Scalars["String"] | null;
  _nin?: Scalars["String"][] | null;
  _nlike?: Scalars["String"] | null;
  _nsimilar?: Scalars["String"] | null;
  _similar?: Scalars["String"] | null;
}

/** mutation root */
export interface mutation_rootRequest {
  /** delete data from the table: "user" */
  delete_user?: [
    {
      /** filter the rows which have to be deleted */
      where: user_bool_exp;
    },
    user_mutation_responseRequest
  ];
  /** delete single row from the table: "user" */
  delete_user_by_pk?: [{ id: Scalars["String"] }, userRequest];
  /** insert data into the table: "user" */
  insert_user?: [
    {
      /** the rows to be inserted */
      objects: user_insert_input[];
      /** on conflict condition */
      on_conflict?: user_on_conflict | null;
    },
    user_mutation_responseRequest
  ];
  /** insert a single row into the table: "user" */
  insert_user_one?: [
    {
      /** the row to be inserted */
      object: user_insert_input;
      /** on conflict condition */
      on_conflict?: user_on_conflict | null;
    },
    userRequest
  ];
  /** update data of the table: "user" */
  update_user?: [
    {
      /** increments the integer columns with given value of the filtered values */
      _inc?: user_inc_input | null;
      /** sets the columns of the filtered rows to the given values */
      _set?: user_set_input | null;
      /** filter the rows which have to be updated */
      where: user_bool_exp;
    },
    user_mutation_responseRequest
  ];
  /** update single row of the table: "user" */
  update_user_by_pk?: [
    {
      /** increments the integer columns with given value of the filtered values */
      _inc?: user_inc_input | null;
      /** sets the columns of the filtered rows to the given values */
      _set?: user_set_input | null;
      pk_columns: user_pk_columns_input;
    },
    userRequest
  ];
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** query root */
export interface query_rootRequest {
  /** fetch data from the table: "user" */
  user?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: user_select_column[] | null;
          /** limit the number of rows returned */
          limit?: Scalars["Int"] | null;
          /** skip the first n rows. Use only with order_by */
          offset?: Scalars["Int"] | null;
          /** sort the rows by one or more columns */
          order_by?: user_order_by[] | null;
          /** filter the rows returned */
          where?: user_bool_exp | null;
        },
        userRequest
      ]
    | userRequest;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: user_select_column[] | null;
          /** limit the number of rows returned */
          limit?: Scalars["Int"] | null;
          /** skip the first n rows. Use only with order_by */
          offset?: Scalars["Int"] | null;
          /** sort the rows by one or more columns */
          order_by?: user_order_by[] | null;
          /** filter the rows returned */
          where?: user_bool_exp | null;
        },
        user_aggregateRequest
      ]
    | user_aggregateRequest;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: [{ id: Scalars["String"] }, userRequest];
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** subscription root */
export interface subscription_rootRequest {
  /** fetch data from the table: "user" */
  user?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: user_select_column[] | null;
          /** limit the number of rows returned */
          limit?: Scalars["Int"] | null;
          /** skip the first n rows. Use only with order_by */
          offset?: Scalars["Int"] | null;
          /** sort the rows by one or more columns */
          order_by?: user_order_by[] | null;
          /** filter the rows returned */
          where?: user_bool_exp | null;
        },
        userRequest
      ]
    | userRequest;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: user_select_column[] | null;
          /** limit the number of rows returned */
          limit?: Scalars["Int"] | null;
          /** skip the first n rows. Use only with order_by */
          offset?: Scalars["Int"] | null;
          /** sort the rows by one or more columns */
          order_by?: user_order_by[] | null;
          /** filter the rows returned */
          where?: user_bool_exp | null;
        },
        user_aggregateRequest
      ]
    | user_aggregateRequest;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: [{ id: Scalars["String"] }, userRequest];
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** columns and relationships of "user" */
export interface userRequest {
  age?: boolean | number;
  id?: boolean | number;
  name?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** aggregated selection of "user" */
export interface user_aggregateRequest {
  aggregate?: user_aggregate_fieldsRequest;
  nodes?: userRequest;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** aggregate fields of "user" */
export interface user_aggregate_fieldsRequest {
  avg?: user_avg_fieldsRequest;
  count?: [{ columns?: user_select_column[] | null; distinct?: Scalars["Boolean"] | null }] | boolean | number;
  max?: user_max_fieldsRequest;
  min?: user_min_fieldsRequest;
  stddev?: user_stddev_fieldsRequest;
  stddev_pop?: user_stddev_pop_fieldsRequest;
  stddev_samp?: user_stddev_samp_fieldsRequest;
  sum?: user_sum_fieldsRequest;
  var_pop?: user_var_pop_fieldsRequest;
  var_samp?: user_var_samp_fieldsRequest;
  variance?: user_variance_fieldsRequest;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** order by aggregate values of table "user" */
export interface user_aggregate_order_by {
  avg?: user_avg_order_by | null;
  count?: order_by | null;
  max?: user_max_order_by | null;
  min?: user_min_order_by | null;
  stddev?: user_stddev_order_by | null;
  stddev_pop?: user_stddev_pop_order_by | null;
  stddev_samp?: user_stddev_samp_order_by | null;
  sum?: user_sum_order_by | null;
  var_pop?: user_var_pop_order_by | null;
  var_samp?: user_var_samp_order_by | null;
  variance?: user_variance_order_by | null;
}

/** input type for inserting array relation for remote table "user" */
export interface user_arr_rel_insert_input {
  data: user_insert_input[];
  on_conflict?: user_on_conflict | null;
}

/** aggregate avg on columns */
export interface user_avg_fieldsRequest {
  age?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** order by avg() on columns of table "user" */
export interface user_avg_order_by {
  age?: order_by | null;
}

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export interface user_bool_exp {
  _and?: (user_bool_exp | null)[] | null;
  _not?: user_bool_exp | null;
  _or?: (user_bool_exp | null)[] | null;
  age?: Int_comparison_exp | null;
  id?: String_comparison_exp | null;
  name?: String_comparison_exp | null;
}

/** input type for incrementing integer column in table "user" */
export interface user_inc_input {
  age?: Scalars["Int"] | null;
}

/** input type for inserting data into table "user" */
export interface user_insert_input {
  age?: Scalars["Int"] | null;
  id?: Scalars["String"] | null;
  name?: Scalars["String"] | null;
}

/** aggregate max on columns */
export interface user_max_fieldsRequest {
  age?: boolean | number;
  id?: boolean | number;
  name?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** order by max() on columns of table "user" */
export interface user_max_order_by {
  age?: order_by | null;
  id?: order_by | null;
  name?: order_by | null;
}

/** aggregate min on columns */
export interface user_min_fieldsRequest {
  age?: boolean | number;
  id?: boolean | number;
  name?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** order by min() on columns of table "user" */
export interface user_min_order_by {
  age?: order_by | null;
  id?: order_by | null;
  name?: order_by | null;
}

/** response of any mutation on the table "user" */
export interface user_mutation_responseRequest {
  /** number of affected rows by the mutation */
  affected_rows?: boolean | number;
  /** data of the affected rows by the mutation */
  returning?: userRequest;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** input type for inserting object relation for remote table "user" */
export interface user_obj_rel_insert_input {
  data: user_insert_input;
  on_conflict?: user_on_conflict | null;
}

/** on conflict condition type for table "user" */
export interface user_on_conflict {
  constraint: user_constraint;
  update_columns: user_update_column[];
  where?: user_bool_exp | null;
}

/** ordering options when selecting data from "user" */
export interface user_order_by {
  age?: order_by | null;
  id?: order_by | null;
  name?: order_by | null;
}

/** primary key columns input for table: "user" */
export interface user_pk_columns_input {
  id: Scalars["String"];
}

/** input type for updating data in table "user" */
export interface user_set_input {
  age?: Scalars["Int"] | null;
  id?: Scalars["String"] | null;
  name?: Scalars["String"] | null;
}

/** aggregate stddev on columns */
export interface user_stddev_fieldsRequest {
  age?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** order by stddev() on columns of table "user" */
export interface user_stddev_order_by {
  age?: order_by | null;
}

/** aggregate stddev_pop on columns */
export interface user_stddev_pop_fieldsRequest {
  age?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** order by stddev_pop() on columns of table "user" */
export interface user_stddev_pop_order_by {
  age?: order_by | null;
}

/** aggregate stddev_samp on columns */
export interface user_stddev_samp_fieldsRequest {
  age?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** order by stddev_samp() on columns of table "user" */
export interface user_stddev_samp_order_by {
  age?: order_by | null;
}

/** aggregate sum on columns */
export interface user_sum_fieldsRequest {
  age?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** order by sum() on columns of table "user" */
export interface user_sum_order_by {
  age?: order_by | null;
}

/** aggregate var_pop on columns */
export interface user_var_pop_fieldsRequest {
  age?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** order by var_pop() on columns of table "user" */
export interface user_var_pop_order_by {
  age?: order_by | null;
}

/** aggregate var_samp on columns */
export interface user_var_samp_fieldsRequest {
  age?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** order by var_samp() on columns of table "user" */
export interface user_var_samp_order_by {
  age?: order_by | null;
}

/** aggregate variance on columns */
export interface user_variance_fieldsRequest {
  age?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** order by variance() on columns of table "user" */
export interface user_variance_order_by {
  age?: order_by | null;
}

export type QueryRequest = query_rootRequest;
export type MutationRequest = mutation_rootRequest;
export type SubscriptionRequest = subscription_rootRequest;

const mutation_root_possibleTypes: string[] = ["mutation_root"];
export const ismutation_root = (obj?: { __typename?: any } | null): obj is mutation_root => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ismutation_root"');
  return mutation_root_possibleTypes.includes(obj.__typename);
};

const query_root_possibleTypes: string[] = ["query_root"];
export const isquery_root = (obj?: { __typename?: any } | null): obj is query_root => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isquery_root"');
  return query_root_possibleTypes.includes(obj.__typename);
};

const subscription_root_possibleTypes: string[] = ["subscription_root"];
export const issubscription_root = (obj?: { __typename?: any } | null): obj is subscription_root => {
  if (!obj?.__typename) throw new Error('__typename is missing in "issubscription_root"');
  return subscription_root_possibleTypes.includes(obj.__typename);
};

const user_possibleTypes: string[] = ["user"];
export const isuser = (obj?: { __typename?: any } | null): obj is user => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isuser"');
  return user_possibleTypes.includes(obj.__typename);
};

const user_aggregate_possibleTypes: string[] = ["user_aggregate"];
export const isuser_aggregate = (obj?: { __typename?: any } | null): obj is user_aggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isuser_aggregate"');
  return user_aggregate_possibleTypes.includes(obj.__typename);
};

const user_aggregate_fields_possibleTypes: string[] = ["user_aggregate_fields"];
export const isuser_aggregate_fields = (obj?: { __typename?: any } | null): obj is user_aggregate_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isuser_aggregate_fields"');
  return user_aggregate_fields_possibleTypes.includes(obj.__typename);
};

const user_avg_fields_possibleTypes: string[] = ["user_avg_fields"];
export const isuser_avg_fields = (obj?: { __typename?: any } | null): obj is user_avg_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isuser_avg_fields"');
  return user_avg_fields_possibleTypes.includes(obj.__typename);
};

const user_max_fields_possibleTypes: string[] = ["user_max_fields"];
export const isuser_max_fields = (obj?: { __typename?: any } | null): obj is user_max_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isuser_max_fields"');
  return user_max_fields_possibleTypes.includes(obj.__typename);
};

const user_min_fields_possibleTypes: string[] = ["user_min_fields"];
export const isuser_min_fields = (obj?: { __typename?: any } | null): obj is user_min_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isuser_min_fields"');
  return user_min_fields_possibleTypes.includes(obj.__typename);
};

const user_mutation_response_possibleTypes: string[] = ["user_mutation_response"];
export const isuser_mutation_response = (obj?: { __typename?: any } | null): obj is user_mutation_response => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isuser_mutation_response"');
  return user_mutation_response_possibleTypes.includes(obj.__typename);
};

const user_stddev_fields_possibleTypes: string[] = ["user_stddev_fields"];
export const isuser_stddev_fields = (obj?: { __typename?: any } | null): obj is user_stddev_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isuser_stddev_fields"');
  return user_stddev_fields_possibleTypes.includes(obj.__typename);
};

const user_stddev_pop_fields_possibleTypes: string[] = ["user_stddev_pop_fields"];
export const isuser_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is user_stddev_pop_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isuser_stddev_pop_fields"');
  return user_stddev_pop_fields_possibleTypes.includes(obj.__typename);
};

const user_stddev_samp_fields_possibleTypes: string[] = ["user_stddev_samp_fields"];
export const isuser_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is user_stddev_samp_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isuser_stddev_samp_fields"');
  return user_stddev_samp_fields_possibleTypes.includes(obj.__typename);
};

const user_sum_fields_possibleTypes: string[] = ["user_sum_fields"];
export const isuser_sum_fields = (obj?: { __typename?: any } | null): obj is user_sum_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isuser_sum_fields"');
  return user_sum_fields_possibleTypes.includes(obj.__typename);
};

const user_var_pop_fields_possibleTypes: string[] = ["user_var_pop_fields"];
export const isuser_var_pop_fields = (obj?: { __typename?: any } | null): obj is user_var_pop_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isuser_var_pop_fields"');
  return user_var_pop_fields_possibleTypes.includes(obj.__typename);
};

const user_var_samp_fields_possibleTypes: string[] = ["user_var_samp_fields"];
export const isuser_var_samp_fields = (obj?: { __typename?: any } | null): obj is user_var_samp_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isuser_var_samp_fields"');
  return user_var_samp_fields_possibleTypes.includes(obj.__typename);
};

const user_variance_fields_possibleTypes: string[] = ["user_variance_fields"];
export const isuser_variance_fields = (obj?: { __typename?: any } | null): obj is user_variance_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isuser_variance_fields"');
  return user_variance_fields_possibleTypes.includes(obj.__typename);
};

/** mutation root */
export interface mutation_rootPromiseChain {
  /** delete data from the table: "user" */
  delete_user: (args: {
    /** filter the rows which have to be deleted */
    where: user_bool_exp;
  }) => user_mutation_responsePromiseChain & {
    get: <R extends user_mutation_responseRequest>(
      request: R,
      defaultValue?: FieldsSelection<user_mutation_response, R> | undefined
    ) => Promise<FieldsSelection<user_mutation_response, R> | undefined>;
  };

  /** delete single row from the table: "user" */
  delete_user_by_pk: (args: {
    id: Scalars["String"];
  }) => userPromiseChain & {
    get: <R extends userRequest>(
      request: R,
      defaultValue?: FieldsSelection<user, R> | undefined
    ) => Promise<FieldsSelection<user, R> | undefined>;
  };

  /** insert data into the table: "user" */
  insert_user: (args: {
    /** the rows to be inserted */
    objects: user_insert_input[];
    /** on conflict condition */
    on_conflict?: user_on_conflict | null;
  }) => user_mutation_responsePromiseChain & {
    get: <R extends user_mutation_responseRequest>(
      request: R,
      defaultValue?: FieldsSelection<user_mutation_response, R> | undefined
    ) => Promise<FieldsSelection<user_mutation_response, R> | undefined>;
  };

  /** insert a single row into the table: "user" */
  insert_user_one: (args: {
    /** the row to be inserted */
    object: user_insert_input;
    /** on conflict condition */
    on_conflict?: user_on_conflict | null;
  }) => userPromiseChain & {
    get: <R extends userRequest>(
      request: R,
      defaultValue?: FieldsSelection<user, R> | undefined
    ) => Promise<FieldsSelection<user, R> | undefined>;
  };

  /** update data of the table: "user" */
  update_user: (args: {
    /** increments the integer columns with given value of the filtered values */
    _inc?: user_inc_input | null;
    /** sets the columns of the filtered rows to the given values */
    _set?: user_set_input | null;
    /** filter the rows which have to be updated */
    where: user_bool_exp;
  }) => user_mutation_responsePromiseChain & {
    get: <R extends user_mutation_responseRequest>(
      request: R,
      defaultValue?: FieldsSelection<user_mutation_response, R> | undefined
    ) => Promise<FieldsSelection<user_mutation_response, R> | undefined>;
  };

  /** update single row of the table: "user" */
  update_user_by_pk: (args: {
    /** increments the integer columns with given value of the filtered values */
    _inc?: user_inc_input | null;
    /** sets the columns of the filtered rows to the given values */
    _set?: user_set_input | null;
    pk_columns: user_pk_columns_input;
  }) => userPromiseChain & {
    get: <R extends userRequest>(
      request: R,
      defaultValue?: FieldsSelection<user, R> | undefined
    ) => Promise<FieldsSelection<user, R> | undefined>;
  };
}

/** mutation root */
export interface mutation_rootObservableChain {
  /** delete data from the table: "user" */
  delete_user: (args: {
    /** filter the rows which have to be deleted */
    where: user_bool_exp;
  }) => user_mutation_responseObservableChain & {
    get: <R extends user_mutation_responseRequest>(
      request: R,
      defaultValue?: FieldsSelection<user_mutation_response, R> | undefined
    ) => Observable<FieldsSelection<user_mutation_response, R> | undefined>;
  };

  /** delete single row from the table: "user" */
  delete_user_by_pk: (args: {
    id: Scalars["String"];
  }) => userObservableChain & {
    get: <R extends userRequest>(
      request: R,
      defaultValue?: FieldsSelection<user, R> | undefined
    ) => Observable<FieldsSelection<user, R> | undefined>;
  };

  /** insert data into the table: "user" */
  insert_user: (args: {
    /** the rows to be inserted */
    objects: user_insert_input[];
    /** on conflict condition */
    on_conflict?: user_on_conflict | null;
  }) => user_mutation_responseObservableChain & {
    get: <R extends user_mutation_responseRequest>(
      request: R,
      defaultValue?: FieldsSelection<user_mutation_response, R> | undefined
    ) => Observable<FieldsSelection<user_mutation_response, R> | undefined>;
  };

  /** insert a single row into the table: "user" */
  insert_user_one: (args: {
    /** the row to be inserted */
    object: user_insert_input;
    /** on conflict condition */
    on_conflict?: user_on_conflict | null;
  }) => userObservableChain & {
    get: <R extends userRequest>(
      request: R,
      defaultValue?: FieldsSelection<user, R> | undefined
    ) => Observable<FieldsSelection<user, R> | undefined>;
  };

  /** update data of the table: "user" */
  update_user: (args: {
    /** increments the integer columns with given value of the filtered values */
    _inc?: user_inc_input | null;
    /** sets the columns of the filtered rows to the given values */
    _set?: user_set_input | null;
    /** filter the rows which have to be updated */
    where: user_bool_exp;
  }) => user_mutation_responseObservableChain & {
    get: <R extends user_mutation_responseRequest>(
      request: R,
      defaultValue?: FieldsSelection<user_mutation_response, R> | undefined
    ) => Observable<FieldsSelection<user_mutation_response, R> | undefined>;
  };

  /** update single row of the table: "user" */
  update_user_by_pk: (args: {
    /** increments the integer columns with given value of the filtered values */
    _inc?: user_inc_input | null;
    /** sets the columns of the filtered rows to the given values */
    _set?: user_set_input | null;
    pk_columns: user_pk_columns_input;
  }) => userObservableChain & {
    get: <R extends userRequest>(
      request: R,
      defaultValue?: FieldsSelection<user, R> | undefined
    ) => Observable<FieldsSelection<user, R> | undefined>;
  };
}

/** query root */
export interface query_rootPromiseChain {
  /** fetch data from the table: "user" */
  user: ((args?: {
    /** distinct select on columns */
    distinct_on?: user_select_column[] | null;
    /** limit the number of rows returned */
    limit?: Scalars["Int"] | null;
    /** skip the first n rows. Use only with order_by */
    offset?: Scalars["Int"] | null;
    /** sort the rows by one or more columns */
    order_by?: user_order_by[] | null;
    /** filter the rows returned */
    where?: user_bool_exp | null;
  }) => {
    get: <R extends userRequest>(
      request: R,
      defaultValue?: FieldsSelection<user, R>[]
    ) => Promise<FieldsSelection<user, R>[]>;
  }) & {
    get: <R extends userRequest>(
      request: R,
      defaultValue?: FieldsSelection<user, R>[]
    ) => Promise<FieldsSelection<user, R>[]>;
  };

  /** fetch aggregated fields from the table: "user" */
  user_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: user_select_column[] | null;
    /** limit the number of rows returned */
    limit?: Scalars["Int"] | null;
    /** skip the first n rows. Use only with order_by */
    offset?: Scalars["Int"] | null;
    /** sort the rows by one or more columns */
    order_by?: user_order_by[] | null;
    /** filter the rows returned */
    where?: user_bool_exp | null;
  }) => user_aggregatePromiseChain & {
    get: <R extends user_aggregateRequest>(
      request: R,
      defaultValue?: FieldsSelection<user_aggregate, R>
    ) => Promise<FieldsSelection<user_aggregate, R>>;
  }) &
    (user_aggregatePromiseChain & {
      get: <R extends user_aggregateRequest>(
        request: R,
        defaultValue?: FieldsSelection<user_aggregate, R>
      ) => Promise<FieldsSelection<user_aggregate, R>>;
    });

  /** fetch data from the table: "user" using primary key columns */
  user_by_pk: (args: {
    id: Scalars["String"];
  }) => userPromiseChain & {
    get: <R extends userRequest>(
      request: R,
      defaultValue?: FieldsSelection<user, R> | undefined
    ) => Promise<FieldsSelection<user, R> | undefined>;
  };
}

/** query root */
export interface query_rootObservableChain {
  /** fetch data from the table: "user" */
  user: ((args?: {
    /** distinct select on columns */
    distinct_on?: user_select_column[] | null;
    /** limit the number of rows returned */
    limit?: Scalars["Int"] | null;
    /** skip the first n rows. Use only with order_by */
    offset?: Scalars["Int"] | null;
    /** sort the rows by one or more columns */
    order_by?: user_order_by[] | null;
    /** filter the rows returned */
    where?: user_bool_exp | null;
  }) => {
    get: <R extends userRequest>(
      request: R,
      defaultValue?: FieldsSelection<user, R>[]
    ) => Observable<FieldsSelection<user, R>[]>;
  }) & {
    get: <R extends userRequest>(
      request: R,
      defaultValue?: FieldsSelection<user, R>[]
    ) => Observable<FieldsSelection<user, R>[]>;
  };

  /** fetch aggregated fields from the table: "user" */
  user_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: user_select_column[] | null;
    /** limit the number of rows returned */
    limit?: Scalars["Int"] | null;
    /** skip the first n rows. Use only with order_by */
    offset?: Scalars["Int"] | null;
    /** sort the rows by one or more columns */
    order_by?: user_order_by[] | null;
    /** filter the rows returned */
    where?: user_bool_exp | null;
  }) => user_aggregateObservableChain & {
    get: <R extends user_aggregateRequest>(
      request: R,
      defaultValue?: FieldsSelection<user_aggregate, R>
    ) => Observable<FieldsSelection<user_aggregate, R>>;
  }) &
    (user_aggregateObservableChain & {
      get: <R extends user_aggregateRequest>(
        request: R,
        defaultValue?: FieldsSelection<user_aggregate, R>
      ) => Observable<FieldsSelection<user_aggregate, R>>;
    });

  /** fetch data from the table: "user" using primary key columns */
  user_by_pk: (args: {
    id: Scalars["String"];
  }) => userObservableChain & {
    get: <R extends userRequest>(
      request: R,
      defaultValue?: FieldsSelection<user, R> | undefined
    ) => Observable<FieldsSelection<user, R> | undefined>;
  };
}

/** subscription root */
export interface subscription_rootPromiseChain {
  /** fetch data from the table: "user" */
  user: ((args?: {
    /** distinct select on columns */
    distinct_on?: user_select_column[] | null;
    /** limit the number of rows returned */
    limit?: Scalars["Int"] | null;
    /** skip the first n rows. Use only with order_by */
    offset?: Scalars["Int"] | null;
    /** sort the rows by one or more columns */
    order_by?: user_order_by[] | null;
    /** filter the rows returned */
    where?: user_bool_exp | null;
  }) => {
    get: <R extends userRequest>(
      request: R,
      defaultValue?: FieldsSelection<user, R>[]
    ) => Promise<FieldsSelection<user, R>[]>;
  }) & {
    get: <R extends userRequest>(
      request: R,
      defaultValue?: FieldsSelection<user, R>[]
    ) => Promise<FieldsSelection<user, R>[]>;
  };

  /** fetch aggregated fields from the table: "user" */
  user_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: user_select_column[] | null;
    /** limit the number of rows returned */
    limit?: Scalars["Int"] | null;
    /** skip the first n rows. Use only with order_by */
    offset?: Scalars["Int"] | null;
    /** sort the rows by one or more columns */
    order_by?: user_order_by[] | null;
    /** filter the rows returned */
    where?: user_bool_exp | null;
  }) => user_aggregatePromiseChain & {
    get: <R extends user_aggregateRequest>(
      request: R,
      defaultValue?: FieldsSelection<user_aggregate, R>
    ) => Promise<FieldsSelection<user_aggregate, R>>;
  }) &
    (user_aggregatePromiseChain & {
      get: <R extends user_aggregateRequest>(
        request: R,
        defaultValue?: FieldsSelection<user_aggregate, R>
      ) => Promise<FieldsSelection<user_aggregate, R>>;
    });

  /** fetch data from the table: "user" using primary key columns */
  user_by_pk: (args: {
    id: Scalars["String"];
  }) => userPromiseChain & {
    get: <R extends userRequest>(
      request: R,
      defaultValue?: FieldsSelection<user, R> | undefined
    ) => Promise<FieldsSelection<user, R> | undefined>;
  };
}

/** subscription root */
export interface subscription_rootObservableChain {
  /** fetch data from the table: "user" */
  user: ((args?: {
    /** distinct select on columns */
    distinct_on?: user_select_column[] | null;
    /** limit the number of rows returned */
    limit?: Scalars["Int"] | null;
    /** skip the first n rows. Use only with order_by */
    offset?: Scalars["Int"] | null;
    /** sort the rows by one or more columns */
    order_by?: user_order_by[] | null;
    /** filter the rows returned */
    where?: user_bool_exp | null;
  }) => {
    get: <R extends userRequest>(
      request: R,
      defaultValue?: FieldsSelection<user, R>[]
    ) => Observable<FieldsSelection<user, R>[]>;
  }) & {
    get: <R extends userRequest>(
      request: R,
      defaultValue?: FieldsSelection<user, R>[]
    ) => Observable<FieldsSelection<user, R>[]>;
  };

  /** fetch aggregated fields from the table: "user" */
  user_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: user_select_column[] | null;
    /** limit the number of rows returned */
    limit?: Scalars["Int"] | null;
    /** skip the first n rows. Use only with order_by */
    offset?: Scalars["Int"] | null;
    /** sort the rows by one or more columns */
    order_by?: user_order_by[] | null;
    /** filter the rows returned */
    where?: user_bool_exp | null;
  }) => user_aggregateObservableChain & {
    get: <R extends user_aggregateRequest>(
      request: R,
      defaultValue?: FieldsSelection<user_aggregate, R>
    ) => Observable<FieldsSelection<user_aggregate, R>>;
  }) &
    (user_aggregateObservableChain & {
      get: <R extends user_aggregateRequest>(
        request: R,
        defaultValue?: FieldsSelection<user_aggregate, R>
      ) => Observable<FieldsSelection<user_aggregate, R>>;
    });

  /** fetch data from the table: "user" using primary key columns */
  user_by_pk: (args: {
    id: Scalars["String"];
  }) => userObservableChain & {
    get: <R extends userRequest>(
      request: R,
      defaultValue?: FieldsSelection<user, R> | undefined
    ) => Observable<FieldsSelection<user, R> | undefined>;
  };
}

/** columns and relationships of "user" */
export interface userPromiseChain {
  age: { get: (request?: boolean | number, defaultValue?: Scalars["Int"]) => Promise<Scalars["Int"]> };
  id: { get: (request?: boolean | number, defaultValue?: Scalars["String"]) => Promise<Scalars["String"]> };
  name: { get: (request?: boolean | number, defaultValue?: Scalars["String"]) => Promise<Scalars["String"]> };
}

/** columns and relationships of "user" */
export interface userObservableChain {
  age: { get: (request?: boolean | number, defaultValue?: Scalars["Int"]) => Observable<Scalars["Int"]> };
  id: { get: (request?: boolean | number, defaultValue?: Scalars["String"]) => Observable<Scalars["String"]> };
  name: { get: (request?: boolean | number, defaultValue?: Scalars["String"]) => Observable<Scalars["String"]> };
}

/** aggregated selection of "user" */
export interface user_aggregatePromiseChain {
  aggregate: user_aggregate_fieldsPromiseChain & {
    get: <R extends user_aggregate_fieldsRequest>(
      request: R,
      defaultValue?: FieldsSelection<user_aggregate_fields, R> | undefined
    ) => Promise<FieldsSelection<user_aggregate_fields, R> | undefined>;
  };
  nodes: {
    get: <R extends userRequest>(
      request: R,
      defaultValue?: FieldsSelection<user, R>[]
    ) => Promise<FieldsSelection<user, R>[]>;
  };
}

/** aggregated selection of "user" */
export interface user_aggregateObservableChain {
  aggregate: user_aggregate_fieldsObservableChain & {
    get: <R extends user_aggregate_fieldsRequest>(
      request: R,
      defaultValue?: FieldsSelection<user_aggregate_fields, R> | undefined
    ) => Observable<FieldsSelection<user_aggregate_fields, R> | undefined>;
  };
  nodes: {
    get: <R extends userRequest>(
      request: R,
      defaultValue?: FieldsSelection<user, R>[]
    ) => Observable<FieldsSelection<user, R>[]>;
  };
}

/** aggregate fields of "user" */
export interface user_aggregate_fieldsPromiseChain {
  avg: user_avg_fieldsPromiseChain & {
    get: <R extends user_avg_fieldsRequest>(
      request: R,
      defaultValue?: FieldsSelection<user_avg_fields, R> | undefined
    ) => Promise<FieldsSelection<user_avg_fields, R> | undefined>;
  };
  count: ((args?: { columns?: user_select_column[] | null; distinct?: Scalars["Boolean"] | null }) => {
    get: (request?: boolean | number, defaultValue?: Scalars["Int"] | undefined) => Promise<Scalars["Int"] | undefined>;
  }) & {
    get: (request?: boolean | number, defaultValue?: Scalars["Int"] | undefined) => Promise<Scalars["Int"] | undefined>;
  };
  max: user_max_fieldsPromiseChain & {
    get: <R extends user_max_fieldsRequest>(
      request: R,
      defaultValue?: FieldsSelection<user_max_fields, R> | undefined
    ) => Promise<FieldsSelection<user_max_fields, R> | undefined>;
  };
  min: user_min_fieldsPromiseChain & {
    get: <R extends user_min_fieldsRequest>(
      request: R,
      defaultValue?: FieldsSelection<user_min_fields, R> | undefined
    ) => Promise<FieldsSelection<user_min_fields, R> | undefined>;
  };
  stddev: user_stddev_fieldsPromiseChain & {
    get: <R extends user_stddev_fieldsRequest>(
      request: R,
      defaultValue?: FieldsSelection<user_stddev_fields, R> | undefined
    ) => Promise<FieldsSelection<user_stddev_fields, R> | undefined>;
  };
  stddev_pop: user_stddev_pop_fieldsPromiseChain & {
    get: <R extends user_stddev_pop_fieldsRequest>(
      request: R,
      defaultValue?: FieldsSelection<user_stddev_pop_fields, R> | undefined
    ) => Promise<FieldsSelection<user_stddev_pop_fields, R> | undefined>;
  };
  stddev_samp: user_stddev_samp_fieldsPromiseChain & {
    get: <R extends user_stddev_samp_fieldsRequest>(
      request: R,
      defaultValue?: FieldsSelection<user_stddev_samp_fields, R> | undefined
    ) => Promise<FieldsSelection<user_stddev_samp_fields, R> | undefined>;
  };
  sum: user_sum_fieldsPromiseChain & {
    get: <R extends user_sum_fieldsRequest>(
      request: R,
      defaultValue?: FieldsSelection<user_sum_fields, R> | undefined
    ) => Promise<FieldsSelection<user_sum_fields, R> | undefined>;
  };
  var_pop: user_var_pop_fieldsPromiseChain & {
    get: <R extends user_var_pop_fieldsRequest>(
      request: R,
      defaultValue?: FieldsSelection<user_var_pop_fields, R> | undefined
    ) => Promise<FieldsSelection<user_var_pop_fields, R> | undefined>;
  };
  var_samp: user_var_samp_fieldsPromiseChain & {
    get: <R extends user_var_samp_fieldsRequest>(
      request: R,
      defaultValue?: FieldsSelection<user_var_samp_fields, R> | undefined
    ) => Promise<FieldsSelection<user_var_samp_fields, R> | undefined>;
  };
  variance: user_variance_fieldsPromiseChain & {
    get: <R extends user_variance_fieldsRequest>(
      request: R,
      defaultValue?: FieldsSelection<user_variance_fields, R> | undefined
    ) => Promise<FieldsSelection<user_variance_fields, R> | undefined>;
  };
}

/** aggregate fields of "user" */
export interface user_aggregate_fieldsObservableChain {
  avg: user_avg_fieldsObservableChain & {
    get: <R extends user_avg_fieldsRequest>(
      request: R,
      defaultValue?: FieldsSelection<user_avg_fields, R> | undefined
    ) => Observable<FieldsSelection<user_avg_fields, R> | undefined>;
  };
  count: ((args?: { columns?: user_select_column[] | null; distinct?: Scalars["Boolean"] | null }) => {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Int"] | undefined
    ) => Observable<Scalars["Int"] | undefined>;
  }) & {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Int"] | undefined
    ) => Observable<Scalars["Int"] | undefined>;
  };
  max: user_max_fieldsObservableChain & {
    get: <R extends user_max_fieldsRequest>(
      request: R,
      defaultValue?: FieldsSelection<user_max_fields, R> | undefined
    ) => Observable<FieldsSelection<user_max_fields, R> | undefined>;
  };
  min: user_min_fieldsObservableChain & {
    get: <R extends user_min_fieldsRequest>(
      request: R,
      defaultValue?: FieldsSelection<user_min_fields, R> | undefined
    ) => Observable<FieldsSelection<user_min_fields, R> | undefined>;
  };
  stddev: user_stddev_fieldsObservableChain & {
    get: <R extends user_stddev_fieldsRequest>(
      request: R,
      defaultValue?: FieldsSelection<user_stddev_fields, R> | undefined
    ) => Observable<FieldsSelection<user_stddev_fields, R> | undefined>;
  };
  stddev_pop: user_stddev_pop_fieldsObservableChain & {
    get: <R extends user_stddev_pop_fieldsRequest>(
      request: R,
      defaultValue?: FieldsSelection<user_stddev_pop_fields, R> | undefined
    ) => Observable<FieldsSelection<user_stddev_pop_fields, R> | undefined>;
  };
  stddev_samp: user_stddev_samp_fieldsObservableChain & {
    get: <R extends user_stddev_samp_fieldsRequest>(
      request: R,
      defaultValue?: FieldsSelection<user_stddev_samp_fields, R> | undefined
    ) => Observable<FieldsSelection<user_stddev_samp_fields, R> | undefined>;
  };
  sum: user_sum_fieldsObservableChain & {
    get: <R extends user_sum_fieldsRequest>(
      request: R,
      defaultValue?: FieldsSelection<user_sum_fields, R> | undefined
    ) => Observable<FieldsSelection<user_sum_fields, R> | undefined>;
  };
  var_pop: user_var_pop_fieldsObservableChain & {
    get: <R extends user_var_pop_fieldsRequest>(
      request: R,
      defaultValue?: FieldsSelection<user_var_pop_fields, R> | undefined
    ) => Observable<FieldsSelection<user_var_pop_fields, R> | undefined>;
  };
  var_samp: user_var_samp_fieldsObservableChain & {
    get: <R extends user_var_samp_fieldsRequest>(
      request: R,
      defaultValue?: FieldsSelection<user_var_samp_fields, R> | undefined
    ) => Observable<FieldsSelection<user_var_samp_fields, R> | undefined>;
  };
  variance: user_variance_fieldsObservableChain & {
    get: <R extends user_variance_fieldsRequest>(
      request: R,
      defaultValue?: FieldsSelection<user_variance_fields, R> | undefined
    ) => Observable<FieldsSelection<user_variance_fields, R> | undefined>;
  };
}

/** aggregate avg on columns */
export interface user_avg_fieldsPromiseChain {
  age: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Float"] | undefined
    ) => Promise<Scalars["Float"] | undefined>;
  };
}

/** aggregate avg on columns */
export interface user_avg_fieldsObservableChain {
  age: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Float"] | undefined
    ) => Observable<Scalars["Float"] | undefined>;
  };
}

/** aggregate max on columns */
export interface user_max_fieldsPromiseChain {
  age: {
    get: (request?: boolean | number, defaultValue?: Scalars["Int"] | undefined) => Promise<Scalars["Int"] | undefined>;
  };
  id: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"] | undefined
    ) => Promise<Scalars["String"] | undefined>;
  };
  name: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"] | undefined
    ) => Promise<Scalars["String"] | undefined>;
  };
}

/** aggregate max on columns */
export interface user_max_fieldsObservableChain {
  age: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Int"] | undefined
    ) => Observable<Scalars["Int"] | undefined>;
  };
  id: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"] | undefined
    ) => Observable<Scalars["String"] | undefined>;
  };
  name: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"] | undefined
    ) => Observable<Scalars["String"] | undefined>;
  };
}

/** aggregate min on columns */
export interface user_min_fieldsPromiseChain {
  age: {
    get: (request?: boolean | number, defaultValue?: Scalars["Int"] | undefined) => Promise<Scalars["Int"] | undefined>;
  };
  id: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"] | undefined
    ) => Promise<Scalars["String"] | undefined>;
  };
  name: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"] | undefined
    ) => Promise<Scalars["String"] | undefined>;
  };
}

/** aggregate min on columns */
export interface user_min_fieldsObservableChain {
  age: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Int"] | undefined
    ) => Observable<Scalars["Int"] | undefined>;
  };
  id: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"] | undefined
    ) => Observable<Scalars["String"] | undefined>;
  };
  name: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"] | undefined
    ) => Observable<Scalars["String"] | undefined>;
  };
}

/** response of any mutation on the table "user" */
export interface user_mutation_responsePromiseChain {
  /** number of affected rows by the mutation */
  affected_rows: { get: (request?: boolean | number, defaultValue?: Scalars["Int"]) => Promise<Scalars["Int"]> };

  /** data of the affected rows by the mutation */
  returning: {
    get: <R extends userRequest>(
      request: R,
      defaultValue?: FieldsSelection<user, R>[]
    ) => Promise<FieldsSelection<user, R>[]>;
  };
}

/** response of any mutation on the table "user" */
export interface user_mutation_responseObservableChain {
  /** number of affected rows by the mutation */
  affected_rows: { get: (request?: boolean | number, defaultValue?: Scalars["Int"]) => Observable<Scalars["Int"]> };

  /** data of the affected rows by the mutation */
  returning: {
    get: <R extends userRequest>(
      request: R,
      defaultValue?: FieldsSelection<user, R>[]
    ) => Observable<FieldsSelection<user, R>[]>;
  };
}

/** aggregate stddev on columns */
export interface user_stddev_fieldsPromiseChain {
  age: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Float"] | undefined
    ) => Promise<Scalars["Float"] | undefined>;
  };
}

/** aggregate stddev on columns */
export interface user_stddev_fieldsObservableChain {
  age: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Float"] | undefined
    ) => Observable<Scalars["Float"] | undefined>;
  };
}

/** aggregate stddev_pop on columns */
export interface user_stddev_pop_fieldsPromiseChain {
  age: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Float"] | undefined
    ) => Promise<Scalars["Float"] | undefined>;
  };
}

/** aggregate stddev_pop on columns */
export interface user_stddev_pop_fieldsObservableChain {
  age: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Float"] | undefined
    ) => Observable<Scalars["Float"] | undefined>;
  };
}

/** aggregate stddev_samp on columns */
export interface user_stddev_samp_fieldsPromiseChain {
  age: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Float"] | undefined
    ) => Promise<Scalars["Float"] | undefined>;
  };
}

/** aggregate stddev_samp on columns */
export interface user_stddev_samp_fieldsObservableChain {
  age: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Float"] | undefined
    ) => Observable<Scalars["Float"] | undefined>;
  };
}

/** aggregate sum on columns */
export interface user_sum_fieldsPromiseChain {
  age: {
    get: (request?: boolean | number, defaultValue?: Scalars["Int"] | undefined) => Promise<Scalars["Int"] | undefined>;
  };
}

/** aggregate sum on columns */
export interface user_sum_fieldsObservableChain {
  age: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Int"] | undefined
    ) => Observable<Scalars["Int"] | undefined>;
  };
}

/** aggregate var_pop on columns */
export interface user_var_pop_fieldsPromiseChain {
  age: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Float"] | undefined
    ) => Promise<Scalars["Float"] | undefined>;
  };
}

/** aggregate var_pop on columns */
export interface user_var_pop_fieldsObservableChain {
  age: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Float"] | undefined
    ) => Observable<Scalars["Float"] | undefined>;
  };
}

/** aggregate var_samp on columns */
export interface user_var_samp_fieldsPromiseChain {
  age: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Float"] | undefined
    ) => Promise<Scalars["Float"] | undefined>;
  };
}

/** aggregate var_samp on columns */
export interface user_var_samp_fieldsObservableChain {
  age: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Float"] | undefined
    ) => Observable<Scalars["Float"] | undefined>;
  };
}

/** aggregate variance on columns */
export interface user_variance_fieldsPromiseChain {
  age: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Float"] | undefined
    ) => Promise<Scalars["Float"] | undefined>;
  };
}

/** aggregate variance on columns */
export interface user_variance_fieldsObservableChain {
  age: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Float"] | undefined
    ) => Observable<Scalars["Float"] | undefined>;
  };
}
