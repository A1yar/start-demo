// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './assets/css/common.css'              // 公共CSS

import $utils from '@assets/utils'            // 公共自定义钩子函数
import * as $api from '@assets/api'       // api请求函数

Vue.prototype.$utils = $utils
Vue.prototype.$api = $api

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
