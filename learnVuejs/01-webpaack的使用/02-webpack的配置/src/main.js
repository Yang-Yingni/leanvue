//1.commonJS模块化方法导入

const {add,mul} = require('./mathTools.js')

console.log(add(20,30));
console.log(mul(20,30));
//  但是由于浏览器不支持解析commonJS代码，
//  所以HTML文件的<script>标签里不能直接引用本main.js，
//  所以需要webpack进行打包，生成可解析的新文件，再引入index.html里


//2.ES6模块化方法导入
import {name,age,height} from './info'
console.log(name,age,height);

