<template>
  <div class="n normal-padding">
    <h2>
      <i class="fas fa-laugh-wink mr-2 mb-2"></i>
      Dashboard
    </h2>
    <hr>
    <div class="menuItem">
      <i class="fas fa-fw fa-tachometer-alt mr-2"></i>
      <router-link to="/">
        Dashboard
      </router-link>
    </div>
    <hr>
    <p>
      Interface
    </p>
    <div class="menuItem" v-for="item in menuItemsInterface" :key="item.title">
      <p @click="openSlide(item.title)">
        <i :class="item.icon"></i>
        <span class="text-align-start">
          {{ item.header }}
        </span>
        <i class="fas fa-angle-right leftArrow fac"></i>
      </p>
      <div :class=" `menuComponent ${currentElement === item.title ? 'active grow' : 'notActive'}`">
        <router-link :to="item.title">
          <i class="fab fa-adn mr-2"></i>
          {{ item.header }}
        </router-link>
      </div>
    </div>
    <hr>
    <p>
      Addons
    </p>
    <div class="menuItem" v-for="item in menuItemsAddons" :key="item.title">
      <p @click="openSlide(item.title)">
        <i :class="item.icon"></i>
        <span class="text-align-start">
          {{ item.header }}
        </span>
        <i class="fas fa-angle-right leftArrow fac"></i>
      </p>
      <div :class=" `menuComponent ${currentElement === item.title ? 'active grow' : 'notActive'}`">
        <router-link :to="item.title">
          <i class="fab fa-adn mr-2"></i>
          {{ item.header }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { menuItemsInterface, menuItemsAddons } from '../../assets/js/arrays/array';
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
      openSlide,
      menuItemsInterface,
      menuItemsAddons
    }
  }
}
</script>

<style scoped>
.n {
  display: flex;
  flex-direction: column;
  color: white;
}

.n h2 {
  text-align: center;
}

.n .menuItem {
  line-height: 3;
  position: relative;
  cursor: pointer;
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
  background: #0d1b2a;
  color: white;
  border-radius: 2px;
  box-shadow: 2px 2px 2px black;
}
</style>