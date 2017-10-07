const webpack = require('webpack')
const pathConfig = require('./helpers/webpack.path.config')
const commonConfig = require('./helpers/webpack.common.config')

module.exports = {
  ...commonConfig,

  devtool: 'inline-sourcemap',

  devServer: {
    hot: true,
    host: '0.0.0.0',
    port: process.env.PORT,
    https: false,
    compress: false,
    contentBase: pathConfig.output,
    historyApiFallback: true
  },

  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin({ multiStep: true })
  ]
}
