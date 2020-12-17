require('dotenv').config()

const { GITHUB_TOKEN, ANALYTICS_ID } = process.env

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
    name: `gatsby-boilerplate`,
    short_name: `Gatsby Boilerplate`,
    start_url: `/`,
    background_color: `#663399`,
    theme_color: `#663399`,
    display: `minimal-ui`,
    icon: `src/images/gatsby-icon.png`,
    icon_options: {
      purpose: `any maskable`,
    },
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

const gatsbyPluginGoogleAnalytics = ANALYTICS_ID && {
  resolve: `gatsby-plugin-google-analytics`,
  options: {
    trackingId: ANALYTICS_ID,
    head: false,
  },
}

const gatsbySourceGraphql = {
  resolve: `gatsby-source-graphql`,
  options: {
    typeName: `GitHub`,
    fieldName: `github`,
    url: `https://api.github.com/graphql`,
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
    },
  },
}

module.exports = {
  siteMetadata: {
    title: `Gatsby Boilerplate`,
    description: `A boilerplate to help you create scalable and fast websites`,
    repository: `maplessmann/gatsby-boilerplate`,
    author: `@maplessmann`,
  },
  plugins: [
    gatsbySourceFilesystem,
    gatsbySourceGraphql,
    gatsbyPluginManifest,
    gatsbyPluginSass,
    gatsbyPluginGoogleAnalytics,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-layout`,
    `gatsby-transformer-sharp`,
  ].filter(plugin => !!plugin),
}
