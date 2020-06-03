import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  //render: h => h(App),
  //这句其实就是(vue里面把createElement这个函数别名成了h)
  render:function(createElement){
    return createElement(App)
  }
  //App是导入的组件模板
})

//runtimeonly过程：
//render->vdom->UI
//而template->ast过程由vue-template-compiler包完成，
//App.vue里面的template被此包渲染成一个个render函数解析，就不存在template了