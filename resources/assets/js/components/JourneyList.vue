<template>
  <div class="row">
    <div v-if="loading" class="col-md-4 col-md-offset-4" >
      <p class="alert alert-warning text-center">
        Loading...
      </p><!-- /.alert alert-warning text-center -->
    </div><!-- /.col-md-8 col-md-offset-2 -->
    <div v-if="error" class="col-md-4 col-md-offset-4">
      <p class="alert alert-danger text-center">Something went wrong</p>
    </div><!-- /.col-md-12 -->
    <div v-for="journey in journeys" class="col-md-12 journeys" >
      <journey-lane :journey="journey"></journey-lane>
    </div><!-- /.col-md-12 journeys -->
    <p class="alert alert-warning text-center" v-if="!journeys.length">
      No journeys taken yet. You are the first one
    </p>
  </div>
</template>
<script>
import { getJourneys } from '../api'
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
    }
  },
  beforeMount () {
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
      getJourneys()
        .then(resp => {
          this.journeys = this.journeys.concat(resp.data.journeys)
        })
        .catch(err => {
          console.error(err)
          this.error = true
        })
        .then(() => this.loading = false)
    }
  }
}
</script>