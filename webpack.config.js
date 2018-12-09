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
        //一样的功能rules:   webpack2.x之后新加的
        loaders: [ //require('./a.css||./a.js')
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
                //顺序是反过来的2!1
            },
            {
                test: /\.(jpg|svg|png|gif|woff|ttf)$/,
                loader: 'url-loader?limit=4096&name=[name].[ext]',
                //顺序是反过来的2!1 
                //[name].[ext]内置提供的，因为本身是先读这个文件
                // options:{
                //    limit:4096,
                //    name:'[name].[ext]'
                // }
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
                loader: 'vue-loader', //vue-template-compiler是代码上的依赖
            },

        ]
    },

    plugins: [
        //插件的执行顺序是依次执行的
        new htmlWebpackPlugin({
            template: './src/index.html',
        })
        //将src下的template属性描述的文件根据当前配置的output.path，将文件移动到该目录

    ]
}