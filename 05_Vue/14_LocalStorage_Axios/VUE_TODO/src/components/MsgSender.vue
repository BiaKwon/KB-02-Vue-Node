<template>
  <div></div>
</template>

<script setup>
import { ref } from 'vue';
import { userMsgStore } from '@/stores/msg';

const msgStore = useMsgStore();
const msg = computed(() => msgStore.msg);
</script>

<style lang="scss" scoped></style>
