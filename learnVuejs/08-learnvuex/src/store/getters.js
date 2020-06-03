
export default {
//在getters中对数据进行处理，类似computed属性
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
    
}