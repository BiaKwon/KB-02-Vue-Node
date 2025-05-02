<template>
  <div>
    <h1>Counter1</h1>
    <h1>Count : {{ count }}</h1>
    <h1>DoubleCount : {{ doubleCount }}</h1>
    <button v-on:click="increment">+1</button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }

  function decrement() {
    count.value--;
  }

  return { count, doubleCount, increment, decrement };
});
</script>

<style lang="scss" scoped></style>
