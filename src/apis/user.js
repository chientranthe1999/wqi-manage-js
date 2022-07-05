import request from '@/utils/request'

export function getUsers(params) {
  return request.get('/users', { params })
}

export function register(data) {
  return request.post('/register', data)
}

export function disableUser(id) {
  return request.put('/users/disable/' + id)
}

export function activeUser(id) {
  return request.put('/users/active/' + id)
}

export function updateUser(id, data) {
  return request.put('/users/update/' + id, data)
}
