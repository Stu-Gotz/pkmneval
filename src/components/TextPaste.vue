<template>
  <form class="textarea-form" @submit.prevent="">
    <div class="buttons">
      <button
      class="btn btn-submit"
      @click="submitPaste"
      >Submit</button>
      <button
      class="btn btn-clear"
      @click="resetForm">Clear</button>
    </div>
    <div class="textarea-container">
      <textarea
      class="pastearea"
      placeholder="Paste a team to get started. Include '=== [gen8lc] ===' style at the top for your tier."
      v-model="textinput"></textarea>
    </div>
  </form>
</template>

<script>
import { Koffing } from 'koffing'
export default {
  name: 'TextPaste',
  data () {
    return {
      textinput: '',
      team: ''
    }
  },
  methods: {
    submitPaste: function () {
      const team = Koffing.parse(this.textinput)
      this.team = team.teams[0].pokemon
      console.log(this.team)
    },
    resetForm: function () {
      this.team = ''
      this.textinput = ''
      console.log(this.team)
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
    border: 1px solid black; //remove later
    margin: 0;
    margin-top: .4rem;
    outline: 0 none;
    padding: 0;
    width: 100%;
    resize: none;
    height: 100%;
    box-sizing: border-box;
    background-color: #bbb; //change later
  }

</style>
