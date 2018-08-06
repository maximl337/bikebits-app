import Vue from 'vue'
import router from './router'
import store from './store'

const app = new Vue({
  el: '#root',
  router,
  store
})

const bus = new Vue()