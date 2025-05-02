<template lang="">
  <div>
    <button @click="showModal">모달 열기</button>
    <Modal :visible="isModalVisible" @close="hideModal">
      <h2>모달 내용</h2>
      <p>안녕하세요</p>
    </Modal>
  </div>
</template>

<script>
import Modal from './Modal.vue';
export default {
  name: 'ModalParent',
  components: { Modal },
  data() {
    return {
      isModalVisible: false,
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    hideModal() {
      this.isModalVisible = false;
    },
  },
};
</script>
<style lang=""></style>
