<template>
    <ul class="team-holder">
      <card>
      </card>
    </ul>
</template>

<script>
import Card from './Card.vue'
export default {
  components: {
    Card
  }
}
</script>

<style lang="scss" scoped>
  /* -- TEAM CONTAINER -- */
  .team-holder {
      display: flex;
      justify-content: space-evenly;
      height: 100%;
      align-items: center;
      border: 1px solid black;
  }
</style>
