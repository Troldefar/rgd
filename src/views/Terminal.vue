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
      <p class="inline">
        Dashboard:\Users\User>
      </p>
      <input type="text" class="input" v-model="search" @keydown.enter="checkManPage(search, getResult)" @keydown.up="showPrevious">
    </div>
    <div class="normal-padding">
      {{ currentManPage.text }}
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { checkManPage } from '../assets/js/functions/checkManPage';
export default {
  setup() {

    let search = ref('');
    const previousCommands = ref([]);
    const currentManPage = ref({
      header: 'text',
      text: '',
    });

    function focus() {
      document.querySelector(".input").focus();
    }
    function showPrevious() {
      search = this.previousCommands[this.previousCommands.length - 1];
    }
    function getResult(msg) {
      currentManPage.value.text = msg.text;
    }
    
    onMounted(() => {
      focus();
    });

    return {
      search,
      previousCommands,
      showPrevious,
      currentManPage,
      checkManPage,
      getResult
    }
  }
}
</script>

<style>
.terminal {
  height: 100%;
  width: 100%;
  background: rgb(41, 41, 41);
  color: rgb(170, 170, 170);
  display: flex;
  flex-direction: column;
}

.terminal p {
  font-family: Arial, Helvetica, sans-serif;
}

.terminal .input {
  border: none;
  color: rgb(170, 170, 170);
  background: rgb(41, 41, 41);
  margin: 0px 20px 20px 20px;
  outline: none;
  margin-left: 5px;
  font-size: 1.1rem;
  font-family: Arial, Helvetica, sans-serif;
  width: 50%;
}
</style>