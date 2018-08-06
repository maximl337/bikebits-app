<template>
  <div>
    <nav-bar></nav-bar>
    <div class="container-fluid">
      <main-search></main-search>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import Nav from './Nav.vue'
import MainSearch from './MainSearch.vue'
export default {
  components: {
    'nav-bar': Nav,
    'main-search': MainSearch
  },
  mounted() {
    let user = localStorage.getItem('user')
  }
}
</script>