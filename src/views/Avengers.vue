<template>
  <div class="container avengers">
    <div class="row flex-direction flex-column">
      <h1>TOP AVENGERS</h1>
      <Card />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AvengersService from '@/services/AvengersService';
import Card from '@/components/Card'

export default {
  name: 'avengers',
  components: {
    Card
  },
  async created() {
    try {
      const characters = await AvengersService.getCharacters();
      this.characters = characters;
      console.log(characters)
    } catch (e) {
      console.log(e);
    }
  }
};
</script>
