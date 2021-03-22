<template>
  <div class="drop-down">
    <div class="header">
      {{ title }}
    </div>
    <div class="notis">
      <div class="indMsg" v-for="item in messages" :key="item">
        <i class="fas fa-exclamation-circle"></i>
        {{ item.text }}
      </div>
    </div>
    <div class="rm">
      Read more {{ title }}
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'messages'],
  setup() {
    return {
      
    }
  }
}
</script>

<style>
.m .user .notification .drop-down {
  position: absolute;
  background:rgb(255, 255, 255);
  left: -1000%;
  width: 20rem;
  border-radius: 5px;
  border: 1px solid darkgray;
}

.m .user .notification .drop-down .header {
  background: #4e73df;
  padding: 1rem;
  color: white;
}

.m .user .notification .drop-down .notis {
  border-top: 1px solid darkgray;
}

.indMsg {
  padding: 1rem;
  width: 100%;
  border-bottom: 1px solid darkgray;
  transition: all 0.3s ease-in;
}

.indMsg:hover {
  background: darkgray;
}

.m .user .notification .drop-down .rm {
  padding: 1rem;
  text-align: center;
}
</style>