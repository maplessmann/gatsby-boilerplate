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
    short_name: `Gatsby Boilerplate`,
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
    description: `A Gatsby boilerplate to help you build static websites`,
    author: `@maplessmann`,
  },
  plugins: [
    gatsbySourceFilesystem,
    gatsbyPluginManifest,
    gatsbyPluginAliasImports,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-provide-react`,
  ],
}
