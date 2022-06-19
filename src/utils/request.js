import axios from 'axios'

const request = axios.create({
  // baseURL: 'https://www.escook.cn'
  baseURL: 'http://localhost:8080'
})

request.interceptors.request.use((config) => {
  config.headers.Authorization = sessionStorage.getItem('token')
  return config
})

request.interceptors.response.use((response) => {
  return response
})

export default request
