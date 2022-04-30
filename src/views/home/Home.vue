<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template #center>
        <h2>购物街</h2>
      </template>
    </nav-bar>
    <tab-comtrol
      id="tab-control"
      :titles="['流行', '新款', '精选']"
      @itemClick="itemClick"
      ref="tabtopControl"
      v-show="isTabFixed"
    />
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      @pullingUp="pullingUp"
    >
      <!-- 轮播图 -->
      <home-swiper
        :banners="banners"
        @swiperImageLoad="swiperImageLoad"
      ></home-swiper>
      <!-- 信息图 -->
      <home-recommend :recommend="recommends"></home-recommend>
      <!-- 推荐 -->
      <feature-view></feature-view>
      <!-- 表单搜索 -->
      <tab-comtrol
        :titles="['流行', '新款', '精选']"
        @itemClick="itemClick"
        ref="tabControl"
        v-show="!isTabFixed"
      />
      <!-- 商品列表 -->
      <goods-list :goods="showGoods" />
    </scroll>
    <!-- 监听原生组件.native -->
    <back-top @click.native="backClick" v-show="hideBackTop" />
  </div>
</template>

<script>
import HomeSwiper from "views/home/childComps/HomeSwiper.vue";
import HomeRecommend from "views/home/childComps/HomeRecommendView.vue";
import FeatureView from "views/home/childComps/FeatureView.vue";

import scroll from "components/common/scroll/Scroll.vue";
import NavBar from "components/common/navbar/NavBar.vue";
import TabComtrol from "components/content/tabComtrol/TabComtrol.vue";
import GoodsList from "components/content/goods/GoodsList.vue";
import BackTop from "components/content/backTop/BackTop.vue";

import { getHomeMultidata, getHomeGoods } from "@/network/home";

export default {
  components: {
    HomeSwiper,
    HomeRecommend,
    FeatureView,

    NavBar,
    TabComtrol,
    GoodsList,
    scroll,
    BackTop,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      hideBackTop: false,
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0,
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  created() {
    this.getHomeMultidata();
    // 2、请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },

  activated() {
    // console.log("activated");
    this.$refs.scroll.scroll.refresh();
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
    // 进入一个网页刷新一次
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getScrollY();
    // console.log(this.saveY);
  },

  methods: {
    //1、请求多个数据
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        // console.log(res.data.banner.list);
        // console.log(res.data.recommend.list);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    // 2、请求商品数据

    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        this.$refs.scroll.finishPullUp();
      });
    },

    // 事件监听方法
    itemClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabtopControl.currentIndex = index;
      this.$refs.tabControl.currentIndex = index;
    },
    //回到顶部按钮
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    // 隐藏顶部按钮
    contentScroll(position) {
      // console.log(position);
      this.hideBackTop = -position.y > 1000;
      //tabControll是否吸顶
      this.isTabFixed = -position.y > this.tabOffsetTop;
    },
    //加载数据
    pullingUp() {
      // console.log(111);
      this.getHomeGoods(this.currentType);
      this.$refs.scroll.scroll.refresh();
    },
    swiperImageLoad() {
      //获取tabOffsetTop的OffsetTop
      // 所有组件都有一个属性$el用于获取组件中的元素
      this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop;
      console.log(this.$refs.tabControl.$el.offsetTop);
    },
  },
};
</script>

<style scoped>
#home {
  /* padding-top: 44px; */
  /* height: 100vm; */
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
  color: rgb(255, 255, 255);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 2;
}
#tab-control {
  position: sticky;
  margin-top: 44px;
  z-index: 2;
  background-color: #fff;
}

.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>