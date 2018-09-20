import Vue from 'vue'
import Vuex from 'vuex'

import * as getters from './getters'
import mutations from './mutations'
import user from './modules/user'
import state from './state'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  modules: {
    user
  },
  getters,
  mutations,
  state,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})

export default store
