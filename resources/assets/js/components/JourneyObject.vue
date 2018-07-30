<template>
  <div class="row">
    <div class="col-md-12">
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
  </div><!-- /.row -->
</template>
<script>
export default {
  computed: {
    youtubeSrc() {
      return `https://www.youtube.com/embed/${this.$route.query.videoId}`;
    }
  },
  created() {
    // save journey object
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
</style>