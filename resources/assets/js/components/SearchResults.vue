<template>
  <div class="row">
    <div class="col-md-12" v-for="result in this.results">
      <div class="thumbnail pull-left">
        <img 
          :src="result.snippet.thumbnails.default.url" 
          :width="result.snippet.thumbnails.default.width"
          :height="result.snippet.thumbnails.default.height" />
      </div><!-- /.thumbnail -->
      <h4>{{ result.snippet.title }}</h4>
    </div><!-- /.col-md-12 -->
  </div><!-- /.row -->
</template>
<script>
import { youtubeSearch } from '../api'
export default {
  data() {
    return {
      results: []
    }
  },
  created() {
    this.handleSearch();
  },
  methods: {
    handleSearch() {
      youtubeSearch(this.$route.query.q)
      .then(resp => {
        resp.json().then(val => {
          this.results = this.results.concat(val.items);
          console.log(this.results);
        });
      })
      .catch((error) => {
        console.error(error);
      });
    }
  },
  watch: {
    '$route': 'handleSearch'
  }
}
</script>