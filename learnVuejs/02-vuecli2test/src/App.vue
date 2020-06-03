<template>
  <div id="app">
     <back-count :num="num" :bgC="bgC" :width="width"/>
  </div>
</template>

<script>
import BackCount from './components/BackCount'

export default {
  name: 'App',
  data () {
    return {
      num: 5,
      bgC: '#a29bfe',
      width: 60
    }
  },
  components: {
    BackCount
  }
}
</script>

<style>

</style>
