<template>
  <div class="row">
    <div class="col-md-12 alert alert-info text-center" 
    v-if="loading"> Loading </div>
    <div class="col-md-12" v-for="result in this.results">
      <div class="thumbnail pull-left">
        <img 
          :src="result.snippet.thumbnails.default.url" 
          :width="result.snippet.thumbnails.default.width"
          :height="result.snippet.thumbnails.default.height" />
      </div><!-- /.thumbnail -->
      <div class="result-info">
        <h4>
          <router-link :to="{ name: 'journey-object', query: { videoId: result.id.videoId } }">
          {{ result.snippet.title }}
          </router-link>
        </h4>
        <p>{{ result.snippet.description }}</p>
        <p><em>{{ result.snippet.publishedAt }}</em> - <strong>{{ result.snippet.channelTitle }}</strong></p>
      </div>
      
    </div><!-- /.col-md-12 -->
  </div><!-- /.row -->
</template>
<script>
import { youtubeSearch } from '../api'
export default {
  data() {
    return {
      results: [],
      loading: true,
    }
  },
  created() {
    this.loading = true;
    this.handleSearch();
  },
  methods: {
    handleSearch() {
      youtubeSearch(this.$route.query.q)
      .then(resp => {
        resp.json().then(val => {
          this.results = val.items;
          //console.log(this.results);
          this.loading = false;
        });
      })
      .catch((error) => {
        console.error(error);
      })
      .then(() => this.loading = false)
    }
  },
  watch: {
    '$route': 'handleSearch'
  }
}
</script>
<style scoped>
.thumbnail {
  margin-right: 15px;
}
</style>