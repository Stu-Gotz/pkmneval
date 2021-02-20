<template>
  <!-- <div class="main-top">
    <cards></cards>
  </div> -->
    <div class="maintop">
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
        <!-- back display of the card dynamically create the rest
        <div class="cardback">
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
        <!-- <li class="card">c2</li>
        <li class="card">c2</li>
        <li class="card">c2</li>
        <li class="card">c2</li>
        <li class="card">c2</li> -->
      </ul>
    </div>
    <div class="main-btm">
      <div class="display"></div>
    </div>
</template>

<script>
// import Cards from './Cards.vue'
export default {
//   Cards
}
</script>

<style lang="scss">
    .maintop {
    height: 50%;
    }
</style>
