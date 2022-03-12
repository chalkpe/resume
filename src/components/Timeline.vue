<template lang="pug">
  .timeline
    .content(v-for='work in works' :key='work.name')
      h4.title.is-4 {{ work.name }}
      .projects(v-for='history of work.data' :key='history.name' v-if='history.projects.length')
        h5.title.is-5 {{ history.year }}년
        resume-project(v-for='project in history.projects' :project='project' :key='project.name')
</template>

<script>
import timeline from '../data/timeline'
import ResumeProject from './Project.vue'

const types = [
  {
    name: '경력사항',
    filter: (p) => p.type === 'work'
  },
  {
    name: '프로젝트',
    filter: (p) => p.type === undefined
  }
]

export default {
  components: { ResumeProject },

  data: () => ({ timeline }),
  computed: {
    works: function () {
      return types.map(({ name, filter }) => ({
        name,
        data: this.timeline.map((h) => ({
          ...h,
          projects: h.projects.filter(filter)
        }))
      }))
    }
  }
}
</script>
