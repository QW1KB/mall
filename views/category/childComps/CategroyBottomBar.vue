<template>
  <div class="bottom-bar">
    <check-button
      class="bottom-btn"
      :is-check="isSelectAll"
      @click.native="checkClick"
    ></check-button>
    <span>全选</span>
    <span class="totalPrice">合计：{{ totalPrice }}</span>
    <span class="checkLenght" @click="clickPice"
      >去结算：（{{ checkedLength }}）</span
    >
  </div>
</template>

<script>
import CheckButton from "./CheckButton.vue";
export default {
  components: { CheckButton },
  computed: {
    totalPrice() {
      return (
        "￥" +
        this.$store.state.cartList
          .filter((item) => {
            return item.checked;
          })
          .reduce((preValue, item) => {
            return preValue + item.price * item.count;
          }, 0)
          .toFixed(2)
      );
    },
    checkedLength() {
      return this.$store.state.cartList.filter((item) => {
        return item.checked;
      }).length;
    },
    isSelectAll() {
      if (this.$store.state.cartList.length === 0) return false;
      //filter
      //   return !this.$store.state.cartList.filter((item) => !item.checked).length;
      //普通遍历
      for (let item of this.$store.state.cartList) {
        if (!item.checked) {
          return false;
        }
      }
      return true;
    },
  },
  methods: {
    checkClick() {
      if (this.isSelectAll) {
        //表示全部选中
        this.$store.state.cartList.forEach((item) => (item.checked = false));
      } else {
        this.$store.state.cartList.forEach((item) => (item.checked = true));
      }
    },
    clickPice() {
      if (!this.isSelectAll) {
        this.$toast.show("请选择商品", 2000);
      }
    },
  },
};
</script>

<style scoped>
.bottom-bar {
  height: 40px;
  width: 100%;

  background-color: rgb(229, 196, 196);
  position: fixed;
  bottom: 49px;

  /* line-height: 40px; */
}
.bottom-btn {
  display: inline-block;
  /* line-height: 40px; */
  margin: 10px 10px 0 10px;
}
.bottom-bar span {
  font-size: 16px;
}
.totalPrice {
  font-size: 18px;
  margin-left: 45px;
  color: red;
}
.checkLenght {
  background-color: yellow;
  color: #333;
  float: right;
  line-height: 40px;
  font-size: 20px !important;
}
</style>