<template>
  <div class="terminal">
    <div class="output normal-padding">
      Random output
    </div>
    <input type="text" class="input">
  </div>
</template>

<script>
export default {
  setup() {
    return {}
  }
}
</script>

<style>
.terminal {
  height: 100%;
  width: 100%;
  background: black;
  color: white;
  display: flex;
  flex-direction: column;
}

.terminal .output {
  flex: 12;
}

.terminal .input {
  flex: 1;
  border: none;
  background: black;
  border: 1px solid white;
  color: white;
  margin: 0px 20px 20px 20px;
  font-size: 1.5rem;
  border-radius: 3px;
  outline: none;
}
</style>