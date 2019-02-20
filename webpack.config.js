const htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: { //main是默认入口,也可以是多入口
        main: './src/main.js'
    },
    //出口
    output: {
        filename: './build.js', //指定js文件
        path: path.join(__dirname, 'dist')
        //代表当前目录的上一级的dist
    },
    module: {
        rules: [ //require('./a.css||./a.js')
            {
                test: /\.scss$/,
                loader:['style-loader','css-loader','sass-loader']
            },
            {
                test: /\.(jpg|svg|png|gif|woff|ttf)$/,
                loader: 'url-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
   
            }, { //处理ES6的js
                test: /\.js$/,
                loader: 'babel-loader',
                //排除 node_modules下的所有
                exclude: /node_modules/,
                options: {
                    presets: ['es2015'], //关键字
                    plugins: ['transform-runtime'], //函数
                }
            }, { //解析vue
                test: /\.vue$/,
                loader: 'vue-loader', 
            },

        ]
    },

    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html',
        })
        

    ]
}