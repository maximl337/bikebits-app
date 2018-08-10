<template>
  <div class="journey-sidebar-wrap">
    <div class="sidebar journey-sidebar" v-show="!collapsed">
      <div class="text-right">
        <span @click="collapsed = true">
          <i class="fa fa-times fa-2x"></i>
        </span>
      </div>
      <div v-if="journey">
        <h3>{{ journey.title }}</h3>
        <div v-for="journeyObject in journey.journey_objects" :key="journeyObject.id">
          <img 
            class="thumbnail"
            :src="`https://img.youtube.com/vi/${journeyObject.object_id}/default.jpg`" 
          />
        </div>
      </div>
      <div v-if="!journey">
        No active journey
      </div>
    </div><!-- /.journey-sidebar -->
    <div 
      class="sidebar journey-sidebar-collapsed pointer" 
      v-show="collapsed"
      @click="collapsed = false"
    >
      <p v-if="journey">{{ this.journey.title }}</p>
      <p v-else>No active journey</p>
    </div><!-- /.journey-sidebar-collapsed -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      collapsed: true,
    }
  },
  computed: {
    journey() {
      return this.$store.state.journey
    }
  }
}
</script>
<style scoped>
.sidebar {
  background: white;
  padding: 10px;
  border: 1px solid #d3e0e9;
  bottom: 0px;
  right: 0px;
  position: fixed;
  z-index: 9999;
  width: 20%;
}
.journey-sidebar {
  top: 50px;
  height: 100%;
  border-radius: 0px;
}
.journey-sidebar-collapsed {
  border-radius: 6px 0px 0px 0px;
}
.pointer {
  cursor: pointer;
}
</style>