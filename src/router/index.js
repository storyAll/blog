import Vue from 'vue'
import Router from 'vue-router'
// import Landing from 'views/landing/Landing'
import Home from 'views/home/Home'
import Blog from 'views/blog/Blog'
import Center from 'views/center/Center'
import Login from 'views/login/Login'
import Register from 'views/register/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/blog',
      component: Blog
    },
    {
      path: '/center',
      component: Center
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    }
  ]
})
