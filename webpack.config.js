const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const env = process.env.NODE_ENV || 'development';
const isProduction = env === 'production';

module.exports = {
  mode: isProduction ? 'production' : 'development',

  devtool: false,

  target: 'web',

  entry: './src/index.js',

  output: {
    path: path.join(__dirname, './'),
    filename: isProduction ? 'swipe.min.js' : 'swipe.js',
    library: 'Swipe',
    libraryTarget: 'umd'
  },

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        parallel: true
      })
    ]
  }
};
