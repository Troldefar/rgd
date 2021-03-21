<template>
  <div class="l-container">
    <LeftMenu />    
    <div class="c">
      <UpperMenu />
      <div class="c normal-padding">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import LeftMenu from './components/layout/LeftMenu';
import UpperMenu from './components/layout/UpperMenu';
export default {
  components: {
    LeftMenu,
    UpperMenu
  }
}
</script>


<style>
.l-container .n {
  background-color: #4e73df;
  background-image: linear-gradient(180deg,#4e73df 10%,#224abe 100%);
}
.l-container .c {
  width: 100%;
}
</style>
