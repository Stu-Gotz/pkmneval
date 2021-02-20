<template>
  <!-- <div class="main-content"> -->
    <div class="textarea-div">
      <div class="buttons">
        <a href="#" role="button" class="btn btn-submit">Submit</a>
        <a href="#" role="button" class="btn btn-clear">Clear</a>
      </div>
      <p contenteditable="contenteditable" class="pastearea"></p>
    </div>
      <!-- <textarea class="pastearea"></textarea> -->

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
// @ is an alias to /src
// import TextPaste from '../components/TextPaste.vue'
// import MainTop from '../components/MainTop'
// import MainBottom from '../components/MainBottom.vue'
export default {
  name: 'Home',
  components: {
    // TextPaste,
    // MainTop,
    // MainBottom
  }
}
</script>

<style lang="scss" scoped>
/* ## MAIN COMPONENTS ## */
/* -- PARENT CONTENT -- */
.main-content {
    display: grid;
    grid-template-columns: 30% auto;
    grid-template-rows: auto 1.5rem;
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

/* -- PASTE INPUT AREA -- */

.pastearea {
    display: flex;
    flex-direction: column;
    background-color: chocolate;
}

.buttons {
    display: flex;
    justify-content: space-evenly;
    margin-top: .4rem;
}
/* Hopefully this will give dynamic sizing */
.textarea-label {
    display: block;
}

.textarea-div textarea{
  border: 1px solid black;
  margin: 0;
  margin-top: .4rem;
  outline: 0 none;
  padding: 0;
  width: 100%;
  resize: none;
  // height: 100%;
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
