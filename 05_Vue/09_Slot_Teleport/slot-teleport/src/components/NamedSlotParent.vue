<template lang="">
  <div>
    <NamedSlotChild>
      <template v-slot:top>
        <h2>여기는 top으로 보내는 html 요소</h2>
      </template>
      <template v-slot:bottom>
        <h2>여기는 bottom으로 보내는 html 요소</h2>
      </template>
    </NamedSlotChild>
  </div>
</template>

<script>
import NamedSlotChild from './NamedSlotChild.vue';
export default {
  name: 'NamedSlotParent',
  components: { NamedSlotChild },
};
</script>
<style lang=""></style>
