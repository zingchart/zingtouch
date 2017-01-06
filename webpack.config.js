const webpack = require('webpack');
const Dashboard = require('webpack-dashboard');
const DashboardPlugin = require('webpack-dashboard/plugin');

const minimize = process.argv.indexOf('--minimize') !== -1;
const dashboard = process.argv.indexOf('--dashboard') !== -1;

const plugins = [];
const filename = 'zingtouch.js';

const config = {
  entry: './src/core/main.js',
  output: {
    filename: filename,
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
        },
      },
    ],
  },
  plugins: plugins,
};

if (minimize) {
  plugins.push(new webpack.optimize.UglifyJsPlugin({
    sourceMap: true,
    mangle: true,
    outputs: {
      comments: false,
    },
  }));
  filename = `${filename}.min.js`;
}

if (dashboard) {
  plugins.push(new DashboardPlugin(new Dashboard().setData));
  config.devServer = {
    port: 3000,
    contentBase: './examples',
  };
  config.output.publicPath = '/assets/';
} else {
  config.output.filename = __dirname + '/dist/' + filename;
}

plugins.push(new webpack.BannerPlugin(`
ZingTouch v1.0.3
Author: ZingChart http://zingchart.com
License: MIT`
));

module.exports = config;
