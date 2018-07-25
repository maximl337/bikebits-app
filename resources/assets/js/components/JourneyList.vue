<template>
  <div class="row">
    <div class="col-md-8 col-md-offset-2" v-if="loading">
      <p class="alert alert-warning text-center">
        Loading...
      </p><!-- /.alert alert-warning text-center -->
    </div><!-- /.col-md-8 col-md-offset-2 -->
    <div class="col-md-12" v-if="error">
      <p class="alert alert-danger">Something went wrong</p>
    </div><!-- /.col-md-12 -->
    <div v-for="journey in journeys" class="col-md-12 journeys" >
      <journey-lane :journey="journey"></journey-lane>
    </div><!-- /.col-md-12 journeys -->
    <div v-if="!journeys.length" class="col-md-12">
      <p class="text-center text-muted">No Journeys found.</p>
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
      journeys: []
    }
  },
  created () {
    this.fetchJourneys();
  },
  watch: {
    '$route': 'fetchJourneys'
  },
  methods: {
    fetchJourneys() {
      this.loading = true
      this.error = false
      this.journeys = this.journeys.splice(0, this.journeys.length - 1)
      getJourneys(this.$route.params.categoryTitle)
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