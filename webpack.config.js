
module.exports = {
  context: __dirname,
  entry: './static/src/index.jsx',

  output: {
    path: path.join(__dirname, './static/build/js'),
    filename: 'bundle.js'
  },
   resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },

  module: {
    loaders: [
      {
        test: /\.js$/, 
        exclude: /node_modules/, 
        loaders: ['react-hot', 'babel-loader']
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  }

};
