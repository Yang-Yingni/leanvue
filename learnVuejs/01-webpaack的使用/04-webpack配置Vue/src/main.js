//1.commonJS模块化方法导入

const {add,mul} = require('./js/mathTools.js')

console.log(add(20,30));
console.log(mul(20,30));
//  但是由于浏览器不支持解析commonJS代码，
//  所以HTML文件的<script>标签里不能直接引用本main.js，
//  所以需要webpack进行打包，生成可解析的新文件，再引入index.html里


//2.ES6模块化方法导入
import {name,age,height} from './js/info'
console.log(name,age,height);

//3.导入（依赖）CSS文件
require ('./css/normal.css')
//但是要先安装loader来处理css文件

//4.导入less文件
//  同样需安装对应loader,不过less文件还需多安装一个less包来进行解析
require('./css/special.less')
document.writeln('<h2>你是智障</h2>')

//5.使用Vue
import Vue from "vue"
//为什么可以这样写：
//因为程序会去node已安装的包里找"vue"这个文件，在node_modules中以export default形式导出

//import App from "./vue/app"//把组件模块化放到另一个文件中，再引入，降低main.js代码复杂度

import App from "./vue/App.vue"
//引入.vue文件那当然要安装loader了,还需要vue-template-compiler这个包进行模板的解析

new Vue({
    el:'#app',
    //template里的内容会将挂载点所在标签及内容全部替换
    template:'<App></App>',
    components:{
        'App':App
    }
    
})