<template>
  <div class="inner-top">
    <ul v-if="team" class="team-holder">
      <li
        class="card"
        v-for="(mon, index) in team"
        :key="index"
      >
          <div class="cardfront-images"> <!-- logic for if pokmeon has 2 types or 1 for bg, set by type -->
            <div class="cardfront-icon">
              <img class="pokemon"
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
                alt="pikachu"
              />
            </div>
            <div class="cardfront-item">
              <img class="item"
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/ability-urge.png"
                alt="metalpowder"
              />
            </div>
          </div>
          <ul class="cardfront-text">
            <p v-show="mon.level">Level: {{ mon.level }}</p>
            {{ mon.name }} @ {{ mon.item }}
            <br>
            <strong>Nature:</strong> {{ mon.nature }}
            <br>
            <li
            class="cardfront-evs"
            v-for="(ev, index) in mon.evs"
            :key="index"
            >
              <strong>{{ index }}</strong>: {{ ev }}
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
    background: #ddd;
    box-shadow: 3px 3px rgba(0,0,0,.2);
    margin: 3px;

    z-index: 999;
    &:hover {
      transform: scale(1.05)
    }
  }
  .cardfront-images {
    display: flex;
    justify-content: center;

    background: url(../assets/water.svg), url(../assets/steel.svg);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: left, right;
    //if one type use background-position: center;
  }
  .cardfront-item {
    align-self: flex-end;
    margin-left: -30px;
    margin-bottom: 10px;
  }
  .cardfront-text {
    color: #444;
  }
  .cardfront-evs {
    display: inline-block;
    margin-left: 4px;
  }
  .cardfront-moves {
    color: #444;
  }
</style>
