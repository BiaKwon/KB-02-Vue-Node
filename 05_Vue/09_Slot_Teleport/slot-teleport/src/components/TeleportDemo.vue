<template lang="html">
  <div>
    <button @click="teleportTo('pink')">핑크로</button>
    <button @click="teleportTo('skyblue')">하늘색으로</button>
    <button @click="teleportTo('yellow')">노란색으로</button>
    <div id="pink"></div>
    <div id="skyblue"></div>
    <div id="yellow"></div>

    <teleport :to="target">
      <h1>안녕하시소</h1>
    </teleport>
  </div>
</template>

<script>
import { Teleport } from 'vue';

export default {
  name: 'TeleportDemo',
  data() {
    return {
      target: 'body', // 초기값은 body로 설정되어 있습니다.
    };
  },
  methods: {
    teleportTo(target) {
      this.target = `#${target}`; // 버튼 클릭 시 target 값 변경
    },
  },
};
</script>

<style scoped>
div {
  height: 200px;
}
#pink {
  background-color: pink;
}
#skyblue {
  background-color: skyblue;
}
#yellow {
  background-color: yellow;
}
</style>
