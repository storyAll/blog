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
          <form class="col s12">
            <div class="input-field">
              <input type="text" class="validate" placeholder="用户">
            </div>
            <div class="input-field">
              <input type="password" class="validate" placeholder="密码">
            </div>
            <div class="input-field">
                <div class="rf">
                  <input type="checkbox" class="remember" id="remember"><label for="remember">记住密码</label>
                  <a class="forget" href="javascript:void 0">忘记密码 ?</a>
                </div>
            </div>
            <a href="javascript:void 0" class="btn btn-success">登录</a>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style scoped lang="less">
  @width:60%;
  .pages{
    width: 100%;
    height: 100%;
    position: absolute;
    margin: 0 auto;
    padding: 8vh 0;
    /*background: url("../../assets/login.jpg") no-repeat;*/
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
