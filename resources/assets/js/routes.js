import Login from './components/Login.vue'
import Register from './components/Register.vue'
import App from './components/App.vue'
import CategoryList from './components/CategoryList.vue'
import JourneyList from './components/JourneyList.vue'

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
    meta: { 
      requiresAuth: true
    },
  	path: '/app', 
  	component: App, 
    children: [
      {
        path: '/',
        component: CategoryList
      },
      {
        path: '/:categoryTitle/journeys',
        name: 'journeys',
        component: JourneyList
      }
    ] // EO children
  },
]

export default routes