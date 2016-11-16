
module.exports = {
  entry: ,

  output: {
    path: 'build/js',
    filename: 'bundle.js'
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

  // context: __dirname,
  // entry: './static/src/js/index.jsx',
  // output: {
  //   path: path.join(__dirname, './static/dist/js'),
  //   filename: 'bundle.js'
  // },
  // resolve: {
  //   extensions: ['', '.js', '.jsx', '.json']
  // },
