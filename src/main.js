// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import KeenUI from 'keen-ui'
import iView from 'iview';
import 'iview/dist/styles/iview.css'
import VeeValidate from 'vee-validate'
import 'keen-ui/dist/keen-ui.min.css'

Vue.config.productionTip = false

Vue.use(KeenUI)
Vue.use(iView)
Vue.use(VeeValidate)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
