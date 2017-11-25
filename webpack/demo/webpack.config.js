const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack'); //to access built-in plugins
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const path = require('path');

const config = {
  entry: {
    app:'./src/index.js',
    print:'./src/print.js',
  },
  devtool: 'inline-source-map',
  // devServer: {
  //    contentBase: './dist'
  // },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"]
      },
       {
         test: /\.(png|svg|jpg|gif)$/,
         use: [
           'file-loader'
         ]
       },
       {
         test: /\.(woff|woff2|eot|ttf|otf)$/,
         use: [
           'file-loader'
         ]
       }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new UglifyJSPlugin(),
    new HtmlWebpackPlugin({  title: 'Webpack', template: 'src/index.html' }),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 7000,
      server: { baseDir: ['./'] }
    })
  ]
};

module.exports = config;
