<template>
  <scroll class="tab-menu">
    <div class="menu">
      <div
        v-for="(item, index) in childCart"
        class="menu-item"
        :key="index"
        :class="{ active: index === currentIndex }"
        @click="menuClick(index)"
      >
        {{ item.title }}
      </div>
    </div>
  </scroll>
</template>

<script>
import Scroll from "@/components/common/scroll/Scroll.vue";
export default {
  components: { Scroll },
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: {
    childCart: {
      type: Array,
    },
  },
};
</script>

<style scoped>
.menu {
}
.tab-menu {
  height: 580px;
  width: 30%;
  box-sizing: border-box;
  background-color: #ffffff;
  overflow: hidden;
}
.menu-item {
  height: 45px;
  line-height: 45px;
  text-align: center;
  font-size: 17px;
  border-bottom: 2px solid #eee;
  border-right: 2px solid #eee;
}
.active {
  background-color: #ffff;
  color: #ff8198;
  font-weight: bold;
}
</style>