<!-- QuizParent -->
<template>
  <div>
    <h1>{{ msg }}</h1>
    <QuizChild :answerNum="answerNum" @send-msg="emitHandler" />
  </div>
</template>

<script setup>
import QuizChild from './QuizChild.vue';
import { ref } from 'vue';

const answerNum = ref(0);
answerNum.value = parseInt(Math.random() * 10);

const msg = ref('랜덤 숫자를 맞춰 주세요');

function emitHandler(value) {
  msg.value = value;
}
</script>

<style lang="scss" scoped></style>
