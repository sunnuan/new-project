import request from '@/utils/request'

export function homeList (params) {
  return request({
    url: '/api/home/list',
    method: 'get',
    params
  })
}
