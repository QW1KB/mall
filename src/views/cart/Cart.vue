<template>
  <div id="cart">
    <nav-bar class="nav-bar">
      <template #center>
        <div>商品分类</div>
      </template>
    </nav-bar>
    <tab-menu :child-cart="categories" @selectItem="selectItem"></tab-menu>
    <scroll id="tab-content">
      <div>
        <tab-content-category
          :subcategories="showSubcategory"
        ></tab-content-category>
        <tab-comtrol
          :titles="['流行', '新款', '热门']"
          @tabclick="tabclick"
        ></tab-comtrol>
        <cart-detail :category-data="showCategoryDetail"></cart-detail>
      </div>
    </scroll>
  </div>
</template>


<script>
import NavBar from "@/components/common/navbar/NavBar.vue";
import TabMenu from "./childComps/TabMenu.vue";
import { getCategory, getSubCategory, getCategoryDetail } from "@/network/cart";
import Scroll from "@/components/common/scroll/Scroll.vue";
import Detail from "../detail/Detail.vue";
import TabComtrol from "@/components/content/tabComtrol/TabComtrol.vue";
import CartDetail from "./childComps/CartDetail.vue";

export default {
  components: {
    NavBar,
    TabMenu,
    Scroll,
    Detail,
    TabComtrol,
    CartDetail,
  },
  data() {
    return {
      categories: [],
      categoryData: {},
      currentIndex: -1,
      currentType: "pop",
    };
  },
  created() {
    //请求分类数据
    this._getCategory();
  },
  computed: {
    showSubcategory() {
      if (this.currentIndex === -1) return {};
      return this.categoryData[this.currentIndex].subcategories;
    },
    showCategoryDetail() {
      if (this.currentIndex === -1) return [];
      return this.categoryData[this.currentIndex].categoryDetail[
        this.currentType
      ];
    },
  },
  methods: {
    _getCategory() {
      getCategory().then((res) => {
        // 1.获取分类数据
        this.categories = res.data.category.list;
        // 2.初始化每个类别的子数据
        for (let i = 0; i < this.categories.length; i++) {
          this.categoryData[i] = {
            subcategories: {},
            categoryDetail: {
              pop: [],
              new: [],
              sell: [],
            },
          };
        }
        // 3.请求第一个分类的数据
        this._getSubcategories(0);
      });
    },
    _getSubcategories(index) {
      this.currentIndex = index;
      const mailKey = this.categories[index].maitKey;
      getSubCategory(mailKey).then((res) => {
        this.categoryData[index].subcategories = res.data;
        this.categoryData = { ...this.categoryData };
        this._getCategoryDetail("pop");
        this._getCategoryDetail("sell");
        this._getCategoryDetail("new");
      });
    },
    _getCategoryDetail(type) {
      // 1.获取请求的miniWallkey
      const miniWallkey = this.categories[this.currentIndex].miniWallkey;
      // 2.发送请求,传入miniWallkey和type
      getCategoryDetail(miniWallkey, type).then((res) => {
        // 3.将获取的数据保存下来
        this.categoryData[this.currentIndex].categoryDetail[type] = res;
        this.categoryData = { ...this.categoryData };
      });
    },
    /**
     * 事件响应相关的方法
     */
    selectItem(index) {
      this._getSubcategories(index);
    },
    tabclick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
      }
    },
  },
};
</script>

<style scoped>
#cart {
  /*height: 100px;*/
}
.nav-bar {
  background-color: var(--color-tint);
  font-weight: 700;
  color: #fff;
  box-sizing: border-box;
}
.content {
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
  display: flex;
  /*overflow: hidden;*/
}
#tab-content {
  height: 800px;
  flex: 1;
  overflow: hidden;
}
</style>