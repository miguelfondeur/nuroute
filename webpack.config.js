const webpackValidator = require('webpack-validator');
const {resolve} = require('path');
const {getIfUtils} = require('webpack-config-utils');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = env => {
  const {ifProd, ifNotProd} = getIfUtils(env);
  return webpackValidator({
    context: resolve('static/src'),
    entry: './scripts/containers/app/App.jsx',
    output: {
      path: resolve('static/public/'),
      filename: 'bundle.js',
      publicPath: '/.static/public/',
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
      loaders: [
        {
          test: /\.jsx$/,
          loaders: [
            // 'eslint-loader',
            'babel-loader'],
          exclude: /node_modules/
        },
        {
          test: /\.json$/,
          loader: 'json-loader'
        },
        // style loader
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract({
            fallbackLoader: 'style-loader',
            loader: 'css-loader?modules&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
          })
        },
        //font loader
        {
          test: /\.(eot|svg|ttf|woff|woff2)$/,
          loader: 'file?name=public/fonts/[name].[ext]'
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin(ifProd('styles.[name].[chunkhash].css', 'styles.[name].css'))
    ],
    watch: true
  });
};
