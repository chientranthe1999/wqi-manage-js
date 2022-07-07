import request from '@/utils/request'

export function dashboard() {
  return request.get('/dashboard')
}

export function getInfors(params) {
  return request.get('/infors', { params })
}
