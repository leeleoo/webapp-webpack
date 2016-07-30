
var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
var SRC_PATH = path.resolve(ROOT_PATH, 'src');
var TEM_PATH = path.resolve(ROOT_PATH,'html-template');

module.exports = {
  entry: {
    app: path.resolve(SRC_PATH, 'index.js')
  },
  output: {
    path: BUILD_PATH,
    filename: '[name].js'
  },
  //enable dev source map
  //enable dev server
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel',
        include: APP_PATH,
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.less$/,
        loaders: ['style-loader','css!less'],
        include: SRC_PATH
      },
      {
        test:/\.html$/,
        loader:'raw-loader',
      },
      {test: /\.(png|jpg|svg)$/, loader: 'url-loader?limit=40000'}
    ]
  },
  plugins: [
    // new HtmlwebpackPlugin({
    //   title: 'Hello World app',
    //   template: path.resolve(TEM_PATH, 'index.html'),
    //   filename: 'index.html',
    //   inject: 'body'
    // }),
    /*new HtmlwebpackPlugin({
      title: 'Hello Mobile app',
      template: path.resolve(TEM_PATH, 'mobile.html'),
      filename: 'mobile.html'
    }),*/
    //provide $, jQuery and window.jQuery to every script
    /*new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    })*/
  ]
};
