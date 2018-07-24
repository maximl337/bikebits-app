<template>
  <div class="row">
    <div 
      class="col-md-4 pointer"
      v-for="category in categories"
    >
      <div class="text-center">
        <img :src="category.image" />
        <h3>{{ category.title }}</h3>
      </div><!-- /.panel-body -->
    </div>
  </div>
</template>
<script>
export default {
  props: {
    categories: {
      type: Array,
      required: true
    }
  },
  mounted() {
    console.log(this.categories);
  }
}
</script>