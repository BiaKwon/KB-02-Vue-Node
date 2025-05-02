<template lang="">
  <div class="card">
    <slot name="title"></slot>
    <slot name="photo"></slot>
  </div>
</template>
<script>
export default {
  name: 'FancyPhotoBox',
};
</script>
<style scoped>
.card {
  padding: 20px;
  background-color: skyblue;
  width: 300px;
  height: 400px;
  border-radius: 10%;
  border-color: gray;
  border-style: solid;
  border-width: 10px;
  text-align: center;
}
</style>
