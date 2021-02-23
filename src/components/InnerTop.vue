<template>
  <div class="inner-top">
    <ul v-if="team" class="team-holder">
      <li
        class="card"
        v-for="(mon, index) in team"
        :key="index"
      >
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
          <ul class="cardfront-text">
            {{ mon.name }} @ {{ mon.item }}
            <br>
            Nature: {{ mon.nature }}
            <br>
            <li
            class="cardfront-evs"
            v-for="(ev, index) in mon.evs"
            :key="index"
            >
              {{ index }}: {{ ev }}
            </li>
          </ul>
          <ul class="cardfront-moves">
            <li
            v-for="(move, index) in mon.moves"
            :key="index"
            class="move">
            - {{ move }}
            </li>
          </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'InnerTop',
  computed: {
    team: function () {
      return this.$store.state.team
    }
  }
}
</script>

<style lang="scss">
  /* -- CARD DISPLAY SECTION -- */
  .inner-top {
      height: 48%;
      background-color: #7D6B9B;
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

    display: flex;
    flex-direction: column;
    align-content: stretch;
    justify-content: space-evenly;
    height: 100%;

    border: 3px solid rgb(163, 163, 0);
    border-radius: 5px;

    margin: 3px;
  }
  .cardfront-images {
    color: green;
    display: flex;
    justify-content: center;
    -webkit-mask-image: url(../assets/bug.svg);
    mask-image: url(../assets/bug.svg);
    mask-size: cover;
    background-color: green;
  }
  .cardfront-item {
    color: orange;
    align-self: flex-end;
    margin-left: -30px;
  }
  .cardfront-text {
    color: brown;
  }
  .cardfront-evs {
    display: inline-block;
    margin-left: 4px;
  }
</style>
