//获取动态路径，而'path'存在于node的包里
//  但是当前俺们并没有包，所以我们要用npm init 指令装包
const path = require('path')

module.exports = {
    //配置文件中写号入出口地址使每次执行webpeck指令时不需要在敲一大行东西找到源文件和命名新打包文件了
    entry:'./src/main.js',
    output:{
        //这里的path要求写绝对路径，但又不能写死，否则文件位置改变就GG，所以要动态获取路径,
        //利用resolve()函数拼接出绝对路径
        path: path.resolve(__dirname,'dist'),
        filename:'bundle.js',
        publicPath: 'dist/'
        //publicPath使任何url路径前面都加上dist目录
    },
    module: {
        rules: [
          {
            test: /\.css$/,
            //css-loader只负责加载css文件，不负责解析，也不负责给你渲染到页面上
            //style-loader负责将模块的导出作为样式添加到DOM上
            //webpack中，使用多个loader时是从右向左读的（所以下行是这个顺序，即'style-loader'在前
            use: [ 'style-loader', 'css-loader' ]
          },
          {
            test: /\.less$/,
            use: [{
                //读取顺序同样是从左到右（因为换行了所以看起来是从下到上，实际上还是从左到右的
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "less-loader" // compiles Less to CSS
            }]
          },
          {
            test: /\.(png|jpg|gif)$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  //当加载的图片大小小于limit的值时，会通过url-loader将图片编译成base64形式直接显示（不需另外存储
                  //当图片大小大于limit值时，则需要file-loader进行加载，会生成哈希值命名图片，在打包时存到dist目录下
                  //  所以要在output里多加一项，保证解析完引用的url地址正确，能找到图片
                  limit: 8192,
                  name: 'img/[name].[hash:8].[ext]'
                  //用name属性对解析完生成的新图片进行命名，("[]"表示取变量,"."表示连接,":8"表示取八位数，ext为拓展名
                }
              }
            ]
          },
          //用babel将ES6语法转化为ES5，装完loader以及其他必需的包之后配置如下
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['es2015']
              }
            }
          }
        ]
    } 
}  
