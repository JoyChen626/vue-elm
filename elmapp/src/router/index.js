import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: resolve => require(['../view/home'], resolve)
  },
  {
    path: '/foodslist',
    name: 'foodslist',
    component: resolve => require(['../view/foods'], resolve)
  },
  {
    path: '/shop',
    name: 'shop',
    component: resolve => require(['../view/inshop'], resolve)
  },
  {
    path: '/other',
    name: 'other',
    component: resolve => require(['../view/other'], resolve)
  }
]
export default new Router({
  routes: routes,
  mode: 'history'
})
