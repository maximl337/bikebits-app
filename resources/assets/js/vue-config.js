import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import auth from './auth'

auth.isLoggedIn();
Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history'
})

const app = new Vue({
  el: '#root',
  router
});
