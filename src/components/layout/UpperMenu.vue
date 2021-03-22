<template>
  <div class="m normal-padding shadow">
    <Search />
    <div class="headerDB">
      Dashboard
    </div>
    <div class="user">
      <span class="notification" @click="openDropdown('notifications')">
        <i class="fas fa-bell fa-fw"></i>
        <span>
          2
        </span>
        <Dropdown 
          :class="`drop-down ${currentElement === 'notifications' ? 'show' : 'dontShow'}`" 
          title="Messages" 
          :messages="[{text: '123'}, {text: '2345'}]" 
        />
      </span>
      <span class="notification" @click="openDropdown('messages')">
        <i class="fas fa-envelope fa-fw"></i>
        <span class="greenColor">
          0
        </span>
        <Dropdown 
          :class="`drop-down ${currentElement === 'messages' ? 'show' : 'dontShow'}`" 
          title="Notifications" 
          :messages="[]" 
        />
      </span>
      <hr>
      <span>
        Test user
      </span>
      <span>
        <img 
          class="userImage" 
          src="../../assets/img/profile.png"/>
      </span>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import Search from '../el/Search';
import Dropdown from '../el/Dropdown';
export default {
  name: 'UpperMenu',
  components: {
    Search,
    Dropdown
  },
  setup() {
    const currentElement = ref('');
    function openDropdown(el) {
      if(this.currentElement === el) {
        this.currentElement = '';
        return;
      }
      this.currentElement = el;
    }
    return {
      currentElement,
      openDropdown
    } 
  }
}
</script>

<style>
.m {
  display: flex;
}

.m > div {
  flex: 1;
}

.user {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.user i {
  color: rgb(202, 202, 202);
  margin: 0px 5px;
}

.user span {
  margin: 0px 10px;
}

.m .user hr {
  background:rgb(202, 201, 201);
  width: 30px;
  transform: rotate(90deg);
}

.userImage {
  max-height: 32px;
}

.headerDB {
  text-align: center;
  font-size: 1.5rem;
}

.m .user .notification {
  position: relative;
  z-index: 1;
  cursor: pointer;
}

.fas {
  transition: all 0.3s ease-in-out;
}

.fas:hover {
  color: rgb(121, 121, 124);
}

.m .user .notification > span {
  position: absolute;
  top: -4px;
  right: -12px;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  text-align: center;
  font-size: 0.8rem;
  background: #e74a3b;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
  color: white;
  border: 1px solid white;
}

.greenColor {
  background: rgb(119, 145, 119) !important;
}

</style>