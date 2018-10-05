<template>
  <div id="app" >
    <nav-top></nav-top>
    <nav-left></nav-left>
    <keep-alive @click="slide">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import NavTop from 'components/NavTop'
import NavLeft from 'components/NavLeft'
import {mapMutations} from 'vuex'
window.addEventListener('beforeunload', (res) => {
  sessionStorage.setItem('store', JSON.stringify(this.$store.state))
})
export default {
  name: 'App',
  created () {
    if (sessionStorage.getItem('store')) {
      this.$store.replaceState(Object.assign({},
        this.$store.state,
        JSON.parse(sessionStorage.getItem('store'))
      ))
    }
  },
  components: {
    NavTop,
    NavLeft
  },
  methods: {
    slide: function () {
      console.log(0)
      this.slideLeft(false)
    },
    ...mapMutations({
      slideLeft: 'UPDATE_SLIDE_LEFT'
    })
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
}
ul li{
  list-style: none;
}
</style>
