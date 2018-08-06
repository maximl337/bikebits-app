<template>
  <div class="row">
    <div 
      class="col-md-4 categories"
      v-for="category in categories"
    >
      <div class="text-center">
        <router-link :to="{ name: 'journeys', query: { categoryId: category.id }}" append>
          <img :src="category.image" />
        </router-link>
        <h3>{{ category.title }}</h3>
      </div><!-- /.panel-body -->
    </div> <!-- categories -->
    <div class="row">
      <div class="col-md-12 has-errors" v-if="errors">
        Something went wrong.
      </div>
      <div class="col-md-8 col-md-offset-2 text-center" v-if="loading">
        <p class="alert alert-warning">Loading</p>
      </div>
    </div><!-- /.row -->
  </div>
</template>
<script>
import { loadInitState } from '../api';
export default {
  data() {
    return {
      categories: [],
      loading: true,
      errors: false
    }
  },
  mounted() {
    loadInitState()
      .then(resp => {
        const journeyObjectTypes = resp.data.journeyObjectTypes
        this.categories = this.categories.concat(resp.data.categories)
        localStorage.setItem('categories', JSON.stringify(resp.data.categories))
        localStorage.setItem('journeyObjectTypes', JSON.stringify(resp.data.journeyObjectTypes))
      })
      .catch(err => {
        console.log(err.response.data)
        this.errors = true
      })
      .then(() => this.loading = false)
  }
}
</script>
