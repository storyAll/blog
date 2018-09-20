import router from './router'
import {getToken} from './utils/auth'

const whiteList = ['/login', '/register', '/home']
router.beforeEach((to, from, next) => {
  if (whiteList.includes(to.path)) {
    next()
  } else {
    if (getToken()) {
      next()
    } else {
      next({path: '/login'})
    }
  }
})

router.afterEach(() => {
  // 路由跳转完成执行
})
