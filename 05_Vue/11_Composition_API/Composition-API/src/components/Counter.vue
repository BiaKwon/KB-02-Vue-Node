<!-- computed methods watch 예제 -->
<template>
  <div>
    <h1>Counter</h1>
    <p>Count: {{ count }}</p>
    <p>Double: {{ double }}</p>
    <p>지금까지 계산한 횟수: {{ total }}</p>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';

const count = ref(0);
const total = ref(0);

// computed
const double = computed(() => count.value * 2);

// method
function increment() {
  count.value++;
  total.value++;
}

function decrement() {
  count.value--;
  total.value++;
}

// watch
watch(count, (newValue, oldValue) => {
  console.log(`카운트가 ${oldValue}에서 ${newValue}(으)로 변경됨`);

  if (newValue % 10 === 0 && newValue !== 0) {
    alert(`축하! ${newValue}도달!`);
  }
});
</script>

<style lang="scss" scoped></style>
