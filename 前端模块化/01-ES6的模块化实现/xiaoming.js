let name ="小明"
let age =22
let flag = true

function sum(num1,num2){
    return num1 + num2
}

if (flag){
    console.log(sum(20,30))
}

//1.导出方式一：已定义好的东西,写成对象导出
export{
    flag,sum
}
//2.导出方式二：定义时直接export导出
export let number = 1000
export let height = 1.88

//3.导出函数或类
export function mul(num1,num2){
    return num1 * num2
}
export class Person{
    run(){
        console.log('在奔跑')
    }
}

//export default (使导入者能够自己命名)
//  注：在开发中只能有一个export default！不然会乱套的
// const address = '嘉兴路'
// export default address
export default function (argument){
    console.log('你是' + argument)
}