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