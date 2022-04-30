<template>
  <div class="tab-bar-item" @click="btnclick">
    <div v-if="!isAtive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon1"></slot></div>
    <div :style="activestyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  props: {
    path: String,
    activecolor: {
      type: String,
      default: "red",
    },
  },
  data() {
    return {
      // isAtive: true,
    };
  },
  computed: {
    isAtive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activestyle() {
      return this.isAtive ? { color: this.activecolor } : {};
    },
  },
  methods: {
    btnclick() {
      this.$router.replace(this.path);
    },
  },
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  font-size: 14px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin-bottom: 2px;
}
/* .active {
  color: skyblue;
} */
</style>