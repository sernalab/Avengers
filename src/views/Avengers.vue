<template>
  <div class="avengers">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>this is characters view</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import AvengersService from '@/services/AvengersService';

export default {
  name: 'avengers',
  async created() {
    try {
      const characters = await AvengersService.getCharacters();
      this.characters = characters;
      console.log(characters)
    } catch (e) {
      console.log(e);
    }
  },
};
</script>
