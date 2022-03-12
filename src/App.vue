<template lang="pug">
  #app: main
    section.hero.is-primary.is-bold: .hero-body: .container
      h1.title Junyoung Park

    section.section: .container
      resume-contacts
      resume-timeline
</template>

<script>
import 'bulma/css/bulma.css'
import 'font-awesome/css/font-awesome.css'
import WebFont from 'webfontloader'

import ResumeContacts from './components/Contacts.vue'
import ResumeTimeline from './components/Timeline.vue'

export default {
  components: {
    ResumeContacts,
    ResumeTimeline
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
  * {
    word-break: keep-all;
  }

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

  .content:not(:last-child) {
    margin-bottom: 3rem;
  }
</style>
