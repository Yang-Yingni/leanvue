<template>
  <div id="app">
    <router-view></router-view>
    <MainTabbar></MainTabbar>
  </div>
</template>

<script>
  import MainTabbar from "./components/MainTabbar"

  export default {
    name: 'App',
    components: {
      MainTabbar
    }
  }
</script>
  

<style>
  /* style标签内导入文件格式：@import url(); */
  @import "./assets/css/base.css";


 
</style>