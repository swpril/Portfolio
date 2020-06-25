/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require('path');

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Swpril Ahuja`,
    description: `Personal Portfolio of Swpril`,
    author: `@oyeshubhu`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Raleway`,
            variants: [`200`, `400`, `normal`, `bold`]
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      }
    },
    `gatsby-plugin-material-ui`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`,
    `gatsby-plugin-smoothscroll`,
  ],
}