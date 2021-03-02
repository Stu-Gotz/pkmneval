<template>
  <div class="inner-top">
    <ul v-if="team" class="team-holder">
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
  .cardfront-images {
    display: flex;
    justify-content: center;
    margin: 4px;
    background-size: contain;
    background-repeat: no-repeat;
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
  .move:hover {
    color: #222
  }
  .cardfront-moves {
    text-shadow: 0px 0px 1px #000;
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
    color: #826e63;
  }
  .steel {
    color: #969696;
  }
  .water {
    color: #3030ff;
  }
</style>
