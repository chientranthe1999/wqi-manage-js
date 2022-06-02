import request from '@/utils/request'

export function getCompanies() {
  return request.get('/companies')
}

export function getCars(data) {
  return request.get('/cars', { params: data })
}

export function getProviders(data) {
  return request.get('/providers', { params: data })
}

export function getParts(data) {
  return request.get('/parts', { params: data })
}
