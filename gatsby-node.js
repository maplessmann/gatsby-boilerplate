const path = require('path')

exports.onCreateWebpackConfig = ({ actions, plugins }) => {
  actions.setWebpackConfig({
    plugins: [
      plugins.provide({
        React: 'react',
      }),
    ],

    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        hooks: path.resolve(__dirname, 'src/hooks'),
        images: path.resolve(__dirname, 'src/images'),
        services: path.resolve(__dirname, 'src/services/index.js'),
        styles: path.resolve(__dirname, 'src/styles'),
      },
    },
  })
}
