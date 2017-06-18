<template lang="pug">
  #app
    resume-header
    section.section
      resume-profile
</template>

<script>
  import './app.sass'
  import 'noto-sans-kr'
  import 'font-awesome/css/font-awesome.css'

  import ResumeHeader from './components/ResumeHeader.vue'
  import ResumeProfile from './components/ResumeProfile.vue'

  export default {
    components: { ResumeHeader, ResumeProfile }
  }
</script>

<style lang="scss">
</style>
