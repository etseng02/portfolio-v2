module.exports = {
  siteMetadata: {
    title: `Eddie Tseng`,
    description: `Front End Developer, creating and designing content for human consumption.`,
    author: `Eddie Tseng`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Eddie Tseng`,
        short_name: `Eddie Tseng`,
        start_url: `/`,
        background_color: "hsl(230, 25%, 18%)",
        theme_color: "hsl(230, 25%, 18%)",
        display: `minimal-ui`,
        include_favicon: false,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve(`./src/components/Layout.js`),
        },
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
