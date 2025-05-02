<template lang="">
  <div>
    <!-- default 이름 없는 scope 받기 -->
    <ScopedSlotChild v-slot:default="fromChild">
      <h1>{{ fromChild.msg }}</h1>
    </ScopedSlotChild>

    <ScopedSlotChild v-slot:named="fromChild2">
      <p>{{ fromChild2.msg }}</p>
    </ScopedSlotChild>
  </div>
</template>

<script>
import ScopedSlotChild from './ScopedSlotChild.vue';
export default {
  name: 'ScopedSlotParent',
  components: { ScopedSlotChild },
};
</script>
<style lang=""></style>
