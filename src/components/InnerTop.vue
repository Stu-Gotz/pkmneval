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
            <strong>Ability:</strong> {{ mon.ability }}
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
import { mapGetters } from 'vuex'

export default {
  name: 'InnerTop',
  computed: {
    // typeStyling: function (types) {
    //   const backgroundImageUrls = types.map(entry => `url(../assets/${types.type.name.toString()}.svg`)
    //   console.log(backgroundImageUrls)
    //   let backgroundPosition = 'center'

    //   if (backgroundImageUrls.length > 1) {
    //     backgroundPosition = 'left right'
    //   }

    //   return {
    //     backgroundImage: backgroundImageUrls.join(','),
    //     backgroundPosition
    //   }
    // },
    ...mapGetters({
      team: 'hasTeam'
    })
  },
  methods: {
    typeStyle: function (types) {
      console.log(types)
      const backgroundImageUrls = []
      for (const i in types) {
        backgroundImageUrls.push('url(https://raw.githubusercontent.com/Stu-Gotz/pkmneval/main/src/assets/' + types[i] + '.svg)')
      }
      // const backgroundImageUrls = types.map((entry, i) => 'url(../assets/' + `${entry.types[i]}` + '.svg)')
      var backgroundPosition = ''

      if (backgroundImageUrls.length !== 1) {
        console.log(backgroundImageUrls.length)
        backgroundPosition = 'left, right'
      } else if (backgroundImageUrls.length === 1) {
        console.log(backgroundImageUrls.length)
        backgroundPosition = 'center'
      }
      console.log(backgroundImageUrls)
      return {
        backgroundImage: backgroundImageUrls.join(', '),
        backgroundPosition
      }
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
    box-shadow: 3px 3px 2px rgba(0,0,0,.4);
    margin: 3px;

    z-index: 999;
    &:hover{
      transform: scale(1.05);
      box-shadow: 5px 8px 8px rgba(0,0,0,.3);
      z-index: 10;
    }
  }
  .cardfront-images {
    display: flex;
    justify-content: center;
    margin: 4px;
    // background: url(../assets/dark.svg), url(../assets/steel.svg);
    background-size: contain;
    background-repeat: no-repeat;
    //background-position: left, right;
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
