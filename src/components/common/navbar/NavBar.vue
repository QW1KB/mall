<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.nav-bar {
  display: flex;
  height: 44px;
  line-height: 44px;
  /* background-color: skyblue; */
  box-shadow: 0px 1px 22px rgb(237, 234, 234);
  border-radius: 5px;
}
.left,
.right {
  width: 20%;
  /* background-color: antiquewhite; */
}
.center {
  flex: 1;
  /* background-color: skyblue; */
  text-align: center;
  /* color: rgb(201, 149, 158); */
}
</style>