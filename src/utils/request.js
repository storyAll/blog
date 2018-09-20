import request from './service'

export function get (url, data) {
  // console.log(url + data)
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)
  return request.get(url)
}
export function post (url, data) {
  return request.post(url, data)
}

function param (data) {
  let url = ''
  for (var k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    url += '&' + k + '=' + encodeURIComponent(value)
  }
  return url ? url.substring(1) : ''
}
