<template>
  <div v-if="type==='small'" :class="`card ${border}`">
    <div class="content fac">
      {{ text }}
      <i :class="icon"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: ['type', 'text', 'data', 'border', 'header', 'icon'],
  setup() {
    return {}
  }
}
</script>

<style>
.card {
  border-radius: 2px;
  background: rgb(214, 214, 214);
  padding: 1rem;
  flex: 1;
}

.card .content {
  display: flex;
  justify-content: space-evenly;
}
</style>