<template>
  <div class="navbar-top">
    <div class="side-nav-panel-left">
      <a href="#" @click="slide" class="side-nav-left"><i ref="menu" class="fa" :class="slideLeft?'fa-times':'fa-bars'"></i></a>
    </div>
    <div class="site-brand">
      <a href="index.html"><h1>燕蝉枫雪</h1></a>
    </div>
    <div class="side-nav-panel-right">
      <a href="" class="side-nav-right">
        <i class="fa" :class="isLogin?'fa-sign-out':''" aria-hidden="true" @click="clearData"></i>
      </a>
    </div>
  </div>
</template>
<script>

import {mapMutations, mapGetters} from 'vuex'

export default {
  data () {
    return {
    }
  },
  methods: {
    clearData: function () {
      this.logout()
      this.$router.push('/home')
    },
    slide: function () {
      this.setSlide(!this.slideLeft)
    },
    ...mapMutations({
      setSlide: 'UPDATE_SLIDE_LEFT',
      logout: 'LOGOUT'
    })
  },
  computed: {
    isLogin: function () {
      return this.user ? this.user.token : false
    },
    ...mapGetters([
      'slideLeft',
      'user'
    ])
  }
}
</script>

<style scoped lang="less">
  @font-size:28px;
  .navbar-top {
    background: #111;
    width: 100%;
    height: 8vh;
    padding: 0px 18px;
    border-bottom: 1px solid #111;
    top: 0;
    right: 0;
    left: 0;
    text-align: center;
    position: fixed;
    z-index: 9999;
    line-height: 8vh;
    .site-brand {
      text-align: center;
      display: inline-block;
      a h1 {
        font-size: 28px;
        font-weight: 700;
        color: #fff;
        line-height: 8vh;
        letter-spacing: 1px;
        /*padding-top: 2px;*/
        margin: 0;
      }
    }
  }
  .side-nav-panel-left {
    float: left;
    font-size: @font-size;
    .side-nav-left {
      font-size: @font-size;
      color: #313131;
    }
  }
  .side-nav-panel-right {
    float: right;
    font-size: @font-size;
  }
  .side-nav-left i,
  .side-nav-right i {
    font-size: 28px;
    color: #fff;
  }
</style>
