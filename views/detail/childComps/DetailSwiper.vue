<template>
  <div id="detailSwiper">
    <swiper class="swiper-style">
      <swiper-item v-for="(item, index) in topImage" :key="index">
        <img :src="item" alt="" />
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  components: {
    Swiper,
    SwiperItem,
  },
  props: {
    topImage: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.swiper-style {
  height: 400px;
  overflow: hidden;
}
</style>