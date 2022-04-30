<template>
  <nav-bar>
    <template #left>
      <div class="back" @click="back">
        <span>&lt;</span>
      </div>
    </template>
    <template #center>
      <div class="tiltes">
        <div
          class="titles-item"
          v-for="(item, index) in titles"
          :key="index"
          :class="{ active: index === currentIndex }"
          @click="titleClick(index)"
        >
          {{ item }}
        </div>
      </div>
    </template>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
export default {
  components: { NavBar },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index;
      this.$emit("itemClick", index);
    },
    back() {
      return this.$router.back();
    },
  },
};
</script>

<style scoped>
.back {
  font-size: 26px;
  text-align: center;
}
.tiltes {
  display: flex;
  font-size: 14px;
}
.titles-item {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
</style>