<template>
  <div class="terminal" @keydown.escape="closeTerminal">
    <div class="close">
      <i class="far fa-times-circle" @click="closeTerminal"></i>
    </div>
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
    <div class="pl-2">
      <p class="inline">
        Dashboard:\Users\User>
      </p>
      <input type="text" class="input" v-model="search" @keydown.enter="checkManPage(search, getResult)" @keydown.up="showPrevious">
    </div>
    <div class="arial pl-2">
      {{ currentManPage.text }}
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { checkManPage } from '../assets/js/functions/checkManPage';
import { useStore } from 'vuex';
export default {
  setup() {
    const store = useStore();
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
      search.value = '';
    }
    function closeTerminal() {
      store.dispatch('componentState/toggleTerminalModal');
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
      getResult,
      closeTerminal
    }
  }
}
</script>

<style>
.terminal {
  height: 100%;
  width: 100%;
  color: rgb(170, 170, 170);
  display: flex;
  flex-direction: column;
  position: relative;
}

.terminal .close {
  position: absolute;
  top: 0px;
  right: 10px;
  font-size: 1.5rem;
  cursor: pointer;
}

.terminal p {
  font-family: Arial, Helvetica, sans-serif;
}

.terminal .input {
  border: none;
  color: rgb(170, 170, 170);
  background: black;
  margin: 0px 20px 20px 20px;
  outline: none;
  margin-left: 5px;
  font-size: 1.1rem;
  font-family: Arial, Helvetica, sans-serif;
  width: 50%;
}
</style>