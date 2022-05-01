<template>
  <div class="user">
    <a href="">
      <slot name="user-icon">
        <div class="privateImage-svg"></div>
      </slot>
    </a>
    <div class="aaa">
      <slot><div @click="itemclick">登录/注册</div></slot>
      <slot><div class="bbb">暂无绑定手机号</div></slot>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    itemclick() {
      this.$toast.show("请登录", 2000);
    },
  },
};
</script>
<style scoped>
.user {
  height: 100px;
  background-color: #ff8198;
}
.privateImage-svg {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  float: left;
  margin: 5px;
  background-color: antiquewhite;
}
.aaa {
  float: left;
  padding-top: 20px;
  color: white;
  padding-left: 20px;
}
.bbb {
  font-size: 14px;
  padding: 5px;
}
</style>