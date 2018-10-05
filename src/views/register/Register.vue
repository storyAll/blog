<template>
  <div class="pages">
    <div class="container">
      <div class="pages-head">
        <h3>注册</h3>
      </div>
      <div class="register">
        <div class="row">
          <form class="col s12">
            <div class="input-field">
              <input type="text" class="validate" v-model="username" placeholder="用户名" required>
            </div>
            <div class="input-field">
              <input type="email" v-model="email" placeholder="邮箱" class="validate" required>
            </div>
            <div class="input-field">
              <input type="password" v-model="password" placeholder="密码" class="validate" required>
            </div>
            <div class="input-field">
              <input type="password" v-model="repeat" placeholder="确认密码" class="validate" required>
            </div>
            <div class="btn btn-danger" @click="addUser">注册</div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {MessageBox} from 'element-ui'
export default {
  name: 'Register',
  data () {
    return {
      username: '',
      email: '',
      password: '',
      repeat: ''
    }
  },
  methods: {
    addUser: function () {
      this.$post('user/addUser', {
        'username': this.username,
        'email': this.email,
        'password': this.password
      }).then(res => {
        if (res.code === 200) {
          MessageBox.alert('注册成功请登录！')
          this.$router.push('/login')
        } else {
          MessageBox.alert('注册失败请重新注册！')
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped lang="less">
  @font-color:#000;
  @width:60%;
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
        color: @font-color;
      }
      .register{
        .input-field{
          margin: 30px 0;
        }
        input.validate{
          height: 35px;
          width: @width;
          padding: 0 10px;
        }
        a,label{
          color: @font-color;
        }
        .btn{
          width: @width;
        }
        .remember{
          position: relative;
          top:5px;
        }
        .rf{
          display: inline-block;
          width: @width;
          /*line-height: 30px;*/
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
