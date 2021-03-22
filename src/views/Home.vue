<template>
  <div class="home normal-padding">
    <h1>
      Dashboard
    </h1>
    <Card type="small" text="card(SM)" data="123" />
  </div>
</template>

<script>
import Card from '../components/el/Card';
export default {
  name: 'Home',
  components: {
    Card
  }
}
</script>
