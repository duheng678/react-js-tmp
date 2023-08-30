import axios from 'axios'

import { BASE_URL, TIME_OUT } from './config'

class MoonRequest {
  constructor(baseURL, timeout) {
    this.instance = axios.create({ baseURL, timeout })
    this.instance.interceptors.response.use(
      res => {
        return res.data
      },
      err => err
    )
    // this.instance.interceptors.request.use(res => {
    //   return res.data
    // })
  }

  request(config) {
    return this.instance.request(config)
  }
  get(config) {
    return this.request({ ...config, method: 'get' })
  }
  post(config) {
    return this.request({ ...config, method: 'post' })
  }
}

export default new MoonRequest(BASE_URL, TIME_OUT)
