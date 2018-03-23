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
    name: "about",
    data () {
      return {
        home_bg: {
          backgroundImage: "url(" + require("../assets/about.jpg") + ")",
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
