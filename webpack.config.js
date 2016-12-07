const path = require('path')

module.exports = {
  context: __dirname,
  entry: './static/src/scripts/containers/App/App.jsx',
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
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel-loader']
      }
    ]
  }
}
