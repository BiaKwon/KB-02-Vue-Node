<template lang="">
  <div class="top">
    <h1>여기는 top 슬롯, 뭐든지 기울입니다.</h1>
    <slot name="top"></slot>
  </div>
  <div class="bottom">
    <h1>여기는 bottom 슬롯, 뭐든지 밑줄을 칩니다.</h1>
    <slot name="bottom"></slot>
  </div>
</template>
<script>
export default {
  name: 'SlotChild',
};
</script>
<style scoped>
.top {
  font-style: italic;
  background-color: pink;
}
.bottom {
  text-decoration: underline;
  background-color: skyblue;
}
</style>
