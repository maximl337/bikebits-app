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
  },
  watch: {
    //'$route': 'fetchJourneys'
  },
  methods: {
    createJourney(e) {
      //console.log(this.$data)
      this.$router.push({ name: 'journeys-objects'})
    }
  }
}
</script>