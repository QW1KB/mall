<template>
  <div class="goods-item" @click="itemClick">
    <img :src="showImage" alt="" />
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">￥/{{ goodsItem.price }}</span>
      <span class="collect">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    showImage() {
      return this.goodsItem.image || this.goodsItem.show.img;
    },
  },
  methods: {
    imgLoad() {},
    itemClick() {
      // console.log("跳转详情页");
      // console.log(this.goodsItem.iid);
      this.$router.push("/detail/" + this.goodsItem.iid);
    },
  },
};
</script>

<style scoped>
.goods-item {
  position: relative;
  padding-bottom: 40px;
  width: 48%;
  margin-bottom: 5px;
  box-shadow: 3px 3px 2px rgb(192, 189, 189);
  border-radius: 5px;
}
.goods-item img {
  width: 100%;
  border-radius: 8px;
}
.goods-info {
  text-align: center;
  padding: 3px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  font-size: 14px;
}
.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 0 10px;
}
.goods-info .price {
  color: red;
  margin-right: 25px;
}
.goods-info .collect {
  position: relative;
}
.goods-info .collect::before {
  content: "";
  position: absolute;
  top: 0;
  left: -16px;
  width: 14px;
  height: 14px;
  background: url("assets/img/home/collect.png") 0 0/ 14px;
}
</style>