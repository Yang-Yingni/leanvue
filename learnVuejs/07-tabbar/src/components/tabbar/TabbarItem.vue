<template>
    <div class="tabbar-item" @click="itemClick">
      <!-- 因为插槽内容会在使用时被覆盖，所以不能在slot标签里绑定属性或者判断之类的，
      要在插槽外部覆盖一个div，插槽具体表现形式由此div的属性决定 -->
      <div v-if="isActive">
        <slot name="item-icon-active"></slot>
      </div>
      <div v-else>
        <slot name="item-icon"></slot>
      </div>

      <!-- <div :class="{active:isActive}">  动态决定激活时文字的颜色，所以不能绑定class写死辽-->
      <div :style="activeStyle">
        <slot name="item-name"></slot>
      </div>
      
    </div>
</template>

<script>
export default {
  name: 'TabbarItem',
  props: {
    path:String,
    activeColor: {
      type: String,
      default: 'red'
    }
    },
  // data() {
  //   return {
  //     isActive: true
  //   };
  // },
  computed: {
    isActive(){
      //判断当前页面路径是否包含于tabbar点击所选择的页面路径内
      //只要index函数结果不等于-1，就说明包含在内,结果为true
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
      //当激活时设置style否则返回空（即不设置
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    itemClick(){
      
      //判断当前路径(this.$route.path)是否与被点击的tabbaritem的路径(this.path)一致
      //    一致说明已经在这个界面，就不需要再跳转路由了,否则会重复添加
      //    不一致的话就push
      // this.$route.path == this.path ? null : this.$router.replace(this.path)
      // console.log(this.$route.path);
      // console.log(this.path);
      //改完看起来对了，实际并没有
      //因为如果当前页面在tabbar已跳转到的页面子路由里，则this.$route.path就会是"home/news/detaile"酱省儿的，与传进来的this.path不一样
      //     但是这时可不能再replace(this.path)了，否则又会出错

      //终极解决方法：（见index.js
      this.$router.push(this.path)
      
    }
  },
};
</script>

<style scoped>
  .tabbar-item {
    flex: 1;
    text-align: center;
    height: 49px;/*tabbar-item高度一般都设置成49px*/
    font-size: 14px;
  }
  .tabbar-item img {
    widows: 25px;
    height: 25px;
    margin-top: 3px;
    vertical-align: middle;
  }

  /* .active{
    color: red;
  } */
</style>
