const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
// 不要なnode_modulesをバンドルせず、ファイルサイズを小さくして起動を早くする
const webpackNodeExternals = require('webpack-node-externals');

const config = {
  target: 'node',
  entry: './src/index.js',
  output: {
  filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  externals: [webpackNodeExternals()]
}

module.exports = merge(baseConfig, config);
