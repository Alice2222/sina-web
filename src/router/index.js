import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

const singup = r => require.ensure([], () => r(require('../views/singup/singup')), 'singup')
const login = r => require.ensure([], () => r(require('../views/login/login')), 'login')

export default new Router({
	mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/singup',
      component: singup
    },
    {
      path: '/login',
      component: login
    },
  ]
})
