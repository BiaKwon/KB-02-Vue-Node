<template>
  <div>
    <input type="text" v-model.trim="inputMsg" />
    <button @click="sendMsg">부모한테 전송</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const inputMsg = ref('');
const emit = defineEmits(['send-msg']);

const sendMsg = () => {
  emit('send-msg', inputMsg.value);
};
</script>

<style lang="scss" scoped></style>
