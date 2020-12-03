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

const gatsbyPluginSass = {
  resolve: `gatsby-plugin-sass`,
  options: {
    data: `
      @import "${__dirname}/src/styles/index";
    `,
  },
}

const gatsbyPluginAliasImports = {
  resolve: `gatsby-plugin-alias-imports`,
  options: {
    alias: {
      components: path.resolve(__dirname, 'src/components'),
      hooks: path.resolve(__dirname, 'src/hooks'),
      services: path.resolve(__dirname, 'src/services/index.js'),
      styles: path.resolve(__dirname, 'src/styles'),
      images: path.resolve(__dirname, 'src/images'),
    },
    extensions: ['js', 'sass'],
  },
}

module.exports = {
  siteMetadata: {
    title: `Gatsby Advanced Boilerplate`,
    description: `A Gatsby boilerplate to help you create static and fast websites`,
    repository: `maplessmann/gatsby-advanced-boilerplate`,
    author: `@maplessmann`,
  },
  plugins: [
    gatsbySourceFilesystem,
    gatsbyPluginManifest,
    gatsbyPluginAliasImports,
    gatsbyPluginSass,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-layout`,
  ],
}
