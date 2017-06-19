<template lang="pug">
  #app
    resume-nav

    main
      section.hero.is-primary.is-bold
        .hero-body: .container
          h1.title Junyoung Park
          h2.subtitle Full-stack web developer

      section.section
        .container: .columns
          .column.is-3
            resume-profile
            resume-activities
            resume-awards

          .column
            resume-likes
            resume-projects
</template>

<script>
  import WebFont from 'webfontloader'

  import ResumeNav from './components/Navigation.vue'
  import ResumeLikes from './components/grid/Likes.vue'
  import ResumeAwards from './components/grid/Awards.vue'
  import ResumeProfile from './components/grid/Profile.vue'
  import ResumeProjects from './components/grid/Projects.vue'
  import ResumeActivities from './components/grid/Activities.vue'

  export default {
    components: {
      ResumeNav,
      ResumeLikes,
      ResumeAwards,
      ResumeProfile,
      ResumeProjects,
      ResumeActivities
    },

    created () {
      WebFont.load({
        custom: {
          families: ['Spoqa Han Sans'],
          urls: ['//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css']
        }
      })
    }
  }
</script>

<style lang="scss">
  $primary: #1abd9d;
  $family-monospace: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;
  $family-sans-serif: 'Spoqa Han Sans', Lato, Roboto, Oxygen, Ubuntu, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;

  @import '~bulma';
  @import '~font-awesome/css/font-awesome.css';

  *:focus {
    outline: none;
  }

  #app {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  main {
    flex: 1 0 auto;
  }
</style>
