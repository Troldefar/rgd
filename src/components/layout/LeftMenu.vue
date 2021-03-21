<template>
  <div class="n normal-padding">
    <h2>
      Dashboard
    </h2>
    <hr>
    <router-link class="menuItem" to="/">
      <i class="fas fa-fw fa-tachometer-alt mr-2"></i>
      Dashboard
    </router-link>
    <hr>
    <p>
      Interface
    </p>
    <router-link class="menuItem" to="/">
      <p @click="openSlide('components')">
        <i class="fas fa-cog"></i>
        <span class="text-align-start">
          Components
        </span>
        <i class="fas fa-angle-right leftArrow fac"></i>
      </p>
      <div :class=" `menuComponent ${currentElement === 'components' ? 'active grow' : 'notActive'}`">
        Components stuff
      </div>
    </router-link>
    <router-link class="menuItem" to="/statistics">
      <p @click="openSlide('utilities')">
        <i class="fas fa-tools"></i>
        <span class="text-align-start">
          Utilities
        </span>
        <i class="fas fa-angle-right leftArrow fac"></i>
      </p>
      <div :class=" `menuComponent ${currentElement === 'utilities' ? 'active' : 'notActive'}`">
        Utilities
      </div>
    </router-link>
    <hr>
    <p>
      Addons
    </p>
    <router-link class="menuItem" to="/">
      <p  @click="openSlide('pages')">      
        <i class="fas fa-folder-open"></i>
        <span class="text-align-start">
          Pages
        </span>
        <i class="fas fa-angle-right leftArrow fac"></i>
      </p>
      <div :class=" `menuComponent ${currentElement === 'pages' ? 'active' : 'notActive'}`">
        Components stuff
      </div>
    </router-link>
    <router-link class="menuItem" to="/statistics">
      <p @click="openSlide('charts')">
        <i class="fas fa-chart-area"></i>
        <span class="text-align-start">
          Charts
        </span>
        <i class="fas fa-angle-right leftArrow fac"></i>
      </p>
      <div :class=" `menuComponent ${currentElement === 'charts' ? 'active' : 'notActive'}`">
        Charts stuff
      </div>
    </router-link>
    <router-link class="menuItem" to="/statistics">
      <p @click="openSlide('tables')">      
        <i class="fas fa-table"></i>
        <span class="text-align-start">
          Tables
        </span>
        <i class="fas fa-angle-right leftArrow fac"></i>
      </p>
      <div :class=" `menuComponent ${currentElement === 'tables' ? 'active' : 'notActive'}`">
        Tables
      </div>
    </router-link>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  name: 'LeftMenu',
  setup() {
    const currentElement = ref('');

    function openSlide(el) {
      if(this.currentElement === el) {
        this.currentElement = '';
        return;
      }
      this.currentElement = el;
    }

    return {
      currentElement,
      openSlide
    }
  }
}
</script>

<style scoped>
.n {
  display: flex;
  flex-direction: column;
}

.n .menuItem {
  line-height: 3;
  position: relative;
}

.n .menuItem p {
  display: flex;
  position: relative;
}

.n .menuItem p > * {
  flex: 1;
  display: flex;
  line-height: 3;
}

.n .menuItem p .text-align-start {
  flex: 2;
}

.menuComponent {
  position: relative;
  background: lightgray;
  border-radius: 2px;
  box-shadow: 2px 2px 2px black;
}
</style>