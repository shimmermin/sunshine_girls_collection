// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routers from '@/router/routers.js'
import Cube from 'cube-ui'
import axios from 'axios'
import store from '@/store/index_vuex.js'

import setAxios from './set_axios.js'
import Vant from 'vant'
import 'vant/lib/index.css'
setAxios()

Vue.use(Cube)

Vue.use(Vant)

Vue.use(VueRouter)

Vue.use(store)

Vue.config.productionTip = false
Vue.prototype.$axios=axios

const router = new VueRouter({
  mode: 'history',
  routes: routers
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
