<script setup>
import CheckList from './components/CheckList.vue';
import TodoProps from './components/TodoProps.vue';
import EventProps from './components/EventProps.vue';

const sendingEvent = () => {
  alert('부모 컴포넌트');
};
</script>

<template>
  <h1>오늘 할 일</h1>
  <CheckList />
  <hr />
  <TodoProps todo="Vue 공부하기" />
  <TodoProps todo="잠자기" />
  <hr />
  <CheckList />

  <EventProps :parentEvent="sendingEvent" />
</template>

<style scoped></style>
