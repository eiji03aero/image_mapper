const path = require('path');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.config.common.js');

const pathResolver = pathName => path.resolve(__dirname, pathName);

module.exports = merge(commonConfig, {
  mode: 'development',
  entry: [
    pathResolver('src/index.dev.jsx'),
  ],
  output: {
    path: pathResolver('dist'),
    filename: 'bundle.js',
  },
  devServer: {
    inline: true,
    compress: true,
    contentBase: path.resolve('dist'),
  },
});
