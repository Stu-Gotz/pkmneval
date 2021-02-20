<template>
  <home></home>
</template>

<script>
import Home from './views/Home.vue'
export default {
  components: {
    Home
  }
}
</script>

<style lang="scss">
/* -- GLOBAL PAGE SETTINGS --*/
  *,
  *::before,
  *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  html {
      height: 100%;
      font-size: 62.5%; //set rem to 10px
      box-sizing: border-box;
  }
  body {
      height: 100%;
      width: 100%;
      font-size: 1.6em;
      font-family: Arial, Helvetica, sans-serif;
  }
  /* this should have been the default setting... */
  ul {
      list-style: none;
  }
  a {
      text-decoration: none;
  }
  #app {
    display: grid;
    grid-template-columns: 30% auto;
    grid-template-rows: 100% auto;
    background-color: #888;
    // height: 100%;
    padding: 0 .4rem;
  }
</style>
