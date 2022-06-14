import axios from 'axios'
import { Loading } from 'element-ui'

let loadingInstance = null

const request = axios.create({
  // baseURL: 'https://www.escook.cn'
  baseURL: 'http://localhost:8080'
})

request.interceptors.request.use((config) => {
  loadingInstance = Loading.service({ fullscreen: true })
  return config
})

request.interceptors.response.use((response) => {
  loadingInstance.close()
  return response
})

export default request
