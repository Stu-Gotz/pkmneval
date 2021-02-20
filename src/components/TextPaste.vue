<template>
  <div class="textarea-div">
    <div class="buttons">
      <a href="#" role="button" class="btn btn-submit">Submit</a>
      <a href="#" role="button" class="btn btn-clear">Clear</a>
    </div>
    <textarea class="pastearea"></textarea>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.pastearea {
  display: flex;
  flex-direction: column;
}
.buttons {
  display: flex;
  justify-content: space-evenly;
  margin-top: 0.4rem;
}
/* Hopefully this will give dynamic sizing */
.textarea-label {
  display: block;
}
/* .textarea-div {
      display: none;
      white-space: pre-wrap;
      word-wrap: break-word;
  } */
.textarea-div textarea {
  border: 1px solid black;
  margin: 0;
  margin-top: 0.4rem;
  outline: 0 none;
  padding: 0;
  width: 100%;
  resize: none;
  height: 100%;
  box-sizing: border-box;
  background-color: #bbb;
}
</style>
