const { addBeforeLoader, loaderByName } = require('@craco/craco');

module.exports = {
  overrideWebpackConfig: ({
    webpackConfig
  }) => {
    webpackConfig.resolve.extensions.push('.graphql', '.gql');

    const graphqlLoader = {
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: require.resolve('graphql-tag/loader'),
    }

    addBeforeLoader(webpackConfig, loaderByName('babel-loader'), graphqlLoader);

    return webpackConfig;
  }
}
