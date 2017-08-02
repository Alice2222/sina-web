<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <i class="material-icons">face</i> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
@import './plugins/font-awsome/css/font-awesome.min.css';
@import './style/animate.css';
@import './style/common.css';


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
</style>
<style lang='scss'>
@import './style/common.scss'
</style>
