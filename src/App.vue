<template>
  <div id="app">
    <nav-top></nav-top>
    <nav-left></nav-left>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import NavTop from 'components/NavTop'
import NavLeft from 'components/NavLeft'
export default {
  name: 'App',
  components: {
    NavTop,
    NavLeft
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
ul li{
  list-style: none;
}
</style>
