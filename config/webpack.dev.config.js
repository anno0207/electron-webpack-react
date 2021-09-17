const path = require('path'); //调用node.js中的路径
const merge = require('webpack-merge');
const common = require('./webpack.common.config');
// const nodeExternals = require('webpack-node-externals');
const rootDir = path.resolve(__dirname, '..');
const HtmlWebPackPlugin = require('html-webpack-plugin')

const plugins = [
  new HtmlWebPackPlugin({
    template: path.join(rootDir, './src/index.html'),//使用模板index.html
    filename: 'index.html', //打包生成的文件名叫index.html
    chunks: ['second']  //index.html里引用打包生成的second.js
  }),
]

module.exports = merge.merge(common, {
  entry: {
    './static/second': './src/windows/secondWindow.js'
  },
  mode: "development",
  output: {
    filename: '[name].js',
    path: path.join(rootDir, 'dist')
  },
  devtool: 'cheap-module-source-map',
  plugins: plugins
})
