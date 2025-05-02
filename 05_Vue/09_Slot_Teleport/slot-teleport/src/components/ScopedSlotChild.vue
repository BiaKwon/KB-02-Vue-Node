<template lang="">
  <div>
    <slot :msg="data1"></slot>
    <slot name="named" :msg="data2"></slot>
  </div>
</template>
<script>
export default {
  name: 'ScopedSlotChild',
  data() {
    return {
      data1: '나는 어떤 태그에?',
      data2: '그럼 나는?',
    };
  },
};
</script>
