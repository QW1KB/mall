<template>
  <div id="detail" class="detail">
    <detail-nav-bar
      ref="nav"
      class="detail-nav-bar"
      @itemClick="titleClick"
    ></detail-nav-bar>
    <scroll class="scroll" ref="scroll" @scroll="contentScroll" :probe-type="3">
      <detail-swiper :top-image="topImage"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shopInfo"> </detail-shop-info>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad" />
      <detail-param-info
        :param-info="paramInfo"
        ref="params"
      ></detail-param-info>
      <detail-comment-info
        :comment-info="commentInfo"
        ref="comments"
      ></detail-comment-info>
      <goods-list :goods="recommends" ref="recommends" />
    </scroll>
    <detail-botton-bar @addToCart="addToCart"></detail-botton-bar>
  </div>
</template>

<script>
import DetailNavBar from "views/detail/childComps/DetailNavBar.vue";
import DetailSwiper from "views/detail/childComps/DetailSwiper.vue";
import DetailBaseInfo from "views/detail/childComps/DetailBaseInfo.vue";
import DetailShopInfo from "views/detail/childComps/DetailShopInfo.vue";
import DetailGoodsInfo from "views/detail/childComps/DetailGoodsInfo.vue";
import DetailParamInfo from "./childComps/DetailParamInfo.vue";
import DetailCommentInfo from "./childComps/DetailCommentInfo.vue";
import DetailBottonBar from "./childComps/DetailBottonBar.vue";

import Scroll from "components/common/scroll/Scroll.vue";
import GoodsList from "components/content/goods/GoodsList.vue";

import { getDetail, Goods, Shop, GoodsParam } from "network/detail.js";
import { getRecommend } from "@/network/detail";
import { mapActions } from "vuex";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottonBar,
  },
  data() {
    return {
      iid: null,
      topImage: [],
      goods: {},
      shopInfo: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      themeTopYs: [],
      currentIndex: 0,
    };
  },
  created() {
    //保存传入的iid
    this.iid = this.$route.params.iid;
    // console.log(this.iid);
    //根据iid请求详情数据
    getDetail(this.iid).then((res) => {
      console.log(res);
      const data = res.result;
      //获取顶部的轮播图
      this.topImage = data.itemInfo.topImages;
      // console.log(this.topImage);
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      //获取商家信息
      this.shopInfo = new Shop(data.shopInfo);
      // 获取商品信息
      this.detailInfo = data.detailInfo;
      //获取参数
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      //获取评论信息
      if (data.rate.cRate) {
        this.commentInfo = data.rate.list[0];
      }

      this.themeTopYs = [];
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      this.themeTopYs.push(this.$refs.comments.$el.offsetTop);
      this.themeTopYs.push(this.$refs.recommends.$el.offsetTop);
      console.log(this.themeTopYs);
      this.$nextTick(() => {
        this.themeTopYs = [];
        this.themeTopYs.push(0);
        this.themeTopYs.push(this.$refs.params.$el.offsetTop);
        this.themeTopYs.push(this.$refs.comments.$el.offsetTop);
        this.themeTopYs.push(this.$refs.recommends.$el.offsetTop);
        console.log(this.themeTopYs);
      });
    });

    //请求推荐数据
    getRecommend().then((res) => {
      console.log(res);
      this.recommends = res.data.list;
    });
  },

  methods: {
    ...mapActions(["addCart"]),
    imageLoad() {
      // console.log('detail中调用');
      this.$refs.scroll.scroll.refresh();
      // 当图片加载完成的时候，我们再去获取相应组件的offsetTop值，这里的函数是经过防抖处理的
      // this.getThemeTopY();
      this.themeTopYs = [];
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      this.themeTopYs.push(this.$refs.comments.$el.offsetTop);
      this.themeTopYs.push(this.$refs.recommends.$el.offsetTop);
      console.log(this.themeTopYs);
    },
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 100);
    },
    contentScroll(position) {
      const positionY = -position.y;
      let length = this.themeTopYs.length;
      for (let i = 0; i < length; i++) {
        // console.log(i);
        // if (
        //   positionY > this.themeTopYs[parseInt(i)] &&
        //   positionY < this.themeTopYs[i + 1]
        // ) {
        //   console.log(i);
        // }
        if (this.currentIndex !== i) {
          if (i < length - 1) {
            if (
              positionY >= this.themeTopYs[parseInt(i)] &&
              positionY < this.themeTopYs[i + 1]
            ) {
              this.currentIndex = i;
              console.log(this.currentIndex);
            }
          } else if ((i = length - 1)) {
            if (positionY >= this.themeTopYs[parseInt(i)]) {
              this.currentIndex = i;
              console.log(this.currentIndex);
            }
          }
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }
    },
    addToCart() {
      // 1获取商品信息
      const product = {};
      product.image = this.topImage[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;

      //2将商品添加到购物车里
      // this.$store.cartList.push(product);
      // this.$store.commit("addCart", product);
      // this.$store.dispatch("addCart", product).then((res) => {
      //   console.log(res);
      // });
      this.addCart(product).then((res) => {
        // console.log(res);
        this.$toast.show(res, 2000);
        console.log(this.$toast);
      });

      // console.log(123);
    },
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  height: 100vh;
  background-color: #fff;
  z-index: 9999999999;
}
.detail-nav-bar {
  position: relative;
  background-color: #fff;
  z-index: 9;
}
.scroll {
  position: absolute;
  top: 44px;
  bottom: 50px;
  left: 0;
  right: 0;
}
</style>>

