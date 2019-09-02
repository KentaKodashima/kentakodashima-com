# Learnings from developing website with Gatsby and Netlify CMS

## React Helmet
A npm package that provides a React component interface to manage document head (information inside `<haed></head>`) in each page.

In Gatsby, `gatsby-plugin-react-helmet` provides support for rendering data added with React Helmet.

Reference: [https://www.gatsbyjs.org/docs/add-page-metadata/](https://www.gatsbyjs.org/docs/add-page-metadata/)

## SEO component
Gatsby automatically puts all data of your gatsby-config file into the siteMetadata section in GraphQL.

The SEO component is intended to make it easier to manage metadata.

### propTypes
Define types of the data that will be provided as component's props.

### defaultProps
Initializing `defaultProps` with empty values will make sure that the component always uses information stored into `siteMetadata `.

Reference: [https://www.gatsbyjs.org/docs/add-seo-component/](https://www.gatsbyjs.org/docs/add-seo-component/)

