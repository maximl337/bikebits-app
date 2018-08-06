<template>
  <div class="row">
    <div class="col-md-12" v-if="categoryName && !loading">
      <ul class="breadcrumb">
        <li>{{ categoryName }}</li>
      </ul>
    </div>
    <!-- /.col-md-12 -->
    
    <div v-if="loading" class="col-md-4 col-md-offset-4" >
      <p class="alert alert-warning text-center">
        Loading...
      </p><!-- /.alert alert-warning text-center -->
    </div><!-- /.col-md-8 col-md-offset-2 -->
    <div v-if="error" class="col-md-4 col-md-offset-4">
      <p class="alert alert-danger text-center">Something went wrong</p>
    </div><!-- /.col-md-12 -->
    <div v-for="journey in journeys" :key="journey.id" class="col-md-12 journeys" >
      <journey-lane 
        :journey="journey"
        :activeJourneyId="activeJourneyId"
        @handleRemoveJourney="handleRemoveJourney($event)"
        @handleStartJourney="handleStartJourney($event)"
        @handleStopJourney="handleStopJourney($event)"
      ></journey-lane>
    </div><!-- /.col-md-12 journeys -->
    <div class="col-md-12" v-if="!journeys.length">
      <p class="alert alert-warning text-center">
        No journeys taken yet. You are the first one
      </p>
    </div>
    <!-- /.col-md-12 -->
    
  </div>
</template>
<script>
import { getJourneys, removeJourney } from '../api'
import JourneyLane from './JourneyLane.vue'
export default {
  components: {
    'journey-lane': JourneyLane,
  },
  data() {
    return {
      loading: true,
      error: false,
      journeys: [],
      categoryId: '',
      activeJourneyId: '',
    }
  },
  created () {
    this.categoryId = this.$route.query.categoryId
    this.fetchJourneys()
  },
  watch: {
    '$route': 'fetchJourneys'
  },
  methods: {
    fetchJourneys() {
      this.loading = true
      this.error = false
      this.journeys = []
      getJourneys(this.categoryId)
        .then(resp => {
          this.journeys = resp.data.journeys
        })
        .catch(err => {
          console.error('ERROR', err)
          this.error = true
        })
        .then(() => this.loading = false)
    },
    handleRemoveJourney(journeyId) {
      removeJourney(journeyId)
        .then(resp => {
          // remove it by journeyId
          const journeyIndex = this.journeys.findIndex(j => j.id == journeyId)
          this.journeys.splice(journeyIndex, 1)
        })
        .catch(err => console.log(err))
    },
    handleStopJourney(journeyId) {
      this.activeJourneyId = ''
      localStorage.setItem('journey', null)
    },
    handleStartJourney(journeyId) {
      this.activeJourneyId = journeyId
      const journey = this.journeys.find(j => j.id == journeyId)
      localStorage.setItem('journey', JSON.stringify(journey))
    }
  },
  computed: {
    categoryName() {
      const categories = JSON.parse(localStorage.getItem('categories'))
      if(categories) {
        const categoryId = this.$route.query.categoryId
        if(categoryId) {
          const category = _.find(categories, (c) => c.id === categoryId)
          if(category) {
            return category.title;
          }
        }
        return 'Your journeys';
      }
      return ''
    }
  },
}
</script>