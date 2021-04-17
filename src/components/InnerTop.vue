<template>
  <div class="inner-top">
    <ul v-if="team.length" class="team-holder">
      <li
        class="card"
        v-for="(mon, index) in team"
        :key="index"
      >
          <div class="cardfront-images"
          :style="typeStyle(mon.type)"
          >
            <div class="cardfront-icon">
              <img class="pokemon"
                :src=mon.sprite
                :alt="mon.name"
              />
            </div>
            <div class="cardfront-item">
              <img class="item"
                :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${mon.item.toLowerCase().replace(' ', '-')}.png`"
                :alt="mon.item"
              />
            </div>
          </div>
          <ul class="cardfront-text">
            <p v-show="mon.level">Level: {{ mon.level }}</p>
            {{ mon.name }} @ {{ mon.item }}
            <br>
            <strong>Nature:</strong> {{ mon.nature }}
            <br>
            <strong>Ability:</strong> {{ mon.ability }}
            <br>
            <li
            class="cardfront-evs"
            v-for="(ev, index) in mon.evs"
            :key="index"
            >
              <strong>{{ index.toUpperCase() }}</strong>: {{ ev }}
            </li>
          </ul>
          <ul class="cardfront-moves">
            <li
            v-for="(move, index) in mon.moves"
            :key="index"
            :class="`${move.type}`"
            class="move">
            {{ move.name }}
            </li>
          </ul>
      </li>
    </ul>
    <div v-else class="welcome" >
      <img id="letter1" src="../assets/unowns/unown-h.png" alt="unown-h">
      <img id="letter2" src="../assets/unowns/unown-e.png" alt="unown-e">
      <img id="letter3" src="../assets/unowns/unown-l.png" alt="unown-l">
      <img id="letter4" src="../assets/unowns/unown-l.png" alt="unown-l">
      <img id="letter5" src="../assets/unowns/unown-o.png" alt="unown-o">
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'InnerTop',
  computed: {
    ...mapGetters({
      team: 'hasTeam'
    })
  },
  methods: {
    typeStyle: function (types) {
      const backgroundImageUrls = []
      for (const i in types) {
        backgroundImageUrls.push('url(https://raw.githubusercontent.com/Stu-Gotz/pkmneval/main/src/assets/' + types[i] + '.svg)')
      }
      var backgroundPosition = ''

      if (backgroundImageUrls.length !== 1) {
        backgroundPosition = 'left, right'
      } else if (backgroundImageUrls.length === 1) {
        backgroundPosition = 'center'
      }
      return {
        backgroundImage: backgroundImageUrls.join(', '),
        backgroundPosition
      }
    }
  }
}
</script>

<style lang="scss" scoped>
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
  /* -- WELCOME PLACEHOLDER --*/
  .welcome {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  /* -- CARD DISPLAY -- */
  .card {
    flex-basis: calc(100% / 6);
    text-align: center;
    font-size: 1.4rem;
    display: flex;
    flex-direction: column;
    align-content: stretch;
    justify-content: space-evenly;
    height: 100%;

    border: 3px solid rgb(163, 163, 0);
    border-radius: 5px;
    background: rgba(155, 162, 187, .5);
    box-shadow: 3px 3px 2px rgba(0,0,0,.3);
    margin: 3px;

    &:hover{
      transform: scale(1.05);
      box-shadow: 0px 0px 15px rgba(0,0,0,.5);
      z-index: 10;
      overflow: visible;
    }
  }
  /* -- CARD IMAGE CONTAINER */
  .cardfront-images {
    display: flex;
    justify-content: center;
    margin: 4px;
    background-size: contain;
    background-repeat: no-repeat;
  }
  /* -- CARD ITEM ELEMENT --*/
  .cardfront-item {
    align-self: flex-end;
    margin-left: -30px;
    margin-bottom: 10px;
  }
  /* -- CARD TEXT CONTAINER-- */
  .cardfront-text {
    color: #444;
  }
  /* -- CARD EV DISPLAY ELEMENT -- */
  .cardfront-evs {
    display: inline-block;
    margin-left: 4px;
  }
  /* -- CARD MOVE DISPLAY -- */
  .cardfront-moves {
    text-shadow: 0px 0px 1px #000;
  }
  /* -- EFFECTS -- */
  .move:hover {
    color: #222;
    cursor: pointer;
  }
  /* -- WELCOME ELEMENTS -- */
  #letter1 {
    animation: bounce 4s ease-in-out infinite;
  }
  #letter2 {
    animation: bounce 6s ease-in-out infinite;
  }
  #letter3 {
    animation: bounce 8s ease-in-out infinite;
  }
  #letter4 {
    animation: bounce 5s ease-in-out infinite;
  }
  #letter5 {
    animation: bounce 7s ease-in-out infinite;
  }
  /* -- COLOR VARIABLES FOR MOVES -- */ //should probably convert to variables later
  .bug {
    color: #8fa832;
  }
  .dark {
    color: #444;
  }
.dragon {
    color: #3238a8;
  }
  .electric {
    color: #a8ab00;
  }
  .fairy {
    color: #f9a3ff;
  }
  .fighting {
    color: #913d00;
  }
  .fire {
    color: #f06500;
  }
  .flying {
    color: #babcff;
  }
  .ghost {
    color: #500091;
  }
  .grass {
    color: #009113;
  }
  .ground {
    color: #694b30;
  }
  .ice {
    color: #9cf7ff;
  }
  .normal {
    color: #bfbfbf;
  }
  .poison {
    color: #bc00f5;
  }
  .psychic {
    color: #a144bd;
  }
  .rock {
    color: #5e4e46;
  }
  .steel {
    color: #969696;
  }
  .water {
    color: #3030ff;
  }
  /* -- KEYFRAMES -- */
  /* Bounce Animation for unowns */
  @keyframes bounce {
    0% {
      transform: translateY(5px);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(5px);
    }
  }
</style>
