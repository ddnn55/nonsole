var path = require('path');

module.exports = {
  entry: './src/nonsole.js',
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            extends: path.join(__dirname, '/.babelrc')
          }
        }
      }
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'nonsole.min.js',
    libraryTarget: 'umd',
    library: 'nonsole'
  }
};