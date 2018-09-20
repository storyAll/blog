// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/bootstrap.css'
import './assets/font-awesome/css/font-awesome.min.css'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import store from './store/index'
import * as api from './utils/request'

import axios from 'axios'
import './permissions'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
Vue.config.productionTip = false
Vue.prototype.$get = api.get
Vue.prototype.$post = api.post
Vue.prototype.$axios = axios
fastclick.attach(document.body)
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
