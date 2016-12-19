const path = require('path');
const merge = require('webpack-merge');

module.exports = {
  context: __dirname,
  entry: './static/src/scripts/containers/app/App.jsx',
  output: {
    path: path.join(__dirname, './static/public/js'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
  module: {
    preloaders: [
      {
        test: /\.jsx$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader?modules&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'],
      },
      {
        test: /\.(jpg|png)$/,
        use: 'url-loader',
        options: {
          limit: 25000
        }
      }
    ]
  }
};
