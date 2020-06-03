<template>
  <div>
    <tab-bar>
      <tabbar-item path="/home" activeColor="purple">
        <!-- 两个图片都插入，通过选择不同名字的插槽来决定显示哪张 -->
        <img slot="item-icon" src="../assets/pic/home1.png">
        <img slot="item-icon-active" src="../assets/pic/home.png">
        <div slot="item-name">首页</div>
      </tabbar-item>
      <tabbar-item path="/type" activeColor="purple">
        <!-- 在webpack.base.cong.js文件中，利用resolve()函数给特定地址起别名后再引用，可以方便很多
        注！src引用时要加“~” (与import引用区别！-->
        <img slot="item-icon" src="~pic/type1.png">
        <img slot="item-icon-active" src="~pic/type.png">
        <div slot="item-name">分类</div>
      </tabbar-item>
      <tabbar-item path="/cart" activeColor="purple">
        <img slot="item-icon" src="../assets/pic/cart1.png">
        <img slot="item-icon-active" src="../assets/pic/cart.png">
        <div slot="item-name">购物车</div>
      </tabbar-item>
      <tabbar-item path="/center" activeColor="purple">
        <img slot="item-icon" src="../assets/pic/center1.png">
        <img slot="item-icon-active" src="../assets/pic/center.png">
        <div slot="item-name">我的</div>
      </tabbar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "components/tabbar/TabBar"
import TabbarItem from "components/tabbar/TabbarItem" //注意地址引用格式与src区别

export default {
  name: 'MainTabbar',
  components: {
      TabBar,
      TabbarItem
  }
}
</script>

<style scoped>

</style>