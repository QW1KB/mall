<template>
  <div>
    <tab-bar class="tab-bar">
      <tab-bar-item path="/home" activecolor="blue">
        <template v-slot:item-icon>
          <img src="~assets/img/tabbar/all.png" alt=""
        /></template>
        <template v-slot:item-icon1>
          <img src="~assets/img/tabbar/all1.png" alt=""
        /></template>

        <template v-slot:item-text><div>首页</div></template>
      </tab-bar-item>
      <tab-bar-item path="/cart" activecolor="blue">
        <template v-slot:item-icon>
          <img src="~assets/img/tabbar/gift.png" alt=""
        /></template>
        <template v-slot:item-icon1>
          <img src="~assets/img/tabbar/gift1.png" alt=""
        /></template>

        <template v-slot:item-text><div>分类</div></template>
      </tab-bar-item>
      <tab-bar-item path="/category" activecolor="blue">
        <template v-slot:item-icon>
          <img src="~assets/img/tabbar/add-cart.png" alt=""
        /></template>
        <template v-slot:item-icon1>
          <img src="~assets/img/tabbar/add-cart1.png" alt=""
        /></template>

        <template v-slot:item-text><div>购物车</div></template>
      </tab-bar-item>
      <tab-bar-item path="/proflie" activecolor="blue">
        <template v-slot:item-icon>
          <img src="~assets/img/tabbar/user1.png" alt=""
        /></template>
        <template v-slot:item-icon1>
          <img src="~assets/img/tabbar/user.png" alt=""
        /></template>

        <template v-slot:item-text><div>我的</div></template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import tabBar from "components/common/tabbar/TabBar.vue";
import tabBarItem from "components/common/tabbar/TabBarItem.vue";
export default {
  components: {
    tabBar,
    tabBarItem,
  },
};
</script>

<style>
.tab-bar {
  z-index: 99;
}
</style>