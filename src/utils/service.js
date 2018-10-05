import axios from 'axios'
import qs from 'qs'
import {Message, MessageBox} from 'element-ui'
import store from '../store'
const service = axios.create({
  baseURL: 'http://www.onlineshows.cn/blogBack/',
  timeout: 15000

})
service.defaults.transformRequest = [function (data) {
  return qs.stringify(data)
}]

service.interceptors.request.use()

service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code !== 200) {
      if (res.code === 4001) {
        MessageBox.confirm('用户名或密码错误，请重新登陆', '重新登陆', {
          confirmButtonText: '重新登陆',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          store.dispatch('FedLogOut').then(() => {
            location.reload()
          })
        })
      }
      if (res.code === 4002) {
        MessageBox.confirm('该用户名已存在，请重新注册！', '重新注册', {
          confirmButtonText: '重新注册',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          store.dispatch('FedLogOut').then(() => {
            location.reload()// 为了重新实例化vue-router对象 避免bug
          })
        })
      }
      return Promise.reject(new Error('error'))
    } else {
      return res
    }
  },
  error => {
    Message({
      message: error.message,
      customClass: 'message',
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  })

export default service
