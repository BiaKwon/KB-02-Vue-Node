<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script setup>
// props 정의
const props = defineProps({
  msg: {
    type: String,
    required: true,
  },
});

// script level에서는 props.msg 로 작성해야 (.value 처럼)
console.log(props.msg);
</script>

<style lang="scss" scoped></style>
