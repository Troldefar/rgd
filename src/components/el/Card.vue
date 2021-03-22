<template>
  <div v-if="type==='small'" :class="`card ${borderColor}`">
    <div class="content">
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  props: ['type', 'text', 'data', 'borderColor', 'header'],
  setup() {
    return {}
  }
}
</script>

<style scoped>
.card {
  border-radius: 2px;
  background: rgb(214, 214, 214);
  padding: 1rem;
  flex: 1;
}
.orange {
  border-left: 1px solid orange;
}
.green {
  border-left: 1px solid green;
}
.red {
  border-left: 1px solid crimson;
}
.blue {
  border-left: 1px solid blue;
}
</style>