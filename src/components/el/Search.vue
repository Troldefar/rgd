<template>
  <div class="search">
    <input type="text" class="searchTerm" placeholder="What are you looking for?">
    <button type="submit" class="searchButton">
      <i class="fa fa-search"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Search'
}
</script>

<style>

.search {
  width: 100%;
  position: relative;
  display: flex;
}

.searchTerm {
  width: 50%;
  background: rgb(207, 207, 207);
  padding: 10px;
  height: 40px;
  border-radius: 5px 0 0 5px;
  border: none;
  outline: none;
}

.searchButton {
  width: 40px;
  height: 40px;
  border: 1px solid #4e73df;
  background: #4e73df;
  text-align: center;
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  outline: none;
  font-size: 20px;
}
</style>