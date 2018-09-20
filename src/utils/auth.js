const TOKEN = 'token'
const USER = 'user'
export function setToken (res) {
  sessionStorage.setItem(TOKEN, res.token)
  sessionStorage.setItem(USER, JSON.stringify(res.data))
}
export function getToken () {
  return sessionStorage.getItem(TOKEN)
}

export function removeToken () {
  sessionStorage.removeItem(TOKEN)
}
