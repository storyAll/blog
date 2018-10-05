// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/bootstrap.css'
import './assets/font-awesome/css/font-awesome.min.css'
import VueTouch from 'vue-touch'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import store from './store/index'
import * as api from './utils/request'
import VueQuillEditor from 'vue-quill-editor'
import 'babel-polyfill'
// require styles 引入样式

import axios from 'axios'
import './permissions'

Vue.config.productionTip = false
Vue.prototype.$get = api.get
Vue.prototype.$post = api.post
Vue.prototype.$axios = axios
fastclick.attach(document.body)
Vue.use(VueTouch, {name: 'v-touch'})
Vue.use(ElementUI)
Vue.use(VueQuillEditor)
var locationUrl = location.href
if (locationUrl.indexOf('www.onlineshows.com') === -1) {
  if (locationUrl.indexOf('onlineshows.com') !== -1) {
    locationUrl = locationUrl.replace('onlineshows.com', 'www.onlineshows.com')
    location.href = locationUrl
  }
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
