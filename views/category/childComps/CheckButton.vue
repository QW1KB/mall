<template>
  <div class="check-button" :class="{ active: isCheck }">
    <img src="" alt="" />
  </div>
</template>

<script>
export default {
  props: {
    isCheck: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style scoped>
.check-button {
  width: 20px;
  height: 20px;
  /* background-color: rgb(230, 20, 20); */
  border: 2px solid #333;
  border-radius: 50%;
}
.check-button img {
  width: 100%;
  /* background-color: aliceblue; */
}
.active {
  background-color: red;
  border-color: #333;
}
</style>