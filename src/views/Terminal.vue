<template>
  <div class="terminal">
    <div class="output normal-padding">
      <p>
        Dashboard terminal [Version 1.0.0]
      </p>
      <p>
        (c) 2021 Dashboard Corporation. All rights reserved.
      </p>
      <p>
        System ready {{ new Date().toISOString() }}
      </p>
    </div>
    <div class="normal-padding">
      <span>
        C:\Users\User>
      </span>
      <input type="text" class="input" v-model="search" @keydown.enter="getResult">
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
export default {
  setup() {
    const search = ref('');
    function focus() {
      document.querySelector(".input").focus();
    }
    onMounted(() => {
      focus() 
    })
    function getResult(search) {
      console.log(search.target.value);
      this.search = '';
    }
    return {
      getResult,
      search
    }
  }
}
</script>

<style>
.terminal {
  height: 100%;
  width: 100%;
  background: rgb(17, 17, 17);
  color: rgb(170, 170, 170);
  display: flex;
  flex-direction: column;
}


.terminal .input {
  border: none;
  color: rgb(170, 170, 170);
  background: rgb(17, 17, 17);
  margin: 0px 20px 20px 20px;
  outline: none;
  margin-left: -1px;
}
</style>