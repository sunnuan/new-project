<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import headerF from './components/header'
import secondF from './page/second'
export default {
  name: 'App',
  components: {
    headerF,
    secondF
  }
}
</script>

<style>
  @import 'css/index.less';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
