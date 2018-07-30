<template>
  <div class="row">
    <div class="col-md-12">
      <form @submit.prevent="search">
        <div class="form-group">
          <input 
            type="search" 
            class="form-control input-lg" 
            placeholder="What are you looking for" 
            v-model="query"
          />  
        </div>
      </form>
    </div><!-- /.col-md-12 -->
  </div><!-- /.row -->
</template>
<script>
export default {
  data() {
    return {
      query: '',
    }
  },
  methods: {
    search(e) {
      this.$router.push({ name: 'search', query: { q: this.query }})
    }
  },
  mounted() {
  }
}
</script>
<style scoped>
.search-results {
  height: 200px;
  background: red;
  position: absolute;
  border: 1px solid red;
  z-index: 99999;
  float: left;
  width: 100%;
  margin-top: -15px;

}
</style>