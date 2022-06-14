import request from '@/utils/request'

let dbUsers = {
  data: {
    status: 0,
    data: [
      {
        id: 1,
        name: '张三',
        age: 30,
        position: '钻石',
        addtime: '2022-06-06 01:05:34'
      },
      {
        id: 2,
        name: '李四',
        age: 28,
        position: '铂金',
        addtime: '2022-05-12 11:28:03'
      },
      {
        id: 3,
        name: '王五',
        age: 25,
        position: '黄金',
        addtime: '2022-03-23 08:27:46'
      }
    ]
  }
}

let dbUser = {
  data: {
    status: 0,
    data: {}
  }
}

export const getUserListAPI = () => {
  // return request.get('/api/users')
  return dbUsers
}

export const postUserAPI = (user) => {
  // return request.post('/api/users', user)
  const data = {
    id: dbUsers.data.data.length + 1,
    name: user.name,
    age: user.age,
    position: user.position,
    addtime: new Date()
  }
  dbUsers.data.data.push(data)
  return dbUsers
}

export const deleteUserAPI = (id) => {
  // return request.delete('/api/users/' + id)
  dbUsers.data.data.splice(id - 1, 1)
  return dbUsers
}

export const getUserDetailAPI = (id) => {
  // return request.get('/api/users/' + id)
  dbUser.data.data = dbUsers.data.data[id - 1]
  return dbUser
}
