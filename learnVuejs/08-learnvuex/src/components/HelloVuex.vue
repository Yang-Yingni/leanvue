<template>
  <div>
    <h2>{{$store.state.counter}}</h2>
    <h2>{{$store.getters.counterPower}}</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloVuex',
  props: {

  },
  data() {
    return {

    };
  },
  methods: {

  },
};
</script>

<style scoped>

</style>
