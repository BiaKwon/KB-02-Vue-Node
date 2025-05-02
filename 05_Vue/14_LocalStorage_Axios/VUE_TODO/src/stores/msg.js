import { ref } from 'vue';
import { defineStore } from 'pinia';

const useMsgStore = defineStore('message', () => {
  const msg = ref('기본 메세지');
});
