// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */

const cpn = {
  template:'<div>{{message}}</div>',
  data(){
    return{
      message:'我是组件哈哈哈哈'
    }
  }
}

new Vue({
  el: '#app',
  // components: { App },
  // template: '<App/>'
  //runtime-compiler过程：
  //template->ast->render->vdom->UI


  //以下将其改写成runtime only模式：
  render:function(createElement){
  //createElement是一个函数

    //1.普通用法：createElement('标签',{标签的属性},['内容'])
    //      这里的createElement创造出来的标签会将挂载点及其内容替换掉
    // return createElement('h2',
    // {class:'box'},
    // ['hello world',createElement('button',['按钮'])])

    //2.传入一个组件
    return createElement(cpn)
    //传入App组件即为runtimeonly
  }
})
