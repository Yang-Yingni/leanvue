//获取动态路径，而'path'存在于node的包里
//  但是当前俺们并没有包，所以我们要用npm init 指令装包
const path = require('path')

module.exports = {
    entry:'./src/main.js',
    output:{
        //这里的path要求写绝对路径，但又不能写死，否则文件位置改变就GG，所以要动态获取路径,
        //利用resolve()函数拼接出绝对路径
        path: path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    }
}

//配置文件使每次执行webpeck指令时不需要在敲一大行东西找到源文件和命名新打包文件了