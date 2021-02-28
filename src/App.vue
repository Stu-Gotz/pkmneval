<template>
    <text-paste></text-paste>
    <div class="inner-content">
      <inner-top>
      </inner-top>
      <inner-bottom></inner-bottom>
    </div>
    <div class="footer">
      Credits:
      <a class="footer-link" href="https://github.com/duiker101/pokemon-type-svg-icons" alt="icons">Type Image Credits</a>
      <a class="footer-link" href="https://github.com/Stu-Gotz/pkmneval" alt="github">GitHub Repo</a>
      <a class="footer-link" href="https://pokeapi.co/" alt="pokeapi">PokeAPI</a>
      <a class="footer-link" href="https://github.com/itsjavi/koffing">Team Parser</a>
    </div>
</template>

<script>
import TextPaste from './components/TextPaste.vue'
import InnerTop from './components/InnerTop.vue'
import InnerBottom from './components/InnerBottom.vue'
export default {
  components: {
    TextPaste,
    InnerTop,
    InnerBottom
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
    background-color: #5C4780;
  }
  /* this should have been the default setting... */
  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: #192650;

    &:visited {
      color: #4f124c;
    }
  }
  form {
    height: 100%;
  }
  #app {
    display: grid;
    grid-template-columns: 30% auto;
    grid-template-rows: 1fr auto ;
    column-gap: 20px;
    row-gap: 3px;
    background-color: #6b769a;
    // padding: 0 .4rem;
    height: 100%;
    padding: 5px;
  }
    /* -- GLOBAL BUTTON STYLING -- */
  .btn {
    padding: 1rem;
    font-size: 1.4rem;
    background-color: #432e68;
    color: #a79bbc;
    border-radius: 30px;
    border: none;
    cursor: pointer;
    // box-shadow: 3px 3px 3px rgba(92, 71, 128, .3);
    box-shadow: 2px 2px 3px rgba(0,0,0,.3);

    &:hover {
      box-shadow: 0px 0px 10px 5px rgba(136, 114, 173);
      color: #976495;
    }
  }
//   .main-content {
// was removed. will completely delete later if I don't need for mobile sizing
//     display: grid;
//     grid-template-columns: 30% auto;
//     background-color: #888;
//     // height: 100%;
//     padding: 0 .4rem;
// }
  /* -- CHILD COMPONENT CONTAINER -- */
  .inner-content {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  /* -- FOOTER, OBVIOUSLY -- */
  .footer {
    // position: fixed;
    // left: 0;
    // bottom: 0;
    // text-align: right;
    font-size: 1.2rem;
    padding: 2px;
    margin: 1px;
  }
  .footer-link {
    margin-right: 5px;
  }
</style>
