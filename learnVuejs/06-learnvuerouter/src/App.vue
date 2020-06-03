<template>
  <div id="app">
    <!-- router-link为vue-router里定义的全局组件，最终默认被渲染成a标签 （可通过tag属性改变-->
    <router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="/about" tag="button" repalce>关于</router-link>

    <!-- keep-alive标签使里面的组件不被频繁地创造和销毁 -->
      <!-- exclude属性里填各组件的name属性值，表示这些组件不被包含在内，即会被频繁销毁创造 -->
    <keep-alive exclude="About,Profile">
      <router-view></router-view>
      <!-- router-view标签相当于为之后路由映射到的组件占了个坑，这个标签在哪，组件就渲染在哪 -->
    </keep-alive>

    <!-- 绑定事件，通过代码实现路由，而不是用router-link标签 -->
    <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button>

    <br>

    <!-- 动态路由 及传参-->
    <router-link v-bind:to="'/user/' + userId" tag="button">用户</router-link>
    <router-link v-bind:to="{path: '/profile', query: detail}" tag="button">档案</router-link>
    <!-- to动态绑定可跟对象类型,query也可跟对象类型-->
    <br>
    <!-- 绑定事件，通过代码实现动态路由及传参 -->
    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>


  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId:'222016',
      detail:{
        name: 'smy',
        height: 167,
        age: 22
      }
    };
  },

  methods: {
    homeClick(){
      //可使用$router属性（此属性在vue-router包源码中添加
      //这里this指向事件源
      //this.$router.push('/home')
      this.$router.replace('/home')
      console.log('home');
    },
    aboutClick(){
      //this.$router.push('/about')
      this.$router.replace('/about')
      console.log('about'); 
    },
    userClick(){
      this.$router.push('/user/'+ this.userId)
    },
    profileClick(){
      this.$router.push({
        path: '/profile',
        query: this.detail
      })
    }
  }
}
</script>

<style>
  .active{
    color: #f00;
  }
</style>
