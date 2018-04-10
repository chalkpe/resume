<template lang="pug">
  #app
    main
      section.hero.is-primary.is-bold
        .hero-body: .container
          h1.title Junyoung Park
          h2.subtitle Front-end web developer

      section.section
        .container: .columns
          .column.is-3
            resume-skills
            resume-contacts

          .column.is-8.is-offset-1
            resume-projects
</template>

<script>
import 'bulma/css/bulma.css'
import 'font-awesome/css/font-awesome.css'
import WebFont from 'webfontloader'

import ResumeSkills from './components/grid/Skills.vue'
import ResumeContacts from './components/grid/Contacts.vue'
import ResumeProjects from './components/grid/Projects.vue'

export default {
  components: {
    ResumeSkills,
    ResumeContacts,
    ResumeProjects
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

<style>
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
