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
      team: ''
    }
  },
  methods: {
    submitForm: function () {
      const paste = Koffing.parse(this.textInput)
      this.team = paste.teams[0].pokemon
      this.$store.dispatch('updateTeam', this.team)
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
      background-color: #7D6B9B;
  }
  /* -- CONTAINER FOR TEXTAREA */
  .textarea-container {
    flex: 1 0;
  }
  /* -- TEXTAREA --*/
  .pastearea {
    border: 1px solid black; //remove later
    margin: 0;
    margin-top: .4rem;
    outline: 0 none;
    padding: 0;
    width: 100%;
    resize: none;
    height: 100%;
    box-sizing: border-box;
    background-color:#7D6B9B; //change later
  }

</style>
