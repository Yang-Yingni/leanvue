import Vue from 'vue'
import App from './App'

import store from './store/index'
//导入以下配置好的store对象

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,//注册一下store，才会有Vue.prototype.$store=store
  render: h => h(App)
})
