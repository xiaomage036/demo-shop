import request from '@/utils/request'

let dbMenuList = {
  data: {
    data: [
      {
        id: 100,
        authName: '用户管理',
        path: 'users',
        children: [
          {
            id: 101,
            authName: '用户列表',
            path: 'users',
            children: []
          }
        ]
      },
      {
        id: 102,
        authName: '权限管理',
        path: 'rights',
        children: [
          {
            id: 103,
            authName: '角色列表',
            path: 'role',
            children: []
          },
          {
            id: 104,
            authName: '权限列表',
            path: 'rights',
            children: []
          }
        ]
      },
      {
        id: 105,
        authName: '商品管理',
        path: 'goods',
        children: [
          {
            id: 106,
            authName: '商品列表',
            path: null,
            children: []
          },
          {
            id: 107,
            authName: '商品列表',
            path: null,
            children: []
          },
          {
            id: 108,
            authName: '商品列表',
            path: null,
            children: []
          }
        ]
      },
      {
        id: 109,
        authName: '订单管理',
        path: 'orders',
        children: [
          {
            id: 110,
            authName: '商品列表',
            path: null,
            children: []
          }
        ]
      },
      {
        id: 111,
        authName: '数据统计',
        path: 'reports',
        children: [
          {
            id: 112,
            authName: '商品列表',
            path: null,
            children: []
          }
        ]
      }
    ],
    meta: {
      msg: '获取菜单列表成功',
      status: 200
    }
  }
}

export const getMenuListAPI = () => {
  // return request.get('/api/menus')
  return dbMenuList
}
