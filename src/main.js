// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './clearall.css'

// Vue.config.productionTip = false


//axios的导入
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.prototype.$axios = axios
Vue.use(VueAxios, axios)
Vue.prototype.HOST = '/api'

//导入mint-ui
import '../node_modules/mint-ui/lib/style.css'
import Mint from 'mint-ui';
Vue.use(Mint);


// mui
import './lib/mui/css/mui.min.css'
import './lib/mui/fonts/mui.ttf'
import './lib/mui/css/icons-extra.css'
import './lib/mui/fonts/mui-icons-extra.ttf'
import './lib/mui/js/mui.js'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})