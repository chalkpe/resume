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
  import 'noto-sans-kr'
  import 'lato-webfont'

  import ResumeNav from './components/Navigation.vue'
  import ResumeLikes from './components/grid/Likes.vue'
  import ResumeContact from './components/grid/Contact.vue'

  export default {
    components: { ResumeNav, ResumeLikes, ResumeContact }
  }
</script>

<style lang="scss">
  $primary: #1abd9d;
  $family-monospace: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
  $family-sans-serif: Lato, Roboto, Oxygen, Ubuntu, "Fira Sans", "Droid Sans", "Helvetica Neue", Helvetica, Arial, "Noto Sans Korean", sans-serif;

  @import "~bulma";
  @import '~font-awesome/css/font-awesome.css';

  *:focus {
    outline: none;
  }

  #app {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  section {
    flex: 1 0 auto;
  }
</style>
