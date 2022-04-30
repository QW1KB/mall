<template>
  <div id="shop-info">
    <div class="shop-top">
      <img :src="showImage" alt="" />
      <span class="title"> {{ shop.name }}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-item shop-middle-left">
        <div class="info-sells">
          <div class="sells-count">
            <!-- 过滤器 -->
            {{ shop.sells | sellCountFilter }}
          </div>
          <div class="sells-text">总销量</div>
        </div>

        <div class="info-goods">
          <div class="goods-count">
            {{ shop.goodsCount }}
            <div class="goods-text">全部宝贝</div>
          </div>
        </div>
      </div>
      <div class="shop-middle-item shop-middle-right">
        <table>
          <tr v-for="(item, index) in shop.score" :key="index">
            <td>{{ item.name }}</td>
            <td class="score" :class="{ 'score-better': item.isBetter }">
              {{ item.score }}
            </td>
            <td class="better" :class="{ 'better-more': item.isBetter }">
              <span>{{ item.isBetter ? "高" : "低" }}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>

    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    showImage() {
      return "http:" + this.shop.logo;
    },
  },
  //过滤器
  filters: {
    sellCountFilter: function (value) {
      if (value < 10000) return value;
      return (value / 10000).toFixed(2) + "万";
    },
  },
};
</script>

<style scoped>
.shop-top {
  padding: 14px 8px;
  margin-bottom: 20px;
}
.shop-top img {
  width: 45px;
  height: 45px;
  position: relative;
  top: 15px;
  border: 2px solid rgb(172, 169, 169);
  border-radius: 50%;
}
.shop-top span {
  margin-left: 10px;
}
.shop-middle {
  padding-left: 20px;
  display: flex;
  align-items: center;
}
.shop-middle-item {
  flex: 1;
}
.info-sell {
  display: flex;
}
.info-sell div {
  flex: 1;
}

.shop-middle-left {
  display: flex;
  justify-content: space-evenly;
  color: #333;
  text-align: center;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
}
.sell-count,
.goods-count {
  font-size: 18px;
}
.sells-text,
.goods-text {
  margin-top: 10px;
  font-size: 12px;
}
.shop-middle-right {
  font-size: 13px;
  color: #333;
}
.shop-middle-right table {
  width: 120px;
  margin-left: 30px;
}
.shop-middle-right table td {
  padding: 5px 0;
}
.shop-middle-right .score {
  color: #5ea732;
}
.shop-middle-right .score-better {
  color: #f13e3a;
}
.shop-middle-right .better span {
  background-color: #5ea732;
  color: #fff;
  text-align: center;
}
.shop-middle-right .better-more span {
  background-color: #f13e3a;
}
.shop-bottom {
  text-align: center;
  padding: 10px 0;
}
.enter-shop {
  display: inline-block;
  font-size: 14px;
  background-color: #f2f5f8;
  width: 150px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border-radius: 10px;
}
</style>