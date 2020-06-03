import Vue from 'vue'
import App from './App'

import router from './router'
//将router配置导入
//写from'./router'就好，因为vue会自动去找router文件夹里的index.js文件

Vue.config.productionTip = false

//在Vue原型下加一个test方法，可是vue本身，以及所有组件都拥有此方法
Vue.prototype.test = function() {
  console.log('test');
}
Vue.prototype.name = "aaaaa"





new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
