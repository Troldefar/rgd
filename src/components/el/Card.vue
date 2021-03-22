<template>
  <div v-if="type==='small'" :class="`card shadow ${border}`">
    
  </div>
</template>

<script>
export default {
  props: ['type', 'text', 'data', 'border', 'header', 'icon', 'headerColor'],
  setup() {
    return {}
  }
}
</script>

<style>

</style>