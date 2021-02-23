<template>
  <div class="inner-top">
    <cards></cards>
  </div>
</template>

<script>
import Cards from './Cards.vue'
export default {
  name: 'InnerTop',
  components: {
    Cards
  }
}
</script>

<style lang="scss">
  /* -- CARD DISPLAY SECTION -- */
  .inner-top {
      height: 48%;
      background-color: #7D6B9B;
  }
</style>
