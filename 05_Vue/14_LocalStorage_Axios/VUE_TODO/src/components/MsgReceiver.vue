<template>
  <div>
    <h1>PINIA로부터 받은 메세지는 "{{ msg }}"</h1>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { userMsgStore } from '@/stores/msg';

const msgStore = useMsgStore();
const msg = computed(() => msgStore.msg);
</script>

<style lang="scss" scoped></style>
