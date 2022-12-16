import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../components/MyLogin'
import Home from '../components/MyHome';

import Users from '../components/menu/HomeUsers'
import Data from '../components/menu/HomeData'
import List from '../components/menu/HomeList'
import Shopp from '../components/menu/HomeShopp'
import Admin from '../components/menu/HomeAdmin'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    { path: '/home', component: Home, children: [
      {path: 'users', component: Users},
      {path: 'admin', component: Data},
      {path: 'list', component: List},
      {path: 'shopp', component: Shopp},
      {path: 'data', component: Admin},

    ],redirect:'/home/shopp'}, 
  ]
})

router.beforeEach( function (to, from, next) {
  if (to.path === '/home') {
    const token = localStorage.getItem('token')
    if (token) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router
