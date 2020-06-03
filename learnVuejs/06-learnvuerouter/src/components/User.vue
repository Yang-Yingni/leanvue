<template>
  <div>
    <h2>我是用户</h2>
    <p>我是用户的内容，吼吼吼</p>
    <!-- 实现用户界面动态显示userid -->
    <p>{{userid}}</p>
    <p>{{$route.params.userId}}</p><!-- 不用computed直接写也行 -->
    <button @click="btnClick">vue类继承</button>
  </div>
</template>

<script>
export default {
  name: 'User',
  computed: {
    userid(){
      return this.$route.params.userId
      //params.后面跟的参数与index.js配置动态路由中path里面跟的参数一致
      //注意区别这里的$route与App.vue中代码实现路由里的$router！
      //前者的route是指当前所在页面的路由，即index.js里配置的路由对象
      //后者的router是index.js中导出的router对象！！！此对象在vue源码中被添加为vue类的属性，所有组件都可使用
    }
  },
  methods: {
    btnClick(){
      //！！！所有组件都继承vue这个类的原型
      this.test()
      //test方法在main.js中加入vue的原型，在本组件下也可使用
      console.log(this.name);
    }
  },

  created(){
    console.log('User created')
  },
  destroyed () {
    console.log('User destroyed');
  },

};
</script>

<style scoped>

</style>
