// theme.config.js
export default {
  github: "https://github.com/meabed/gqlts",
  projectLink: "https://github.com/meabed/gqlts",
  docsRepositoryBase: "https://github.com/meabed/gqlts/blob/master",
  titleSuffix: " – Gqlts",
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null, // customizable, you can use algolia for example
  darkMode: true,
  footer: true,
  defaultMenuCollapsed: false,
  floatTOC: true,
  footerText: `MIT ${new Date().getFullYear()}`,
  footerEditLink: `Edit this page on GitHub`,
  logo: (
    <>
      <span>Gqlts - Type safe Graphql query builder</span>
    </>
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Nextra: the next docs builder" />
      <meta name="og:title" content="Nextra: the next docs builder" />
    </>
  ),
};
