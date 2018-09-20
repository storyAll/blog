import {login} from '@/api/login'
import {setToken} from '../../utils/auth'
import * as types from '../types'

const user = {
  state: {
    username: '',
    user: {},
    token: ''
  },
  mutations: {
    [types.SET_USER] (state, res) {
      // debugger
      state.user = res.data
      setToken(res)
    },
    [types.SET_USERNAME] (state, username) {
      state.username = username
    },
    [types.SET_TOKEN] (state, token) {
      state.token = token
      setToken(token)
    }
  },
  actions: {
    // 登录
    Login ({commit}, user) {
      const username = user.username
      const password = user.password
      return new Promise((resolve, reject) => {
        login(username, password)
          .then(res => {
            console.log(res)
            const data = res.data
            commit('SET_USERNAME', data.username)
            commit('SET_TOKEN', res.token)
            commit('SET_USER', res)
            // setToken(res)
            resolve(res)
          })
          .catch(err => {
            console.log('err')
            reject(err)
          })
      })
    }
  }
}

export default user
