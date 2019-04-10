const webpack = require('webpack');
const minimize = process.argv.indexOf('--minimize') !== -1;

module.exports = (env, argv) => {
  argv.mode = argv.mode || 'production';
  const plugins = [];
  const filename = (argv.mode === 'production') ? 'zingtouch.min.js' : 'zingtouch.js';
  const config = {
    mode: argv.mode,
    entry: './src/core/main.js',
    output: {
      filename: filename,
      library: 'ZingTouch',
      libraryTarget: 'umd',
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
    },
    plugins: plugins,
  };

  config.output.filename = filename;
  plugins.push(new webpack.BannerPlugin(`
  ZingTouch v${process.env.npm_package_version}
  Author: ZingChart http://zingchart.com
  License: MIT`
  ));

  return config;
};
