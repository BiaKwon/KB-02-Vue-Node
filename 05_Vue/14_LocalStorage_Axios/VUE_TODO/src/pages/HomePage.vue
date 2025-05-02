<script setup>
const obj = {
  name: '홍길동',
  isHero: true,
};
// 객체를 JSON으로 변환하면 확인 가능
localStorage.setItem('gildongObj', JSON.stringify(obj));
const getObj = JSON.parse(localStorage.getItem('gildongObj'));

console.log(getObj);
console.log(getObj.name);
</script>

<template>
  <div>
    <h1>HOME</h1>
  </div>
</template>
