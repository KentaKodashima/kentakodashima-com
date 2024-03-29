const proxy = require('http-proxy-middleware')

module.exports = {
  // for avoiding CORS while developing Netlify Functions locally
  // read more: https://www.gatsbyjs.org/docs/api-proxy/#advanced-proxying
  developMiddleware: app => {
    app.use(
      '/.netlify/functions/',
      proxy({
        target: 'http://localhost:9000',
        pathRewrite: {
          '/.netlify/functions/': '',
        },
      })
    )
  },
  siteMetadata: {
    title: `Kenta Kodashima | Full-Stack Developer`,
    description: `This is the portfolio website of Kenta Kodashima, a full-stack developer`,
    author: `Kenta Kodashima`,
    siteUrl: `https://kentakodashima.com`,
    url: `https://kentakodashima.com`,
    image: `/assets/ogimage.png`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#F9F9F9`,
        theme_color: `#1F1F1F`,
        display: `minimal-ui`,
        icon: `src/images/favicon-k.png`, // This path is relative to the root of the site.
      },
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/assets`,
        name: 'media',
      },
    },
    {
      // Local images
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      // Blog article thumbnails
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/src/pages/blog`,
      },
    },
    {
      // Project thumbnails
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/pages/projects`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              name: `media`,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWith: 960,
            },
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
  ],
}
