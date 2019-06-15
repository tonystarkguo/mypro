'use strict'
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
let modalRoute
process.env.NODE_ENV === 'production' ? modalRoute = 'history' : modalRoute = 'hash'
const router = new Router({
  mode: modalRoute,
  routes: [
    {
      path: '/',
      name: 'start',
      component: () => import('../view/start.vue')
    }, {
      path: '/login',
      name: 'login',
      component: () => import('../view/login.vue')
    }, {
      path: '*',
      name: 'nopag',
      component: () => import('../view/404.vue')
    }]
})

router.beforeEach((to, from, next) => {
  next()
})
export default router
