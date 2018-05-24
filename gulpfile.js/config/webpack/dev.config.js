var path = require('path');
var webpack = require('webpack');
var webpackUglifyJsPlugin = require('webpack-uglify-js-plugin');

var config = {
  entry: {
    './build/assets/js/app': './resources/js/index.js'
  },
  output: {
    path: path.join(__dirname, '../../../'),
    publicPath: '/js/',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js?/,
        loaders: ['babel'],
        exclude: /node_modules/
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true
    })
  ]
};

module.exports = config;
