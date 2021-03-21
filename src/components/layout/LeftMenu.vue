<template>
  <div class="n normal-padding">
    <h2>
      Dashboard
    </h2>
    <hr>
    <router-link class="menuItem" to="/">
      <i class="fas fa-fw fa-tachometer-alt mr-2"></i>
      Dashboard
      <i class="fas fa-angle-right leftArrow"></i>
    </router-link>
    <hr>
    <p>
      Interface
    </p>
    <router-link class="menuItem" to="/">
      <i class="fas fa-cog mr-2"></i>
      Components
      <i class="fas fa-angle-right leftArrow"></i>
    </router-link>
    <router-link class="menuItem" to="/about">
      <i class="fas fa-tools mr-2"></i>
      Utilities
      <i class="fas fa-angle-right leftArrow"></i>
    </router-link>
    <hr>
    <p>
      Addons
    </p>
    <router-link class="menuItem" to="/">
      <i class="fas fa-folder-open mr-2"></i>
      Pages
      <i class="fas fa-angle-right leftArrow"></i>
    </router-link>
    <router-link class="menuItem" to="/about">
      <i class="fas fa-chart-area mr-2"></i>
      Charts
      <i class="fas fa-angle-right leftArrow"></i>
    </router-link>
    <router-link class="menuItem" to="/about">
      <i class="fas fa-table mr-2"></i>
      Tables
      <i class="fas fa-angle-right leftArrow"></i>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'LeftMenu',
  data() {

  }
}
</script>

<style>
.n {
  display: flex;
  flex-direction: column;
}

.n .menuItem {
  line-height: 3;
  position: relative;
}

.n .menuItem .leftArrow {
  position: absolute;
  right: 0px;
  top: 0px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>