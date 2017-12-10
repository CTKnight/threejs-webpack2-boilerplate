const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

let ROOT_PATH = __dirname
let SRC_PATH = path.resolve(ROOT_PATH, 'src')
let DIST_PATH = path.resolve(ROOT_PATH, 'dist')
let JS_PATH = path.resolve(SRC_PATH, 'js')

module.exports = {
  entry: {
    app: path.resolve(JS_PATH, './main.js')
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: SRC_PATH
  },
  plugins: [
    new CleanWebpackPlugin([DIST_PATH]),
    new HtmlWebpackPlugin({
      title: 'threejs webpack boilerplate',
      template: path.resolve(SRC_PATH, './index.html'),
      inject: 'body'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: DIST_PATH
  },
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.glsl$/,
        use: {
          loader: 'webpack-glsl'
        }
      }
    ]
  }
};