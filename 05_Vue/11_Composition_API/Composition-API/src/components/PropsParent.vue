<template>
  <div>
    <PropsChild :msg="msg" />
  </div>
</template>

<script setup>
import PropsChild from './PropsChild.vue';
import { ref } from 'vue';

const msg = ref('Props로 전달될 문자열');
</script>

<style lang="scss" scoped></style>
