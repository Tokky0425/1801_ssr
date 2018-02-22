const path = require('path');
// 不要なnode_modulesをバンドルせず、ファイルサイズを小さくする
const webpackNodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  entry: './src/index.js',
  output: {
  filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
        options: {
          presets: ['react','env']
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  externals: [webpackNodeExternals()]
}
