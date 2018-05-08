import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const index = r => require.ensure([], () => r(require('@/views/index')), 'index')

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/index', name: 'index', component: index },
    { path: '/', redirect: '/index' }
  ]
})
