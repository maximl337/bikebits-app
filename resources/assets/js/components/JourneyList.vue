<template>
  <div class="row">
    <div class="col-md-4 col-md-offset-4" v-if="loading">
      <p class="alert alert-warning text-center">
        Loading...
      </p><!-- /.alert alert-warning text-center -->
    </div><!-- /.col-md-8 col-md-offset-2 -->
    <div v-else class="col-md-12 text-right">
      <router-link :to="{ name: 'journeys-create' }">
        <button class="btn btn-sm btn-primary">
          Create Journey
        </button> 
      </router-link>
    </div>
    <div class="col-md-4 col-md-offset-4" v-if="error">
      <p class="alert alert-danger">Something went wrong</p>
    </div><!-- /.col-md-12 -->
    <div v-for="journey in journeys" class="col-md-12 journeys" >
      <journey-lane :journey="journey"></journey-lane>
    </div><!-- /.col-md-12 journeys -->
    <div v-if="!journeys.length" class="col-md-4 col-md-offset-4 text-center">
      <p class="text-muted alert alert-info">No Journeys found.</p>
      <router-link :to="{ name: 'journeys-create' }">
        <button class="btn btn-primary">Create a new journey</button>
      </router-link>
    </div>
  </div>
</template>
<script>
import { getJourneys } from '../api'
import JourneyLane from './JourneyLane.vue'
export default {
  components: {
    'journey-lane': JourneyLane
  },
  data() {
    return {
      loading: true,
      error: false,
      journeys: [],
      categoryId: '',
    }
  },
  created () {
    this.fetchJourneys();
    this.categoryId = this.$route.params.categoryId
    localStorage.setItem('categoryId', this.categoryId)
  },
  watch: {
    '$route': 'fetchJourneys'
  },
  methods: {
    fetchJourneys() {
      this.loading = true
      this.error = false
      this.journeys = this.journeys.splice(0, this.journeys.length - 1)
      getJourneys(this.$route.params.categoryId)
        .then(resp => {
          this.journeys = this.journeys.concat(resp.data.journeys)
        })
        .catch(err => {
          this.error = true
        })
        .then(() => this.loading = false)
    }
  }
}
</script>