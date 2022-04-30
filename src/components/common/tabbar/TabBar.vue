<template>
  <!-- <div id="app"> -->
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style>
#tab-bar {
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 49px;
  box-shadow: 0 -2px 0 rgba(100, 100, 100, 0.1);
}
</style>