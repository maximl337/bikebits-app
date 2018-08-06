import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    journey: {},
    categories: [],
    journeyObjectTypes: [],
    journeys: []
  },
  mutations: {
    startJourney(state, journey) {
      state.journey = journey
    },
    stopJourney(state) {
      state.journey = {}
    },
    setCategories(state, categories) {
      state.categories = categories
    },
    setJourneyObjectTypes(state, journeyObjectTypes) {
      state.journeyObjectTypes = journeyObjectTypes
    },
    setJourney(state, journey) {
      state.journey = journey
    }
  }
})