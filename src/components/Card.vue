<template>
  <li class="card" id="card1">
    <card-front></card-front>
    <!-- <card-back></card-back> -->
  </li>
</template>

<script>
import CardFront from '../views/carddisplay/CardFront.vue'
export default {
  components: {
    CardFront
  }
}
</script>

<style lang="scss">
  .card {
    flex-basis: calc(100% / 6);
    text-align: center;
  }
</style>
