import axios from 'axios'
import qs from 'qs'
// import { Loading } from 'element-ui'

const baseURL = 'http://localhost:5000'

// 请求头拦截
axios.interceptors.request.use(config => {
  /* 请求之前需要做的事情（显示loading）
    配置全局加载 */
  // if (config.loading !== false) {
  //   config.loading = Loading.service({
  //     lock: true,
  //     background: 'rgba(0, 0, 0, 0.7)',
  //     spinner: 'el-icon-loading',
  //     text: 'Loading...'
  //   })
  // }

  // 若是有做鉴权token , 就给头部带上token(令牌)
  // if (localStorage.token) {
  //   config.headers.Authorization = localStorage.token;
  // }
  return config
},
error => {
  return Promise.reject(error)
})

// 响应头拦截
axios.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    return Promise.reject(error)
  }
)

function errorState (response) {
  // closeLoading(response)
  if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
    return response.data
  } else {
    alert('数据获取错误')
  }
}

function successState (response) {
  // closeLoading(response)
  if (response.code === 200) {
    alert('success')
  }
  return response.data
}

function apiAxios (method, url, params) {
  let httpDefault = {
    method: method,
    baseURL: baseURL,
    url: url,
    // `params` 是即将与请求一起发送的 URL 参数
    // `data` 是作为请求主体被发送的数据
    params: method === 'GET' || method === 'DELETE' ? params : null,
    data: method === 'POST' || method === 'PUT' ? qs.stringify(params) : null,
    timeout: 5000,
    loading: true,
    responseType: 'json',                                                             // 返回数据类型
    withCredentials: true,                                                            // 是否允许带cookie这些
    headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'}      // 设置请求头
  }

  return new Promise((resolve, reject) => {
    axios(httpDefault).then(res => {
      successState(res)
      resolve(res)
    }).catch(response => {
      errorState(response)
      reject(response)
    })
  })
}

// 关闭全局loading
// const closeLoading = (target) => {
//   if (!target.config || !target.config.loading) return true
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       target.config.loading.close()
//       resolve()
//     }, 200)
//   })
// }

export default {
  install: function (Vue) {
    Vue.prototype.getAxios = (url, params) => apiAxios('GET', url, params)
    Vue.prototype.postAxios = (url, params) => apiAxios('POST', url, params)
    Vue.prototype.putAxios = (url, params) => apiAxios('PUT', url, params)
    Vue.prototype.delectAxios = (url, params) => apiAxios('DELECT', url, params)
  }
}
