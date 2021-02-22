<template>
  <!-- <home></home> -->
  <!-- <div class="main-content"> -->
    <form class="textarea-div">
        <div class="buttons">
          <a href="#" role="button" class="btn btn-submit">Submit</a>
          <a href="#" role="button" class="btn btn-clear">Clear</a>
        </div>
        <div class="textcontainer">
          <textarea class="pastearea"></textarea>
        </div>
      <!-- <div contenteditable="contenteditable" class=
      "pastearea"></div> -->
    </form>
    <div class="inner-content">
      <div class="main-top">
        <ul class="team-holder">
          <li class="card" id="card1">
            <div class="cardfront">
              <div class="cardfront-images">
                <div class="cardfront-icon">
                  <img
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
                    alt="ditto"
                  />
                </div>
                <div class="cardfront-item">
                  <img
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/ability-urge.png"
                    alt="metalpowder"
                  />
                </div>
              </div>
              <div class="cardfront-text">nature, evs and such</div>
            </div>
          </li>
          <!-- back display of the card dynamically create the rest -->
          <!-- <div class="cardback">
                            <div class="cardback-images">
                                <div class="cardback-icon">
                                    icon of the pokemon
                                </div>
                                <div class="cardback-item">
                                    held item image
                                </div>
                            </div>
                                <div class="cardback-text">
                                    nature, evs and such
                                </div>
                            </div> -->

          <li class="card">c2</li>
          <li class="card">c2</li>
          <li class="card">c2</li>
          <li class="card">c2</li>
          <li class="card">c2</li>
        </ul>
      </div>
      <div class="main-btm">
        <div class="display"></div>
      </div>
    </div>
    <div class="footer">footer things</div>
  <!-- </div> -->
</template>

<script>
// import Home from './views/Home.vue'
export default {
  components: {
    // Home
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
  form {
    height: 100%;
  }
  #app {
    display: grid;
    grid-template-columns: 30% auto;
    grid-template-rows: auto 1.5rem;
    background-color: #888;
    padding: 0 .4rem;
    height: 100%;
  }
  .main-content {
    display: grid;
    grid-template-columns: 30% auto;
    background-color: #888;
    // height: 100%;
    padding: 0 .4rem;
}

  /* -- CHILD CONTENT -- */
  .inner-content {
      display: flex;
      flex-direction: column;
      margin-left: 1rem;
  }
  .textarea-div {
    display: flex;
    flex-flow: column;
    height: 100%;
  }
  .footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
  }
  /* -- PASTE INPUT AREA -- */

  .buttons {
      display: flex;
      justify-content: space-evenly;
      margin-top: .4rem;
  }
  /* Hopefully this will give dynamic sizing */

  .textcontainer {
    flex: 1 0;
  }
  .pastearea{
    border: 1px solid black;
    margin: 0;
    margin-top: .4rem;
    outline: 0 none;
    padding: 0;
    width: 100%;
    resize: none;
    height: 100%;
    box-sizing: border-box;
    background-color: #bbb;
  }

  /* -- CARD DISPLAY SECTION -- */
  .main-top {
      height: 50%;
  }

  /* -- DISPLAY -- */
  /* Once I learn to D3, this will hopefully have usage stats trends and stuff
      for now, it will just do a team display, going try some fancy CSS if I can
      get some SVG magic going. */
  .main-btm {
      height: 50%;
      background-color: darkturquoise;
      opacity: .3;
  }

  /* -- TEAM CONTAINER -- */
  .team-holder {
      display: flex;
      justify-content: space-evenly;
      height: 100%;
      align-items: center;
  }

  /* -- CARD DISPLAY -- */
  .card {
      flex-basis: calc(100% / 6);
      text-align: center;
  }
  .cardfront {
      display: flex;
      flex-direction: column;
      align-content: stretch;
  }
  .cardfront-images {
      color: green;
      display: flex;
      justify-content: center;
  }
  .cardfront-item {
      color: orange;
      align-self: flex-end;
      margin-left: -30px;
  }
  .cardfront-text {
      color: brown;
  }

  /* -- BUTTON STYLING -- */

  .btn {
      padding: 1rem;
      font-size: 1rem;
      background-color: blanchedalmond;
      border-radius: 30px;
  }
</style>
