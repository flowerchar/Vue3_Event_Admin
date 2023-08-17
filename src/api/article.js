import request from '@/utils/request'

export const artGetChannelService = () => request.get('/my/cate/list')
export const artAddChannelService = (data) => request.post('/my/cate/add', data)
export const artEditChannelService = (data) =>
  request.put('/my/cate/info', data)
export const artDelChannelService = (id) =>
  request.delete('/my/cate/del', {
    params: { id }
  })

// 1.body->data post  put
// 2.path-string get
// 3.query->params get delete
export const artGetListService = (params) =>
  request.get('/my/article/list', {
    params
  })

export const artPublishService = (data) => request.post('/my/article/add', data)

export const artGetDetailService = (id) =>
  request.get('/my/article/info', {
    params: { id }
  })

export const artEditService = (data) => request.get('/my/article/info', data)
