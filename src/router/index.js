import Vue from 'vue'
import Router from 'vue-router'
// import Landing from 'views/landing/Landing'
import Login from 'views/login/Login'
import Register from 'views/register/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
