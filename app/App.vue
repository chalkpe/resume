<template lang="pug">
  #app
    resume-header
</template>

<script>
  import 'bulma'
  import ResumeHeader from './components/ResumeHeader.vue'

  export default {
    components: { ResumeHeader }
  }
</script>

<style lang="scss">
  #app {
    background-color: red;
  }
</style>
