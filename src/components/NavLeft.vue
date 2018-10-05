<template>
  <div @wheel.prevent>
    <div :class="slideLeft? 'modelBox': ''" @click="slide"></div>
    <v-touch @swipeleft="slide" ref="slideLeft" class="side-nav-panel-left nav-left"
         :class="slideLeft==null?'':slideLeft?'nav-left-show':'nav-left-hide'">
      <ul @click="slide" id="slide-out-left" class="side-nav side-nav-panel collapsible">
        <li class="profil">
          <img src="../assets/head.jpg" alt="">
          <h2>{{getUsername}}</h2>
          <h6>{{getPosition}}</h6>
        </li>
        <router-link tag="li" to="/home">
          <a><i class="fa fa-home"></i>主页</a>
        </router-link>
        <router-link tag="li" to="/blog">
          <a><i class="fa fa-bold"></i>博客</a>
        </router-link>
        <router-link tag="li" to="/center">
          <a><i class="fa fa-user"></i>个人中心</a>
        </router-link>
        <router-link tag="li" to="/login" :class="isLogin?'hide' : '' ">
          <a><i class="fa fa-sign-in"></i>登录</a>
        </router-link>
        <router-link tag="li" to="/register" :class="isLogin?'hide' : '' ">
          <a><i class="fa fa-user-plus"></i>注册</a>
        </router-link>
      </ul>
    </v-touch>
  </div>
</template>

<script>
import {mapMutations, mapGetters} from 'vuex'

export default {
  data () {
    return {
      // uname: sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')).username : '您未登录',
      // postion: sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')).job : ''
    }
  },
  created () {
  },
  methods: {
    slide: function () {
      this.setSlide(false)
    },
    ...mapMutations({
      setSlide: 'UPDATE_SLIDE_LEFT'
    })
  },
  // 计算属性函数获得状态
  computed: {
    isLogin: function () {
      return this.user ? this.user.token : false
    },
    getUsername: function () {
      if (this.user.token) {
        return sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')).username : '您未登录'
      } else {
        return ''
      }
    },
    getPosition: function () {
      if (this.user.token) {
        return sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')).job : ''
      } else {
        return ''
      }
    },
    ...mapGetters([
      'slideLeft',
      'user'
    ])
  }
}
</script>

<style scoped lang="less">
  .nav-left{
    position: absolute;
    z-index: 999;
    top:8vh;
    left:-260px;
  }
  .modelBox{
    background-color: rgba(0, 0, 0, 0.47);
    width: 100%;
    height: 92vh;
    position: absolute;
    opacity: .4;
    z-index: 10;
  }
  .nav-left-show{
    animation:slideInLeft .3s linear;
    left: 0;
  }
  @keyframes slideInLeft {
    0%{left: -260px}
    50%{left:-130px}
    100%{left:0px}
  }
  .nav-left-hide{
    animation:slideOutLeft .3s linear;
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
      height: 92vh;
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
    letter-spacing: 1px;
  }

  .side-nav-panel .profil h6 {
    color: #fff;
    font-size: 14px;
  }

  .side-nav-panel li a {
    display: inline-block;
    width: 120px;
    text-align: left;
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
