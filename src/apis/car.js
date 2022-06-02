import request from '@/utils/request'

export function createCar(data) {
  return request.post('/cars', data)
}
