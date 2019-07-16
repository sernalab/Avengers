<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <h1>this is home view</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import AvengersService from '@/services/AvengersService';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
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
