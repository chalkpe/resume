<template lang="pug">
  #app
    resume-nav
    section.section: .container
      h1.title Junyoung Park
      h2.subtitle Full-stack web developer

      .columns
        resume-contact
        resume-likes
</template>

<script>
  import './app.sass'
  import 'noto-sans-kr'
  import 'font-awesome/css/font-awesome.css'

  import ResumeNav from './components/Navigation.vue'

  import ResumeLikes from './components/grid/Likes.vue'
  import ResumeContact from './components/grid/Contact.vue'

  export default {
    components: { ResumeNav, ResumeLikes, ResumeContact }
  }
</script>

<style lang="scss">
</style>
