<template>
  <ul class="team-holder">
    <li
      class="card"
      v-for="(mon, index) in team"
      :key="index"
    >
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
        <div class="cardfront-text">
          {{ mon.name }}
        </div>
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
  </ul>
</template>

<script>
// import Card from './Card.vue'
export default {
  name: 'Cards',
  props: ['team'],
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
  /* -- TEAM CONTAINER -- */
  .team-holder {
    display: flex;
    justify-content: space-evenly;
    height: 100%;
    align-items: center;
    border: 1px solid black;
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
</style>
