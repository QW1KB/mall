<template>
  <div id="profile">
    <nav-bar class="nav-bar">
      <template #center>
        <div>商城</div>
      </template>
    </nav-bar>
    <scroll class="scrollHight">
      <user-info></user-info>
      <detail-info>
        <template #name>
          <div>0.00 <span>元</span></div>
        </template>
        <template #value>
          <div>我的余额</div>
        </template>
      </detail-info>
      <detail-info>
        <template #name>
          <div>0 <span>个</span></div>
        </template>
        <template #value>
          <div>我的优惠券</div>
        </template>
      </detail-info>
      <detail-info>
        <template #name>
          <div>0 <span>分</span></div>
        </template>
        <template #value>
          <div>我的积分</div>
        </template>
      </detail-info>
      <list-view :list-data="orderList"></list-view>
      <list-view :list-data="serviceList"></list-view>
    </scroll>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar.vue";
import UserInfo from "./childComps/UserInfo.vue";
import DetailInfo from "./childComps/DetailInfo.vue";
import ListView from "./childComps/ListView.vue";
import Scroll from "@/components/common/scroll/Scroll.vue";
export default {
  components: { NavBar, UserInfo, DetailInfo, ListView, Scroll },
  methods: {},
  data() {
    return {
      orderList: [
        { icon: "#order", iconColor: "#ff8198", info: "我的消息" },
        { icon: "#point", iconColor: "#fc7b53", info: "积分商城" },
        { icon: "#vip", iconColor: "#ffc636", info: "会员卡" },
      ],
      serviceList: [
        { icon: "#service", iconColor: "#ff8198", info: "我的购物车" },
        { icon: "#download", iconColor: "#ff8198", info: "下载购物APP" },
      ],
    };
  },
};
</script>

<style scoped>
.nav-bar {
  background-color: var(--color-tint);
  font-size: 20px;
  font-weight: bold;
}
.scrollHight {
  position: fixed;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 49px;
  overflow: hidden;
}
</style>