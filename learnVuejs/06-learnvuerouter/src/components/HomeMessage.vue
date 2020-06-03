<template>
  <div>
    <ul>
      <li>消息1</li>
      <li>消息2</li>
      <li>消息3</li>
      <li>消息4</li>
      <li>消息5</li>
      <button @click="showpath">button</button>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeMessage',
  data() {
    return {

    };
  },
  methods: {
    showpath(){
      console.log(this.$route.path);
      
    }
  },
};
</script>

<style scoped>

</style>

