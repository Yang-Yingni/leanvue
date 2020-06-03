const webpackMerge = require('webpack-merge')

const baseConfig = require('./base.config')

module.exports = webpackMerge(baseConfig,{
    devServer:{
        contentBase:'./dist',  //指定文件夹
        inline:true  //页面实时刷新
        }
    //这段指令在调试时需要
})