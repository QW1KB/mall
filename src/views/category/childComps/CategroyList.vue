<template>
  <div class="category-list">
    <scroll class="content" ref="scroll">
      <categroy-list-item
        v-for="(item, index) in cartList"
        :key="index"
        :product="item"
      ></categroy-list-item>
    </scroll>
  </div>
</template>

<script>
import Scroll from "@/components/common/scroll/Scroll.vue";
import CategroyListItem from "./categroyListItem.vue";

import { mapGetters } from "vuex";

export default {
  components: { Scroll, CategroyListItem },
  computed: {
    ...mapGetters(["cartList"]),
  },
  activated() {
    this.$refs.scroll.scroll.refresh();
  },
};
</script>

<style scoped>
.category-list {
  position: fixed;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 49px;
}
.content {
  height: 100%;
  overflow: hidden;
}
</style>