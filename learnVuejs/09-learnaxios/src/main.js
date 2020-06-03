import Vue from 'vue'
import App from './App'

import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})


// 1.axios的基本使用
//axios(config) 其中config为对象类型
// axios({
//   url:'http://123.207.32.32:8000/home/multidata'
//   //请求默认为get方式,可用method属性进行更改
//   //method: 'post'
// }).then( res => {
//   console.log(res);
// })//axios会返回一个promise，请求成功内部会调用resolve(),所以可以用“.then()”调用传回来的数据

// axios({
//   url: 'http://123.207.32.32:8000/home/data',
//   //对于get请求：可用参数对象params对url进行拼接(以“?”连接)---（而post请求就得使用data对象进行拼接了
//   //拼接成 http://123.207.32.32:8000/home/data?type=pop&page=1
//   params:{
//     type: 'pop',
//     page: 1
//   } 
// }).then( res => {
//   console.log(res);
// })
// /



// // 2.axios发送并发请求（和promise的all方法差不多
// //格式：axios.all([axios(请求1),axios(请求2)]).then( results => {})
// axios.all([
//   axios({
//     url:'http://123.207.32.32:8000/home/multidata'
//   }),
//   axios({
//     url:'http://123.207.32.32:8000/home/data',
//     params: {
//       type: 'sell',
//       page: 4
//     }
//   })
// ]).then( results => {
//   console.log(results);
// })

// //3.利用“axios.defaults.配置项”提取全局配置
// axios.defaults.baseURL = 'http://123.207.32.32:8000'
// axios.defaults.timeout = 5000

// axios({
//   url:'/home/multidata'
// }).then(res => {
//   console.log(res); 
// })

// //以上都是在用全局的axios和全局配置来进行网络请求
// //若有其他请求配置不一样怎么办？？
// //答：利用 axios.create() 创建对应的axios实例
// const instance1 = axios.create({
//   baseURL:'http://123.207.32.32:8000',
//   timeout: 3000,
//   headers:{}
// })

// instance1({
//   url:'/home/multidata'
// }).then(res => {
//   console.log(res);
// })

// instance1({
//   url:'/home/data',
//   params:{
//     type:'sell',
//     page:3
//   }
// }).then( res => {
//   console.log(res);
  
// })


//5. 使用封装的request模块
import {request} from './network/request'
request({
  url: '/home/data',
  params:{
    type:'sell',
    page:3
  }
}).then( res => {
  console.log(res);
}).catch( err => {
  console.log(err); 
})