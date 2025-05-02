<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      /
      <RouterLink to="/about">About</RouterLink>
      /
      <RouterLink to="/dynamic/happy">happy</RouterLink>
      /
      <RouterLink to="/dynamic/excited">Excited</RouterLink>
      /
      <!-- cors -->
      <RouterLink to="/cors">Cors</RouterLink>
      /
      <RouterLink to="/ex-cors">Cors Ex</RouterLink>
    </nav>
    <div>
      <button @click="router.push('/')">Home</button>
      <button @click="router.push('/about')">About</button>
      <button @click="router.back()">뒤로</button>
      <button @click="router.forward()">앞으로</button>
      <button @click="router.go(-2)">뒤뒤로</button>
    </div>
  </header>
  <RouterLink to="/userinfo/user1">User1</RouterLink>/
  <RouterLink to="/userinfo/user2">User2</RouterLink>/
  <RouterLink to="/userinfo/user3">User3</RouterLink>/
  <RouterLink to="/userinfo/user4">User4</RouterLink>/
  <RouterLink to="/userinfo/user5">User5</RouterLink>
  <RouterView />
</template>

<style scoped></style>
