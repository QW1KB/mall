<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="info-title">{{ goods.title }}</div>
    <div class="info-price">
      <span class="n-price">{{ goods.newPrice }}</span>
      <span class="o-price">{{ goods.oldPrice }}</span>
      <span class="discount">{{ goods.discount }}</span>
    </div>
    <div class="info-other">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.services[goods.services.length - 1].name }}</span>
    </div>
    <div class="info-service">
      <span
        class="info-service-item"
        v-for="index in goods.services.length - 1"
        :key="index"
      >
        <img :src="goods.services[index - 1].icon" alt="" />
        <span>{{ goods.services[index - 1].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
    filters: {
      Imgfilter: function (value) {
        return "http:" + value;
      },
    },
  },
};
</script>

<style scoped>
.base-info {
  margin-top: 10px;
  padding: 0 8px;
  border-bottom: 5px solid #f2f5f8;
}

.info-title {
  color: #222;
  font-weight: bolder;
  font-size: 18px;
  text-indent: 2em;
}
.info-price {
  margin-top: 5px;
}
.info-price .n-price {
  font-size: 24px;
  color: rgb(250, 63, 63);
}
.info-price .o-price {
  font-size: 13px;
  margin-left: 5px;
  text-decoration: line-through;
}
.info-price .discount {
  font-size: 14px;
  /* padding: 1px 6px; */
  border-radius: 5px;
  background-color: rgb(250, 63, 63);
  color: #f2f5f8;
  margin-left: 10px;
  position: relative;
  top: -7px;
}
.info-other {
  margin-top: 10px;
  line-height: 30px;
  display: flex;
  font-size: 13px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.2);
}
.info-other span {
  flex: 1;
}
.info-service {
  font-size: 14px;
  color: #333;
  display: flex;
  justify-content: space-between;
}
.info-service img {
  width: 14px;
  height: 14px;
  position: relative;
  top: 2px;
  margin-right: 2px;
}
</style>