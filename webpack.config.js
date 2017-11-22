const webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    entry:  [__dirname+"/client/assets/js/entry.js", __dirname+"/client/assets/scss/importer.scss"],
    output: {
        path: __dirname+"/build",
        filename: "js/bundle.js"
    },
    watch:true,
    module: {
      rules: [
        { // regular css files
          test: /\.css$/,
          loaders: ExtractTextPlugin.extract({
            use: 'css-loader?importLoaders=1',
          }),
          exclude:__dirname+'/node_modules'
        },
        { // sass / scss loader for webpack
          test: /\.scss$/,
          loaders: ExtractTextPlugin.extract(['css-loader', 'sass-loader']),
          exclude:__dirname+'/node_modules'
          // options: {
          //   resources: [__dirname+'/client/assets/scss/*.scss']
          // },
          //test: /\.scss$/, use: 'style!css!sass!sass-resources'
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin({ // define where to save the file
        filename: 'main.bundle.css',
        allChunks: true,
      }),
      new BrowserSyncPlugin({
        host: 'localhost',
        port: 7000,
        server: { baseDir: ['./'] }
      })
    ],
};
