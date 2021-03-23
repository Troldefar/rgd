<template>
  <div class="modal">
    <Terminal />
  </div>
</template>

<script>
import Terminal from '../../views/Terminal';
export default {
  components: {
    Terminal
  },
  setup() {
    return {
      Terminal
    }
  }
}
</script>

<style>
.modal {
  position: absolute;
  top: 30px;
  bottom: 30px;
  right: 30px;
  left: 30px;
  background: black;
  opacity: 0.9;
  z-index: 100;
  border-radius: 5px;
}
</style>