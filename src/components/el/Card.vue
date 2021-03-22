<template>
  <div v-if="type==='small'" class="card">
    <div class="content">
      {{ text }}
    </div>
  </div>
  <div v-else class="card">
    <div class="header">
      {{ type }}
    </div>
    <div class="data">
      {{ data }}
    </div>
  </div>
</template>

<script>
export default {
  props: ['type', 'text', 'data'],
  setup() {
    return {}
  }
}
</script>

<style scoped>
.card {

}
</style>