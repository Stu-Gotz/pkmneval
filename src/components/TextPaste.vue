<template>
  <form
  class="textarea-form"
  @submit.prevent=""
  >
    <div class="buttons">
      <button
      class="btn btn-submit"
      @click="submitForm"
      >Submit</button>
      <button
      class="btn btn-clear"
      @click="resetForm">Clear</button>
    </div>
    <div class="textarea-container">
      <textarea
      class="pastearea"
      placeholder="Paste a team to get started. Include '=== [gen8lc] ===' style at the top for your tier."
      v-model="textInput"></textarea>

    </div>
  </form>
</template>

<script>
import { Koffing } from 'koffing'

export default {
  name: 'TextPaste',
  data () {
    return {
      textInput: '',
      team: '',
      dex: []
    }
  },
  methods: {
    pokedex: async function (pokemon, teamObj) {
      try {
        const pokemonQuery = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        const results = await pokemonQuery.json()
        this.dex = results
        // create a store.state.dex, future planned use
        this.$store.dispatch('createDex', this.dex)

        // Store the data for the types
        teamObj.type = []
        for (var t = 0; t < results.types.length; t++) {
          teamObj.type.push(results.types[t].type.name)
        }
        teamObj.id = results.id
        teamObj.sprite = results.sprites.front_default
        // Get the type for the moves
        for (var m in teamObj.moves) {
          const moveQuery = await fetch(`https://pokeapi.co/api/v2/move/${teamObj.moves[m].toLowerCase().replace(' ', '-')}/`)
          const results = await moveQuery.json()
          teamObj.moves[m] = {
            name: teamObj.moves[m],
            type: results.type.name,
            priority: results.priority
          }
        }
        console.log(teamObj)
        // create the global store.state object
        this.$store.dispatch('updateTeam', this.team)
        return this.dex
      } catch (error) {
        console.log(error)
      }
    },
    submitForm: function () {
      const paste = Koffing.parse(this.textInput)
      this.team = paste.teams[0].pokemon
      for (let i = 0; i < this.team.length; i++) {
        const pokemon = this.team[i].name.toLowerCase()
        this.pokedex(pokemon, this.team[i])
      }
      return this.team
    },
    resetForm: function () {
      this.textInput = ''
      this.$store.dispatch('clearTeam')
    }
  }
}
</script>

<style lang="scss">
  /* --SIDEBAR / PASTE AREA PORTION OF PAGE --*/
  .textarea-form {
    display: flex;
    flex-flow: column;
    height: 100%;
  }
  /* -- BUTTON CONTAINER ELEMENT --*/
  .buttons {
      display: flex;
      justify-content: space-evenly;
      margin-top: .4rem;
  }
  /* -- CONTAINER FOR TEXTAREA */
  .textarea-container {
    flex: 1 0;
  }
  /* -- TEXTAREA --*/
  .pastearea {
    margin: 0 5px;
    margin-top: .4rem;
    outline: 0 none;
    padding: 0;
    width: 100%;
    resize: none;
    height: 100%;
    box-sizing: border-box;
    background-color:#a79bbc;
    border: none;
    border-radius: 2px;
    box-shadow: 2px 2px 3px rgba(0,0,0,.3);

    &::-webkit-scrollbar {
      width: 12px;
      background: #5c4780;
      border-radius: 2px;
      &-button {
          background: #432e68;
      }
      &-thumb {
        background: #7d6b9b;
        border: 1px solid #192650;
        cursor: pointer;
      }
    }
  }
</style>
