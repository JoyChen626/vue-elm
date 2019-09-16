// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Cube from 'cube-ui'
import 'js/common.js'
//import 'js/iconfont.js'
import 'swiper/dist/css/swiper.min.css'
import axios from 'axios'

Vue.prototype.$axios= axios

Vue.use(Cube)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
