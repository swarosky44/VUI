require('normalize.css')
require('less/global.less')

import Vue from 'vue'
import App from './App'
import router from './router.js'

/* eslint-disable no-new */
const app = new Vue({
  router,
  ...App
})

app.$mount('#app')
