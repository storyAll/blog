<template>
  <div ref="slideLeft" class="side-nav-panel-left nav-left nav-lef-default">
    <ul id="slide-out-left" class="side-nav side-nav-panel collapsible">
      <li class="profil">
        <img src="../assets/login.jpg" alt="">
        <h2>张冲</h2>
        <h6>前端开发</h6>
      </li>
      <router-link tag="li" to="/home">
        <a>主页</a>
      </router-link>
      <router-link tag="li" to="/blog">
        <a>博客</a>
      </router-link>
      <router-link tag="li" to="/center">
        <a>个人中心</a>
      </router-link>
      <router-link tag="li" to="/contact">
        <a>联系我</a>
      </router-link>
      <router-link tag="li" to="/login">
        <a>登录</a>
      </router-link>
      <router-link tag="li" to="/register">
        <a>注册</a>
      </router-link>
    </ul>
  </div>
</template>

<script>
import {setClass} from '../common/dom'
import {mapGetters} from 'vuex'

export default {
  data () {
    return {
    }
  },
  // 计算属性函数获得状态
  computed: {
    ...mapGetters([
      'slideLeft'
    ])
  },
  // 监听slideLeft值改变然后绑定处理函数
  watch: {
    slideLeft: {
      deep: true,
      handler: function () {
        let el = this.$refs.slideLeft
        if (this.slideLeft) {
          setClass('nav-left-show', el)
        } else {
          setClass('nav-left-hide', el)
        }
      }
    }
  }
}
</script>

<style scoped lang="less">
  .nav-left{
    left: -260px;
    position: absolute;
    z-index: 999;
    top:6vh;
  }
  .nav-lef-default{
    left:-260px;
  }
  .nav-left-show{
    animation:slideInLeft .5s linear;
    left: 0;
  }
  @keyframes slideInLeft {
    0%{left: -260px}
    50%{left:-130px}
    100%{left:0px}
  }
  .nav-left-hide{
    animation:slideOutLeft .5s linear;
    left: -260px;
  }
  @keyframes slideOutLeft {
    0%{left:0px}
    50%{left:-130px}
    100%{left: -260px}
  }
  .side-nav {
     width: 260px;
     margin: 0;
     padding:0;
      height: 94vh;
   }

  .side-nav a {
    font-size: 14px;
    height: 45px;
    padding: 0 16px;
  }

  .side-nav-panel-left {
    float: left;
    font-size: 28px;
  }

  .side-nav-panel-right {
    float: right;
    font-size: 28px;
  }

  .side-nav-left {
    font-size: 28px;
    color: #313131;
  }

  .side-nav-left i,
  .side-nav-right i {
    font-size: 20px;
    color: #fff;
  }

  .side-nav-panel {
    text-align: left;
    background: #111;
  }

  .side-nav-panel .profil {
    padding: 40px 0 28px 0;
    text-align: center;
    border-top: 0;
    border-bottom: 1px solid #171717;
  }

  .side-nav-panel .profil img {
    border-radius: 50%;
    width: 80px;
    height: 80px;
  }

  .side-nav-panel .profil h2 {
    color: #fff;
    font-size: 15px;
    margin-bottom: 5px;
    cursor: default;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .side-nav-panel .profil h6 {
    color: #fff;
    font-size: 14px;
  }

  .side-nav-panel li a {
    color: #fff;
    text-decoration: none;
    line-height: 40px;
  }
  .side-nav-panel li {
    text-align: center;
  }
  .side-nav-panel li:last-child {
    border-bottom: 0px solid #f5f5f5;
    margin-bottom: 80px;
  }

  .side-nav-panel .li-top {
    padding-top: 10px;
  }

  .side-nav-panel li a:hover {
    background: transparent;
  }

  .side-nav-panel li a i {
    margin: 0 16px 0 0;
    font-size: 18px;
    color: #fff;
    line-height: 45px;
  }

  .side-nav-panel-left .collapsible {
    border: 0;
    background: #111;
  }
  .router-link-active{
    background-color: #2aabd2;
  }
</style>
