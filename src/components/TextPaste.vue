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
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        const results = await response.json()
        this.dex = results
        this.$store.dispatch('createDex', this.dex)
        for (var i = 0; i < results.types.length; i++) {
          console.log(results.types[i].type.name)
          teamObj.type = []
          teamObj.type.push(results.types[i].type.name)
        }
        teamObj.id = results.id
        teamObj.sprite = results.sprites.front_default
        console.log(teamObj)
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
