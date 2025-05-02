<template>
  <div>
    <h1>오늘의 기분은? {{ msg }}</h1>
    <img :src="imgSrc" :alt="msg" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const currentRoute = useRoute();
const mood = computed(() => currentRoute.params.mood);
const msg = computed(() =>
  mood.value === 'happy' ? '행복합니다!:)' : '신납니다!:D'
);

const imgSrc = computed(() =>
  mood.value === 'happy'
    ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcxyIKrr-tFk5C2-5qzi6EC1jnzmVtAJuyxA&s'
    : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcGfhgNw1kuB5LmHvslmbOZste7J_cv25xDQ&s'
);
</script>

<style lang="scss" scoped></style>
