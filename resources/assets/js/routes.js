import Login from './components/Login.vue'
import Register from './components/Register.vue'
import App from './components/App.vue'

const routes = [
  { 
  	path: '/',
  	alias: '/login',
  	component: Login
  },
  { 
  	path: '/register', 
  	component: Register 
  },
  { 
  	path: '/app', 
  	component: App, 
  	meta: { 
      requiresAuth: true
    }
  }
]

export default routes