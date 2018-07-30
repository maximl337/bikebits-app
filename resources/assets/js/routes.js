import Login from './components/Login.vue'
import Register from './components/Register.vue'
import App from './components/App.vue'
import CategoryList from './components/CategoryList.vue'
import JourneyList from './components/JourneyList.vue'
import JourneyCreate from './components/JourneyCreate.vue'
import JourneyObjects from './components/JourneyObjects.vue'
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
        name: 'journeys',
        component: JourneyList
      },
      {
        path: '/search',
        name: 'search',
        component: SearchResults
      }
    ] // EO children
  },
]

export default routes