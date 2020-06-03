<template>
 <div class="title">
    <h2>{{message}}</h2>
    <button @click="btnClick">按钮</button>
    <p>{{name}}</p>
    <cpn/>
 </div>
</template>

<script>
import Cpn from "./Cpn.vue"

export default {
  name: 'App',
  data () {
   return {
    message:'你好呀',
    name:'我是你爸爸'
   }
  },
  methods: {
    btnClick(){
        console.log('click');          
    }
  },
  components: {
      'cpn':Cpn
  }
 }
</script>

<style scoped>
    .title{
        color:blue
    }
</style>
