<template lang="pug">
  .content
    h2 Projects

    .projects: .project(v-for='project in projects')
      .project-icon.icon
        i.fa.fa-check-circle(v-if='project.year')
        i.fa.fa-circle-o(v-else)

      .project-content.year(v-if='project.year')
        p.title.is-4 {{ project.year }}년
      .project-content(v-else)
        a(:href='project.href') {{ project.name }}
        p.period {{ project.period }}
        p.description {{ project.description }}
        p.tags: span.tag(v-for='s in project.tags') {{ s }}
</template>

<script>
import projects from '../../projects'
export default {
  data: () => ({ projects })
}
</script>

<style lang="scss">
@import '~bulma';

.projects {
  .project {
    display: flex;
    position: relative;
    margin-bottom: 1.6rem;

    &:not(:last-child)::before {
      content: '';
      background-color: $grey-lighter;

      width: 0.2em;
      height: 100%;

      top: 1.5em;
      left: 0.63em;
      position: absolute;
    }

    .project-icon {
      flex: 0 0 auto;
      i { color: $primary; }
    }

    .project-content {
      flex: 1 1 auto;
      padding: 0 0 0.2rem 1.5rem;

      .name {
        font-size: 1.2em;
      }

      .period {
        color: $grey-light;
        margin-bottom: 0.5em;
      }

      .tags {
        margin-top: -0.5em;

        .tag:not(:last-of-type) {
          margin-right: 0.5em;
          margin-bottom: 0.5em;
        }
      }
    }
  }
}
</style>
