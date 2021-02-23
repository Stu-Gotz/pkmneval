<template>
  <div class="cardfront">
    <div class="cardfront-images">
      <div class="cardfront-icon">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" alt="ditto">
      </div>
      <div class="cardfront-item">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/ability-urge.png" alt="metalpowder">
      </div>
    </div>
    <div class="cardfront-text">
      nature, evs and such
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardFront',
  computed: {
    
  }
}
</script>

<style lang="scss">
  .cardfront {
      display: flex;
      flex-direction: column;
      align-content: stretch;
  }
  .cardfront-images {
      color: green;
      display: flex;
      justify-content: center;
  }
  .cardfront-item {
      color: orange;
      align-self: flex-end;
  }
  .cardfront-text {
      color: brown;
  }
</style>
