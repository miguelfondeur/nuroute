const path = require('path')

module.exports = {
  context: __dirname,
  entry: './static/src/js/app.jsx',
  output: {
    path: path.join(__dirname, './static/dist/js'),
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
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      }
    ]
  }
}
