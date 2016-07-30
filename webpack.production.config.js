
var path              = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var webpack           = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var ROOT_PATH         = path.resolve(__dirname);
var APP_PATH          = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH        = path.resolve(ROOT_PATH, 'build');
var TEM_PATH          = path.resolve(ROOT_PATH,'html-template');
var autoprefixer      = require('autoprefixer');
var AUTOPREFIXER_BROWSERS = [
'Android >= 4',
'Chrome >= 35',
'Firefox >= 31',
'Explorer >= 9',
'iOS >= 7',
'Opera >= 12',
'Safari >= 7.1'
];

module.exports = {
  entry: {
    app: path.resolve(APP_PATH, 'index.js'),
  },
  output: {
    path: BUILD_PATH,
    filename: '[name].[hash].js'
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
		    test:/\.css/,
				loaders:['style','css'],		    
	    },
      {
	      test: /\.less$/,
	      loader: ExtractTextPlugin.extract('style-loader','css!postcss!less!'),
	      include: APP_PATH
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=40000'
      }
    ]
  },
	postcss: function () {
		return [autoprefixer({browsers: AUTOPREFIXER_BROWSERS})];
	},
  plugins: [
    //enable uglify
    //new webpack.optimize.UglifyJsPlugin({minimize: true}),
    //split vendors script
   //new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    //generate two pages
    new HtmlwebpackPlugin({
      title: 'Hello World app',
      template: path.resolve(TEM_PATH, 'index.html'),
      filename: 'index.html',
      chunks: ['app', 'vendors'],
      inject: 'body'
    }),
	  new ExtractTextPlugin("main.css")
    //provide $, jQuery and window.jQuery to every script
    /*new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    })*/
  ]
};
