<template>
  <div class="row">
    <div 
      class="col-md-4 categories"
      v-for="category in categories"
    >
      <div class="text-center">
        <router-link :to="{ name: 'journeys', params: { categoryId: category.id }}" append>
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
import { getCategories } from '../api';
export default {
  data() {
    return {
      categories: [],
      loading: true,
      errors: false
    }
  },
  mounted() {
    getCategories()
      .then(resp => {
        this.categories = this.categories.concat(resp.data.categories)
        localStorage.setItem('categories', JSON.stringify(resp.data.categories))
      })
      .catch(err => {
        console.log(err.response.data)
        this.errors = true
      })
      .then(() => this.loading = false)
  }
}
</script>
