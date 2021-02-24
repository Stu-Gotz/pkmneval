<template>
    <text-paste></text-paste>
    <div class="inner-content">
      <inner-top>
      </inner-top>
      <inner-bottom></inner-bottom>
    </div>
    <div class="footer">Thanks to APIs, link to my git, copyright hover</div>
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
  button {
    padding: 1rem;
    font-size: 1.4rem;
    background-color: #432e68;
    color: #a79bbc;
    border-radius: 30px;
    border: none;
    cursor: pointer;
    box-shadow: 3px 3px 3px rgba(92, 71, 128, .3);

    &:hover {
      box-shadow: 5px 5px 5px rgba(92,71,128,.7);
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
    color: sandybrown;
    font-size: 1.2rem;
    padding: 2px;
    margin: 1px;
  }

</style>
