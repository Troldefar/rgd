<template>
  <div class="m normal-padding shadow">
    <Search />
    <div class="user">
      <span>
        <i class="fas fa-bell fa-fw"></i>
      </span>
      <span>
        <i class="fas fa-envelope fa-fw"></i>
      </span>
      <span>
        User
      </span>
      <span>
        <i class="fas fa-user-secret"></i>
      </span>
    </div>
  </div>
</template>

<script>
import Search from '../el/Search';
export default {
  name: 'UpperMenu',
  components: {
    Search
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
  justify-content: end;
  align-items: center;
}

.user i {
  color: rgb(202, 202, 202);
  margin: 0px 5px;
}
</style>