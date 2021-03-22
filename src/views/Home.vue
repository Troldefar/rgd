<template>
  <div class="home normal-padding">
    <h1>
      Dashboard
    </h1>
    <div class="upper">
      <Card 
        v-for="item in HomeCards" 
        :key="item.title" 
        :type="item.type" 
        :text="item.header" 
        :data="item.data"
        :border="item.borderColor"
      />
    </div>
  </div>
</template>

<script>
import { HomeCards } from '../assets/js/arrays/homeCards';
import Card from '../components/el/Card';
export default {
  name: 'Home',
  components: {
    Card
  },
  setup() {
    return {
      HomeCards
    }
  }
}
</script>

<style scoped>
.home .upper {
  display: flex;
  flex-wrap: wrap;
}

.home .upper > div {
  margin: 0px 2px;
}
</style>
