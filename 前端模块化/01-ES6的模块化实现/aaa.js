//1.导入{}中定义的变量
import {flag,sum} from "./xiaoming.js"//注：就算这里是同层文件引入，也要用“./”,不能省略！！！

if (flag){
    console.log('小明是天才，哈哈哈')
}

//2.直接导入export定义的变量
import {number,height} from "./xiaoming.js"
console.log(number,height)

//3.导入export的函数/类
import {mul,Person} from "./xiaoming.js"
console.log(mul(30,20))
const p = new Person
p.run()

//4.导入export default中的内容（可自定义名字
//  注：此时不需写大括号，你写啥名导入的东西就用啥名
// import addr from "./xiaoming.js"
// console.log(addr)
import func from "./xiaoming.js"
func('猪猪')

//5.通配符*统一全部导入
//  利用"as"把导入的所有东西放到名为"goods"的对象里
import * as goods from "./xiaoming.js"
const pp =new goods.Person
pp.run()
console.log(goods.flag)