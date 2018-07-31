import Login from './components/Login.vue'
import Register from './components/Register.vue'
import App from './components/App.vue'
import CategoryList from './components/CategoryList.vue'
import JourneyList from './components/JourneyList.vue'
import JourneyCreate from './components/JourneyCreate.vue'
import JourneyObject from './components/JourneyObject.vue'
import SearchResults from './components/SearchResults.vue'

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
        name: 'categories',
        component: CategoryList
      },
      {
        path: '/journey',
        name: 'journeys',
        component: JourneyList
      },
      {
        path: '/search',
        name: 'search',
        component: SearchResults
      },
      {
        path: '/journey/object',
        name: 'journey-object',
        component: JourneyObject
      }
    ] // EO children
  },
]

export default routes