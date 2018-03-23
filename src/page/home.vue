<template>
  <div class="bg" :style="home_bg">
    <div class="home_backg">
      <headerF></headerF>

    </div>
  </div>


</template>

<script>
  import headerF from '../components/header'
  export default {
    name: "home",
    data () {
      return {
        home_bg: {
          backgroundImage: "url(" + require("../assets/home.jpg") + ")",
        }
      }
    },
    components: {
      headerF
    }
  }
</script>

<style scoped>

</style>
