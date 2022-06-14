import request from '@/utils/request'

let dbLogin = {
  data: {
    data: {
      id: 500,
      rid: 0,
      username: 'admin',
      mobile: '123',
      email: '123@qq.com',
      token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjUwMCwicmlkIjowLCJpYXQiOjE1MTI1NDQyOTksImV4cCI6MTUxMjYzMDY5OX0.eGrsrvwHm-tPsO9r_pxHIQ5i5L1kX9RX444uwnRGaIM'
    },
    meta: {
      msg: '登录成功',
      status: 200
    }
  }
}

let dbLoginError = {
  data: {
    meta: {
      msg: '登录失败',
      status: 400
    }
  }
}

export const postLoginAPI = (loginForm) => {
  // return request.post('/api/login', loginForm)
  if (loginForm.username === 'admin' && loginForm.password === '123456') return dbLogin
  return dbLoginError
}
