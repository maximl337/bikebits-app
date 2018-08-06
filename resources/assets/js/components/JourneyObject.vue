<template>
  <div>
    <div class="row black-bg">
      <div class="col-md-10 col-md-offset-1">
        <div class="object-wrap">
          <iframe 
            width="560" 
            height="315"
            :src="youtubeSrc" 
            frameborder="0" 
            allow="autoplay; encrypted-media" 
            allowfullscreen
          ></iframe>
        </div>
      </div><!-- /.col-md-12 -->
      <br></br>
    </div><!-- /.row -->
    <div class="row">
      <div class="col-md-12 text-right">
        <button-spinner
          v-if="!inJourney"
          @click.native="handleAddToJourney"
          :isLoading="isLoading" 
          :disabled="isLoading"
          :status="status">
            <span>Add to journey</span>
        </button-spinner>
        <button-spinner
          v-if="inJourney"
          @click.native="handleRemoveFromJourney"
          :isLoading="isLoading" 
          :disabled="isLoading"
          :status="status">
            <span>Remove from journey</span>
        </button-spinner>
      </div>
    </div>
  </div>
</template>
<script>
import ButtonSpinner from './ButtonSpinner.vue'
import { storeJourneyObject, removeJourneyObject } from '../api'
export default {
  data() {
    return {
      isLoading: false,
      status: '',
      videoId: '',
      journey: null,
      journeyObject: null
    }
  },
  components: {
    'button-spinner': ButtonSpinner
  },
  methods: {
    handleAddToJourney() {
      this.isLoading = true
      const journeyObjectTypes = JSON.parse(localStorage.getItem('journeyObjectTypes'));
      const journeyId = this.journey !== null && this.journey.hasOwnProperty('id') ? this.journey.id : null
      storeJourneyObject(journeyObjectTypes[0].id, this.videoId, journeyId)
        .then(resp => {
          const { journey } = resp.data
          this.journey = journey
          localStorage.setItem('journey', JSON.stringify(journey))
          this.journeyObject = _.find(this.journey.journey_objects, jO => jO.object_id == this.videoId);
          this.isLoading = false
          this.status = true
          setTimeout(() => {
            this.status = ''
          }, 500)
        })
        .catch(err => this.status = false)
        .then(() => this.isLoading = false)
    },

    handleRemoveFromJourney() {
      if(this.journeyObject == null) return false;
      removeJourneyObject(this.journeyObject.id)
        .then(resp => {
          this.journey = Object.assign({}, this.journey, {
            journey_objects: this.journey.journey_objects.filter(jO => jO.id != this.journeyObject.id)
          })
          localStorage.setItem('journey', JSON.stringify(this.journey))
          this.journeyObject = null
          this.isLoading = false
          this.status = true
          setTimeout(() => {
            this.status = ''
          }, 500)
        })
        .catch(err => this.status = false)
        .then(() => this.isLoading = false)
    }
  },
  computed: {
    youtubeSrc() {
      return `https://www.youtube.com/embed/${this.videoId}`
    },
    inJourney() {
      if(this.journey !== null) {
        return _.findIndex(this.journey.journey_objects, jO => jO.object_id == this.videoId) > -1
      }
      return false
    }
  },
  created() {
    this.videoId = this.$route.query.videoId
    this.journey = JSON.parse(localStorage.getItem('journey'))
    if(this.journey !== null) {
      this.journeyObject = _.find(this.journey.journey_objects, jO => jO.object_id == this.videoId);
    }
  }
}
</script>
<style scoped>
.object-wrap {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    padding-top: 25px;
    height: 0;
}
.object-wrap iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.black-bg {
  background: black;
}
</style>