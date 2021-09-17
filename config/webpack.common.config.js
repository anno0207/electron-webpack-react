const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  //打包时将node_modules排除在外
  externals: [
    nodeExternals(),
    nodeExternals({
      modulesDir: path.resolve(__dirname, '../node_modules')
    })
  ],
}