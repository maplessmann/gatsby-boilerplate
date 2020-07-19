const path = require('path')

const gatsbySourceFilesystem = {
  resolve: `gatsby-source-filesystem`,
  options: {
    name: `images`,
    path: `${__dirname}/src/images`,
  },
}

const gatsbyPluginManifest = {
  resolve: `gatsby-plugin-manifest`,
  options: {
    name: `gatsby-advanced-boilerplate`,
    short_name: `starter`,
    start_url: `/`,
    background_color: `#663399`,
    theme_color: `#663399`,
    display: `minimal-ui`,
    icon: `src/images/gatsby-icon.png`,
  },
}

const gatsbyPluginAliasImports = {
  resolve: `gatsby-plugin-alias-imports`,
  options: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
    },
    extensions: ['js', 'sass'],
  },
}

module.exports = {
  siteMetadata: {
    title: `Gatsby Advanced Boilerplate`,
    description: `A Gatsby Boilerplate`,
    author: `@maplessmann`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    gatsbySourceFilesystem,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    gatsbyPluginManifest,
    gatsbyPluginAliasImports,
  ],
}
