<template>
  <div id="app">
    <main-tab-bar></main-tab-bar>
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
import mainTabBar from "components/content/mainTabBar/MainTabbar.vue";
export default {
  name: "app",
  components: {
    mainTabBar,
  },
};
</script>

<style>
@import "assets/css/base.css";
</style>
