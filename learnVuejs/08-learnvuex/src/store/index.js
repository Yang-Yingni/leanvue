import Vue from 'vue'
import Vuex from 'vuex'

//import * as types from './mutations-types'//将配置好的type名全部导入，并命名为types

import moduleA from './modules/moduleA'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'


//1.安装插件
Vue.use(Vuex)


//2.创建对象（注意：是Vuex.Store()而不是Vuex()
const store = new Vuex.Store({
  state: {//共享的状态
    counter: 1000,
    idols: [
     {name: 'smy', age: 22, rank: 16 },
     {name: 'ck', age: 25, rank: 9 },
     {name: 'fqy', age: 19, rank: 15 },
     {name: 'yyq', age: 21, rank: 23 },
    ],
    info: {
      id:222016,
      name:'yyn',
      sex:'female'
    }
  },
  //一般state不抽取
  mutations,
  getters,
  actions,
  modules: {
    //实际上是把这些模块里的mutations，getters，actions里的内容又分类插回了大store里而已，到时可直接调用,不关心你是否在modules里
    //而模块里的state属性则是加了一层包装（到时用“模块名.state.具体数据”调用
    a: moduleA
  }

})


//3.导出对象
export default store