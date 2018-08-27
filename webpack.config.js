const webpack = require('webpack');
const minimize = process.argv.indexOf('--minimize') !== -1;

const plugins = [];
const filename = (minimize) ? 'zingtouch.min.js' : 'zingtouch.js';


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
}
config.output.filename = __dirname + '/dist/' + filename;

plugins.push(new webpack.BannerPlugin(`
ZingTouch v${process.env.npm_package_version}
Author: ZingChart http://zingchart.com
License: MIT`
));

module.exports = config;
