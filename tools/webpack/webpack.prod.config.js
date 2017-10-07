const webpack = require('webpack')
const commonConfig = require('./helpers/webpack.common.config')

module.exports = {
  ...commonConfig,

  devtool: null,

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
  ]
}
