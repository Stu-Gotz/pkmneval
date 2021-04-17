<template>
  <div class="inner-btm">
    <div class="display">
      Paste a team to the side and hit submit!
    </div>
    <!-- <div class="display-active"> -->
    <!-- </div> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'InnerBottom',
  computed: {
    ...mapGetters({
      team: 'hasTeam'
    })
  }
}
</script>

<style lang="scss">
  /* -- DISPLAY -- */
  /* Once I learn to D3, this will hopefully have usage stats trends and stuff
      for now, it will just do a team display, going try some fancy CSS if I can
      get some SVG magic going. */
  .inner-btm {
      height: 50%;
      background-color: darkturquoise;
      opacity: .3;
  }
  .display {
    padding: 1rem;

    &-active {
      color: #111;
    }
  }
</style>
