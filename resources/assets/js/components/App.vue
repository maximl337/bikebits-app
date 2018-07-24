<template>
  <div>
    <nav-bar></nav-bar>
    <category-list 
      v-if="categories.length"
      :categories="categories"
    ></category-list>
    <div v-else>Loading</div>
  </div>
</template>
<script>
import Nav from './Nav.vue';
import CategoryList from './CategoryList.vue';
import { getCategories } from '../api';
export default {
  components: {
    'nav-bar': Nav,
    'category-list': CategoryList
  },
  data() {
   return {
    categories: [],
   }
  },
  beforeMount() {
    getCategories()
      .then(resp => this.categories = this.categories.concat(resp.data.categories));
      
  },
  mounted() {
    let user = localStorage.getItem('user')
  }
}
</script>