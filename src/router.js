import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', name: 'index', component: require('page/index') },
    { path: '/title', name: 'title', component: require('page/headline') },
    { path: '/btn', name: 'button', component: require('page/btn') },
    { path: '/form', name: 'form', component: require('page/form') },
    { path: '/search', name: 'search', component: require('page/search') }
  ]
})

window.router = router

export default router
