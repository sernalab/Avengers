<template>
  <div id="app">
    <Menu />
    <router-view/>
  </div>
</template>

<script>
import Menu from '@/components/Menu/Menu'

export default {
  components: {
    Menu
  }
}
</script>


<style src="./assets/scss/styles.scss" lang="scss">

</style>
