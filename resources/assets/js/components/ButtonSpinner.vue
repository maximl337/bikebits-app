<template>
  <button class="btn"
    :class="buttonClass"
  >
    <span v-show="isLoading"><i class="fa fa-circle-o-notch fa-spin"></i></span>
    <slot v-if="typeof status === 'string' "></slot>
    <span v-show="status === false">Failed!</span>
    <span v-show="status === true"><i class="fa fa-check"></i> Done!</span>
  </button>
</template>
<script>
export default {
  props: {
    isLoading: {
      required: true,
      type: Boolean
    },
    status: {
      default: ''
    }
  },
  computed: {
    buttonClass() {
      return {
        
        'btn-danger': !this.isLoading && this.status === false,
        'btn-success': !this.isLoading && this.status === true,
        'btn-primary': !this.isLoading && this.status === '',
      }
    }
  }
}
</script>