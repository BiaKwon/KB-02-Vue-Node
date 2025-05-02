<template lang="">
  <div>
    <slot><!--  여기에 부모가 보낸 요소가 들어간다--></slot>
  </div>
</template>
<script>
export default {
  name: 'SlotChild',
};
</script>
