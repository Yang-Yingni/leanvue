import * as types from './mutations-types'//将配置好的type名全部导入，并命名为types
import Vue from 'vue'

export default {
//注：在这里拿东西时的格式，与组件实例下的“this.直接东西名”区别
//同步操作的方法

  // increase(state) {
  //   state.counter++
  // },
  // decrease(state) {
  //   state.counter--
  // },

  //对象里的方法可以写成['方法名']() {}
  //所以导入mutations-type.js后，以上可改写成
  [types.INCREASE](state) {
    state.counter++
  },
  [types.DECREASE](state) {
    state.counter--
  },




//1.普通commit
  //这里的方法可传入两个参数，第一个是上面定义的state，第二个是调用时commit函数传入的payload参数（在此例中为count
  // increaseCount(state,count) {
  //   console.log(count);//康康此风格commit传来的参数是个啥
  //   state.counter += count
  // },
//2.特殊commit（对应App.vue中commit特殊提交风格的例子
  increaseCount(state,payload) {
    console.log(payload);//康康此风格commit传来的参数是个啥
    state.counter += payload.count
  },

  increaseIdol(state,idolInfo) {
    state.idols.push(idolInfo)
  },


  updateInfo(state){
    //添加属性major,值为'EE'
    //state.info['major'] = 'EE' //直接添加，info内容不会响应式，因为这个属性不是在state里定义的
    //解决方法：利用Vue.set()方法将属性添加到响应式系统里
    Vue.set(state.info,'major','EE')

    //删除属性
    //delete state.info.sex //直接删除，不会响应式
    //解决方法：利用Vue.delete()
    Vue.delete(state.info,'sex')
  },

  changeInfoId(state) {
    state.info.id = 222017 
  }
}