<template>
  <div class="pages ">
    <div class="container">
      <div class="pages-head">
        <h3>
          登录
        </h3>
      </div>
      <div class="login">
        <div class="row">
          <form class="col s12" :model="userInfo">
            <div class="input-field">
              <input type="text" class="validate" v-model="userInfo.username" placeholder="用户">
            </div>
            <div class="input-field">
              <input type="password" class="validate" v-model="userInfo.password" placeholder="密码">
            </div>
            <div class="input-field">
                <div class="rf">
                  <input type="checkbox" v-model="userInfo.remember" class="remember" id="remember"><label for="remember">记住密码</label>
                  <a class="forget" href="javascript:void 0">忘记密码 ?</a>
                </div>
            </div>
            <a href="javascript:void 0" @click="login" class="btn btn-success">登录</a>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userInfo: {
        username: '',
        password: '',
        remember: false
      }
    }
  },
  created () {
    this.initUserInfo()
  },
  methods: {
    initUserInfo: function () {
      // debugger
      if (localStorage.remember === 'true') {
        this.userInfo.username = localStorage.username
        this.userInfo.password = localStorage.password
        this.userInfo.remember = localStorage.remember
      } else {
        this.userInfo.username = ''
        this.userInfo.password = ''
        this.userInfo.remember = false
        localStorage.removeItem('username')
        localStorage.removeItem('password')
        localStorage.removeItem('remember')
      }
    },
    getRemember: function () {
      if (!window.localStorage) {
        alert('浏览器不支持localStorage')
      } else {
        return localStorage.getItem('user')
      }
    },
    rememberPassword: function () {
      localStorage.setItem('username', this.userInfo.username)
      localStorage.setItem('password', this.userInfo.password)
      localStorage.setItem('remember', this.userInfo.remember)
    },
    login: function () {
      if (!window.localStorage) {
        alert('浏览器不支持localStorage')
      } else {
        this.rememberPassword()
      }
      this.$store.dispatch('Login', this.userInfo)
        .then(res => {
          this.$router.push({path: '/'})
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped lang="less">
  @width:60%;
  .message{
    margin-top: 8vh;
  }
  .pages{
    width: 100%;
    height: 100%;
    position: absolute;
    margin: 0 auto;
    padding: 8vh 0;
    background-size: cover;
    filter: blur(0px);
    .container{
      margin-top: 60px;
      opacity: 1;
      h3{
        color: #111;
      }
      .login{
        .input-field{
          margin: 30px 0;
        }
        input.validate{
          height: 35px;
          width: @width;
          padding: 0 10px;
        }
        .btn{
          width: @width;
        }
        .remember{
          position: relative;
         margin-right: 5px;
        }
        .rf{
          display: inline-block;
          width: @width;
          a,label{
            color: #111;
            font-weight: normal;
          }
          input,label{
            float: left;
          }
          a{
            float: right;
          }
        }
      }
    }
  }
</style>
