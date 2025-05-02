<!-- QuizChild -->
<template>
  <div>
    <input v-model.number="inputNum" />
    <button @click="sendMsg">정답!</button>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  answerNum: {
    type: Number,
    required: true,
  },
});

const inputNum = ref(0);

const emit = defineEmits(['send-msg']);
const msg = ref('');
const cnt = ref(0);

const sendMsg = () => {
  if (props.answerNum < inputNum.value) {
    msg.value = 'DOWN';
  } else if (props.answerNum > inputNum.value) {
    msg.value = 'UP';
  } else {
    msg.value = '정답입니다!';
  }
  cnt.value++;
  emit('send-msg', msg.value);
};

watch(cnt, (newValue, oldValue) => {
  if (newValue === 3) {
    alert(`3번째 시도입니다!`);
  }
});
</script>

<style lang="scss" scoped></style>
