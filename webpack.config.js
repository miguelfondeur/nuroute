const {resolve} = require('path');
const webpackValidator = require('webpack-validator');
const {getIfUtils} = require('webpack-config-utils');

module.exports = env => {
  const {ifProd, ifNotProd} = getIfUtils(env);
  return webpackValidator({
    context: resolve('static/src'),
    entry: './scripts/containers/app/App.jsx',
    output: {
      path: resolve('static/public/js'),
      filename: 'bundle.js',
      publicPath: '/.static/public/js/',
      pathinfo: ifNotProd()
    },
    devtool: ifProd('source-map', 'eval'),
    resolve: {
      extensions: ['.js', '.jsx', '.json']
    },
    stats: {
      colors: true,
      reasons: true,
      chunks: false
    },
    module: {
      // preLoaders: [
      //   {
      //     test: /\.jsx$/,
      //     loader: 'eslint-loader',
      //     exclude: /node_modules/
      //   }
      // ],
      loaders: [
        {
          test: /\.jsx$/,
          loaders: [
            'eslint-loader', 
            'babel-loader'],
          exclude: /node_modules/
        },
        {
          test: /\.json$/,
          loader: 'json-loader'
        },
        {
          test: /\.css$/,
          loaders: [
            'style-loader',
            'css-loader?modules&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader']
        }
      ]
    }

  });
};
