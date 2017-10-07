const pathConfig = require('./webpack.path.config')

module.exports = {
  context: pathConfig.context,

  entry: './src/index.js',

  output: {
    path: pathConfig.output,
    filename: 'script.js'
  },

  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  }
}
