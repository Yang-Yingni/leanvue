import Vue from 'vue'
import Vuex from 'vuex'

import * as types from './mutations-types'//将配置好的type名全部导入，并命名为types

//1.安装插件
Vue.use(Vuex)

const moduleA = {
  state: {
    name: '张三'
  },
  mutations: {
    updateName(state,payload) {
      state.name = payload
    }
  },
  getters: {
    fullname(state) {
      return state.name + '111'
    },
    fullname2(state,getters) {
      return getters.fullname + '222'
    },
    //在模块modules里的函数可以有三个参数 （第三个为rootState，即根state里的对象
    fullname3(state,getters,rootState) {
      return getters.fullname2 + rootState.counter
    }
  },
  actions: {
    aUpdateName(context){
      setTimeout(() => {
        context.commit('updateName','王五')
        //注意！这里的context.commit('函数'，payload) 这里的函数只能是该模块mutations里定义的！！
        //因为这里的content（上下文）内容只包含该模块
      }, 1000);
    }
  }
}
const moduleB = {

}

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

  //注：在这里拿东西时的格式，与组件实例下的“this.直接东西名”区别
  mutations: {//同步操作的方法

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
  },

  getters: {//在getters中对数据进行处理，类似computed属性
    counterPower(state) {
      return state.counter * state.counter
    },

    //选出idols年龄大于20的
      // overAge20(state) {
      //   return state.idols.filter( function(n) {
      //     return n.age > 20
      //   })
      // }
    //以上可化简为
    overAge20(state){
      return state.idols.filter( n => n.age > 20)
    },
    //选出年龄大于20的idol的个数(getters里的属性可以只传入两个参数，一个为state，一个为getters本身（这样就可以直接使用上面定义过的getters属性了
    overAge20Len(state,getters){
      return getters.overAge20.length
    },
    //选出年龄大于age的（age为传入的一个变量
    overAge(state){
      return function(age) {
        return state.idols.filter( n => n.age > age)
      }
    },
    //可简写为
    // overAge(state){
    //   return age => state.idols.filter( n => n.age > age)
    //   },    
    
  },

  actions: {//异步操作的中转
    //action中方法默认参数为context和payload（其中 context的意思为上下文，即context里装的东西是所在邻域范围内的
    aChangeInfoId(context,payload) {
      // setTimeout(() => {
      //   context.commit('changeInfoId')//通过commit调用mutations里的方法（即action相当于一个中转
      //   console.log(payload);
      // }, 1000);

    //若异步操作成功时需要告知成功，或者返回数据怎么办？
    //利用promise将其包装！！
      return new Promise((resolve,reject) => {
        setTimeout(() => {
          context.commit('changeInfoId')//通过commit调用mutations里的方法（即action相当于一个中转
          console.log(payload);
          resolve('异步操作得到的数据')//通过resolve返回异步操作得到的数据
        }, 1000);
      })
      //注意“.then()”不写在这的promise后面，而是写在调用这个action方法的dispath函数后面
    }


  },

  modules: {//实际上是把这些模块里的mutations，getters，actions里的内容又分类插回了大store里而已，到时可直接调用,不关心你是否在modules里
            //而模块里的state属性则是加了一层包装（到时用“模块名.state.具体数据”调用
    a: moduleA,
    b: moduleB
  }

})

//导出对象
export default store