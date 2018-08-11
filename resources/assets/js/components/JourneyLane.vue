<template>
  <div class="row">
    <div class="col-md-12">
    	<div class="panel">
    		<div class="panel-body">
    			<ul class="list-inline">
	    			<li class="list-inline-item" v-for="journeyObject in journey.journey_objects">
	    				<img 
                class="thumbnail"
	    					:src="`https://img.youtube.com/vi/${journeyObject.object_id}/default.jpg`" 
	    				/>
	    			</li>
	    		</ul>
    		</div>
    		<!-- /.panel-body -->
    		<div class="panel-footer" v-if="journey.user_id == user.id">
    			<button-spinner
            title="Delete journey"
	          @click.native="handleRemoveJourney"
	          :isLoading="isLoading" 
	          :disabled="isLoading"
	          :status="status">
	            <span><i class="fa fa-times"></i></span>
	        </button-spinner>
    			<button-spinner
            v-if="!active"
            title="Start journey"
            :class="`btn-success`"
            @click.native="startJourney"
            :isLoading="isLoading" 
            :disabled="isLoading"
            :status="status">
              <span><i class="fa fa-play"></i></span>
          </button-spinner>
          <button-spinner
            v-if="active"
            title="Stop journey"
            :class="`btn-danger`"
            @click.native="stopJourney"
            :isLoading="isLoading" 
            :disabled="isLoading"
            :status="status">
              <span><i class="fa fa-stop"></i></span>
          </button-spinner>
          <!-- Single button -->
          <div class="btn-group">
            <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {{ activeCategory ? activeCategory.title : "Uncategorized" }} <span class="caret"></span>
            </button>
            <ul class="dropdown-menu">
              <li 
                v-for="category in availableCategories"
                @click="updateCategory(category.id)"
              ><a href="#">{{ category.title }}</a></li>
            </ul>
          </div>
    		</div><!-- /.panel-footer -->
    	</div><!-- /.panel -->
    </div><!-- /.col-md-12 -->
  </div><!-- /.row -->
</template>
<script>
import ButtonSpinner from './ButtonSpinner.vue'
export default {
  components: {
    'button-spinner': ButtonSpinner
  },
  props: {
    journey: {
      required: true,
      type: Object
    },
    activeJourneyId: {
      required: false
    }
  },
  data() {
    return {
      isLoading: false,
      status: '',
      active: false
    }
  },
  created() {
    const currentJourney = this.$store.state.journey
    if(!currentJourney) return
    if(this.journey.id == currentJourney.id) this.active = true
  },
  watch: {
    activeJourneyId(newVal) {
      this.active = this.journey.id == newVal
    }
  },
  methods: {
  	handleRemoveJourney() {
  		this.isLoading = true
  		this.$emit('handleRemoveJourney', this.journey.id)
  	},
    stopJourney() {
      this.loading = true
      this.$emit('handleStopJourney', this.journey.id)
    },
    startJourney() {
      this.loading = true
      this.$emit('handleStartJourney', this.journey.id)
    },
    updateCategory(category_id) {
      this.$emit('handleUpdateJourney', {
        ...this.journey,
        category_id
      })
    }
  },
  computed: {
    categories() {
      return this.$store.state.categories
    },
    activeCategory() {
      return _.find(this.categories, (c => c.id == this.journey.category_id))
    },
    availableCategories() {
      if(!this.activeCategory) return this.categories
      return this.categories.filter(c => c.id != this.activeCategory.id)
    },
    user() {
      return this.$store.state.user
    }
  }
}
</script>