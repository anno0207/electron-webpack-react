# 
npm init
# 
first, 安装electron
npm install --save-dev electron

#
点击弹出second window
#
second, 解决在非main.js 文件中希望同时使用require 和import的问题
解决思路是：使用webpack编译其他文件，webpack中配置babel，electron使用编译后的结果
注意：
1，preload.js 和second.html文件需要手动添加到dist文件夹下
2，注意main.js中的文件路径问题
3.使用eval的安全问题通过 devtool: 'cheap-module-source-map',解决


npm install webpack webpack-cli webpack-node-externals -S -D

npm install path-browserify html-webpack-plugin

npm install --save-dev babel-preset-env babel-cli babel-core
npm install --save-dev @babel/preset-env @babel/core @babel/plugin-transform-runtime 

