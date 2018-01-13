module.exports = {
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
  }
}
