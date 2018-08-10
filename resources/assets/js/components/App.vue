<template>
  <div class="app">
    <nav-bar></nav-bar>
    <div class="container-fluid">
      <main-search></main-search>
      <router-view></router-view>
    </div><!-- /.container-fluid -->
    <journey-sidebar></journey-sidebar>
  </div><!-- /.app -->
</template>
<script>
import Nav from './Nav.vue'
import MainSearch from './MainSearch.vue'
import JourneySideBar from './JourneySideBar.vue'

export default {
  components: {
    'nav-bar': Nav,
    'main-search': MainSearch,
    'journey-sidebar': JourneySideBar
  },
  mounted() {
    let user = localStorage.getItem('user')
  }
}
</script>