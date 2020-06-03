<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>

<script>
//  import TabbarItem from "./TabbarItem"
export default {
  name: 'TabBar',
  // components: {
  //   TabbarItem
  // }
};
</script>

<style scoped>
  #tabbar {
    display: flex;
    border-top: solid #c9c6c6 0.1px;
    background-color: #f6f6f6;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }

</style>
