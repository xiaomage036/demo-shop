import request from '@/utils/request'

let dbUserList = {
  data: {
    data: {
      pageNum: 1,
      total: 4,
      users: [
        { id: 500, username: 'admin', email: 'admin@163.com', mobile: '16827620868', role_name: '超级管理员', mg_state: true },
        { id: 501, username: 'zhangsan', email: 'zhangsan@163.com', mobile: '16827620813', role_name: '测试角色', mg_state: false },
        { id: 502, username: 'qwe', email: 'qwe@163.com', mobile: '12345', role_name: '主管', mg_state: true },
        { id: 503, username: 'rty', email: 'rty@163.com', mobile: '2233', role_name: 'test', mg_state: false }
      ]
    },
    meta: {
      msg: '获取用户列表成功',
      status: 200
    }
  }
}

let dbUserList2 = {
  data: {
    data: {
      pageNum: 1,
      total: 4,
      users: []
    },
    meta: {
      msg: '获取用户列表成功',
      status: 200
    }
  }
}

export const getUserListAPI = (queryInfo) => {
  // return request.get('/api/users', { params: queryInfo })
  let startIndex = (queryInfo.pageNum - 1) * queryInfo.pageSize
  let endIndex = startIndex + queryInfo.pageSize
  dbUserList2.data.data.users = dbUserList.data.data.users.slice(startIndex, endIndex)
  if (queryInfo.query !== '') {
    dbUserList2.data.data.users = dbUserList2.data.data.users.filter((item) => {
      return item.username.indexOf(queryInfo.query) !== -1
    })
  }
  return dbUserList2
}

export const postUserStateAPI = (userInfo) => {
  // return request.post(`/api/users/${userInfo.id}/state/${userInfo.mg_state}`)
  dbUserList.data.data.users.some((item) => {
    if (item.id === userInfo.id) {
      item.mg_state = userInfo.mg_state
      return true
    }
  })
  return dbUserList
}

export const postAddUserAPI = (addForm) => {
  // return request.post('/api/users', addForm)
}
