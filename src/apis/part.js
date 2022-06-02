import request from '@/utils/request'

export function createPart(data) {
  return request.post('/parts', data)
}

export function searchPart(data) {
  return request.post('/parts/search', { params: data })
}
