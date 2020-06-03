
export default {
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