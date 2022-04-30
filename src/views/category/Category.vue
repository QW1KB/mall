<template>
  <div>
    <nav-bar class="nav-bar">
      <template #center>
        <div class="center">购物车({{ cartlenght }})</div>
      </template>
    </nav-bar>
    <categroy-list />
    <categroy-bottom-bar></categroy-bottom-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar.vue";
import CategroyList from "./childComps/CategroyList.vue";
import CategroyBottomBar from "./childComps/CategroyBottomBar.vue";
export default {
  components: {
    NavBar,
    CategroyList,
    CategroyBottomBar,
  },
  computed: {
    cartlenght() {
      // return this.$store.state.cartList.length;
      return this.$store.getters.cartLength;
    },
  },
};
</script>

<style scoped>
.nav-bar {
  background-color: var(--color-tint);
}
</style>