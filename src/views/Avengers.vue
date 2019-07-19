<template>
  <div class="container avengers">
    <div class="row flex-direction flex-column">
      <h1>TOP AVENGERS</h1>
        <div class="slider d-flex flex-direction-row w-100">
          <Card class="slider__card" v-for="avenger in avengers" :key="avenger.id" :avenger="avenger"/>
        </div>
      <h1>ALL AVENGERS</h1>
        <Card />
      <h1>COMICS</h1>
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
  data:() => ({
    avengers: undefined
  }), 
  components: {
    Card
  },
  async created() {
    try {
      const avengers = await AvengersService.getCharacters();
      this.avengers = avengers;
    } catch (e) {
      console.log(e);
    }
  }
};
</script>
