import Login from './components/Login.vue'
import Register from './components/Register.vue'
import App from './components/App.vue'
import CategoryList from './components/CategoryList.vue'
import JourneyList from './components/JourneyList.vue'
import JourneyCreate from './components/JourneyCreate.vue'
import JourneyObjects from './components/JourneyObjects.vue'

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
        path: '/:categoryId/journeys',
        name: 'journeys',
        component: JourneyList
      },
      {
        path: '/journeys/create',
        name: 'journeys-create',
        component: JourneyCreate
      },
      {
        path: '/journeys/objects',
        name: 'journeys-objects',
        component: JourneyObjects
      }
    ] // EO children
  },
]

export default routes