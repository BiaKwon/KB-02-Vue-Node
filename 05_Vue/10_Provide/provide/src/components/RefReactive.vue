<!-- Ref, Reactive 예제 -->
<template>
  <div>
    <h1>안녕하세요:D</h1>
    <h1>Ref Data: {{ refData.name }}</h1>
    <h1>Reactive Data: {{ reactiveData.name }}</h1>
  </div>
</template>

<!-- VUE3 문법 -->
<script setup>
import { ref, reactive } from 'vue';

const refData = ref({ name: '홍길동' });
const reactiveData = reactive({ name: '홍길동' });
</script>
