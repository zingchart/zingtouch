const webpack = require('webpack');
const Dashboard = require('webpack-dashboard');
const DashboardPlugin = require('webpack-dashboard/plugin');

const minimize = process.argv.indexOf('--minimize') !== -1;
const dashboard = process.argv.indexOf('--dashboard') !== -1;

const plugins = [];
const filename = (minimize) ? 'zingtouch.min.js' : 'zingtouch.js';


const config = {
  entry: './src/core/main.js',
  output: {
    filename: filename,
    library: 'ZingTouch',
    libraryTarget: 'umd',
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        // test: path.join(__dirname, 'src'),
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
ZingTouch v${process.env.npm_package_version}
Author: ZingChart http://zingchart.com
License: MIT`
));

module.exports = config;
