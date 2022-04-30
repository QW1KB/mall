<template>
  <div class="goods">
    <goods-list-item
      v-for="(item, index) in goods"
      :key="index"
      :goodsItem="item"
    ></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem.vue";
export default {
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    GoodsListItem,
  },
};
</script>

<style scoped>
.goods {
  width: 100%;
  /* 让弹性盒元素在必要的时候拆行： */
  display: flex;

  flex-wrap: wrap;
  /* 在弹性盒对象的 <div> 元素中的各项周围留有空白： */
  justify-content: space-around;
}
</style>