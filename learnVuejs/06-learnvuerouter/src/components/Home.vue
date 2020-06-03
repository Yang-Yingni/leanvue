<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页内容哈哈哈</p>

    <!-- 注意！子路由的路由地址在to属性里要连爹爹地址一起写出来！！！ -->
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Home',
  created(){
    console.log('home created')
  },
  destroyed () {
    console.log('home destroyed');
  },

  //以下两个函数只有在该组件被保持了状态，即使用了keep-alive标签时，才是有效的
  // activated () {
  //   console.log('home actived');
  // },
  // deactivated() {
  //   console.log('home deactivated'); 
  // }


};
</script>

<style scoped>

</style>
