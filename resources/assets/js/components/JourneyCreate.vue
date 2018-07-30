<template>
  <div class="row">
    <div class="col-md-4 col-md-offset-4">
      <form @submit.prevent="createJourney">
        <fieldset>
          <legend>Create a new journey</legend>
          <div class="form-group">
            <label>Title</label>
            <input class="form-control"  type="text" v-model="title" required />
          </div>
          <div class="form-group">
            <label>Description</label>
            <input class="form-control"  type="text" v-model="description" required />
          </div>
          <div class="form-group text-right">
            <button type="submit" class="btn btn-primary">
              Add
            </button>
          </div>
        </fieldset>
      </form>
    </div><!-- /.col-md-12 -->
  </div><!-- /.row -->
</template>
<script> 
import { createJourney } from '../api'
export default {
  data() {
    return {
      categoryId: '',
      title: '',
      description: '',
    }
  },
  created() {
    this.categoryId = localStorage.getItem('categoryId');
    localStorage.setItem('journey', '');
  },
  watch: {
    //'$route': 'fetchJourneys'
  },
  methods: {
    createJourney(e) {
      createJourney(this.title, this.description, this.categoryId)
      .then(resp => {
        localStorage.setItem('journey', JSON.stringify(resp.data.data.journey));
        this.$router.push({ name: 'journeys-objects'})
      })
      .catch(err => console.log(err.response.data))
      
    }
  }
}
</script>