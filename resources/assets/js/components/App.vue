<template>
  <div>
    <nav-bar></nav-bar>
    <div class="container-fluid">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import Nav from './Nav.vue';
export default {
  components: {
    'nav-bar': Nav,
  },
  data() {
   return {
   }
  },
  mounted() {
    let user = localStorage.getItem('user')
  }
}
</script>