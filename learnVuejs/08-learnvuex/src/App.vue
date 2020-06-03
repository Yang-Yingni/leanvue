<template>
  <div id="app">
    <h2>------------App------------</h2>
    <h2>{{$store.state.counter}}</h2>

    <!-- <button @click="$store.state.counter++">+</button>
    <button @click="$store.state.counter--">-</button>
        不建议绕过mutations直接修改state里的数据 -->
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>

    <button @click="additonCount(5)">+5</button>
    <button @click="additonCount(10)">+10</button>
    <button @click="addIdol">添加小偶像</button>

    <h2>---------------关于是否响应式--------------------</h2>
    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo">更改信息</button>

    <h2>-------------------异步操作-------------------</h2>
    <button @click="changeInfoId">异步更改id</button>

    <h2>--------------App中关于getters内容---------------</h2>
    <h2>{{$store.getters.counterPower}}</h2>
    <h2>{{$store.getters.overAge20}}</h2>
    <h2>{{$store.getters.overAge20Len}}</h2>
    <h2>{{$store.getters.overAge(23)}}</h2>

    <h2>-----------------modules内容--------------------</h2>
    <h2>{{$store.state.a.name}}</h2>
    <button @click="updateName">更改名字</button>
    <h2>{{$store.getters.fullname}}</h2>
    <h2>{{$store.getters.fullname2}}</h2>
    <h2>{{$store.getters.fullname3}}</h2>
    <button @click="asyncUpdateName">异步更改名字</button>

    <h2>-------------------HelloVuex---------------------</h2>
    <hello-vuex />
  </div>
</template>

<script>

import HelloVuex from './components/HelloVuex'
import * as types from './store/mutations-types'//将配置好的type名全部导入，并命名为types

export default {
  name: 'App',
  data () {
    return {

    }
  },
  components: {
    HelloVuex
  },
  methods: {
    addition() {
      //通过$store.,commit('函数名')来提交对共享状态的操作
      //（这里的'函数名'为index.js中mutations里定义的方法
      // this.$store.commit('increase')
      this.$store.commit(types.INCREASE)
    },
    subtraction() {
      //this.$store.commit('decrease')
      this.$store.commit(types.DECREASE)
    },

    additonCount(count) {
    //1.commit函数普通的提交风格
      //commit函数传入两个参数，mutations里的方法和payload参数，后者会被传入调用的mutations方法里
      //this.$store.commit('increaseCount',count)
    //2.commit的另一种提交风格（对象形式
      this.$store.commit({
        type: 'increaseCount',
        count:count//此时传入对应方法的count不再是一个数字，而是一个对象
      })
    },
    addIdol() {
      let idolInfo = {name:'tlj',age:'24',rank:'11'}
      this.$store.commit('increaseIdol',idolInfo)
      //传入commit函数的payload参数可以为一个对象
    },

    updateInfo() {
      this.$store.commit('updateInfo')
    },

    //异步操作更改info中的id
    changeInfoId() {
      let payload = '我是携带的信息：更改id'
      //通过dispatch调用actions里的方法
      this.$store.dispatch('aChangeInfoId', payload)
      .then( res => {
        console.log('异步操作已完成');
        console.log(res); 
      })
      //为什么“.then()”可以写到这？？
      //因为aChangeInfoId()这个函数return回来的new Promise()会直接把调用这个函数的
      //    “this.$store.dispatch('aChangeInfoId', payload)”语句直接直接替换掉，所以这实际上就是promise().then()
    },

    updateName() {
      this.$store.commit('updateName', '李四')
    },
    asyncUpdateName() {
      this.$store.dispatch('aUpdateName')
    }
  }
}
</script>

<style>

</style>
