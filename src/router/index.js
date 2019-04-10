import Vue from 'vue'
import Router from 'vue-router'

import Dome from './router-child/dome'         // dome类

const Index = () => import(/* webpackChunkName: "HelloWorld" */ '@/components/Index')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    ...Dome                                  // dome类
    
  ]
})
