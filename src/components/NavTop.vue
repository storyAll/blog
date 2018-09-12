<template>
  <div class="navbar-top">
    <div class="side-nav-panel-left">
      <a href="#" @click="slideLeft" class="side-nav-left"><i class="fa fa-bars"></i></a>
    </div>
    <div class="site-brand">
      <a href="index.html"><h1>燕蝉枫雪</h1></a>
    </div>
    <div class="side-nav-panel-right">
      <a href="" class="side-nav-right"><i class="fa fa-envelope"></i></a>
    </div>
  </div>
</template>
<script>

import {mapMutations} from 'vuex'

export default {
  data () {
    return {
      status: false
    }
  },
  methods: {
    slideLeft: function () {
      this.status ? this.status = false : this.status = true
      this.setSlide(this.status)
    },
    ...mapMutations({
      setSlide: 'UPDATE_SLIDE_LEFT'
    })
  }
}
</script>

<style scoped lang="less">
  @font-size:28px;
  .navbar-top {
    background: #111;
    width: 100%;
    height: 6vh;
    padding: 0px 18px;
    border-bottom: 1px solid #111;
    top: 0;
    right: 0;
    left: 0;
    text-align: center;
    position: fixed;
    z-index: 99;
    .site-brand {
      text-align: center;
      display: inline-block;
      a h1 {
        font-size: 21px;
        font-weight: 700;
        line-height: 6vh;
        color: #fff;
        letter-spacing: 1px;
        padding-top: 2px;
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
    font-size: 20px;
    color: #fff;
  }
</style>
