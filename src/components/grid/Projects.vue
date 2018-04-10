<template lang="pug">
  .content
    h2 Projects

    .projects: .project(v-for='project in projects')
      .project__icons.icon
        i.project__icon.fa.fa-check-circle(v-if='project.year')
        i.project__icon.fa.fa-circle-o(v-else)

      .project__content.year(v-if='project.year')
        p.title.is-4 {{ project.year }}년
      .project__content(v-else)
        a.project__name(:href='project.href') {{ project.name }}
        p.project__period {{ project.period }}
        p.project__description {{ project.description }}
        p.project__tags
          span.project__tag.tag(v-for='s in project.tags') {{ s }}
</template>

<script>
import projects from '../data/projects'
export default { data: () => ({ projects }) }
</script>

<style lang="scss">
  @import '~bulma';

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

    &__icons {
      flex: 0 0 auto;
    }

    &__icon {
      color: $primary;
    }

    &__content {
      flex: 1 1 auto;
      padding: 0 0 0.2rem 1.5rem;
    }

    &__name {
      font-size: 1.2em;
    }

    &__period {
      color: $grey-light;
      margin-bottom: 0.5em !important;
    }

    &__tags {
      margin-top: -0.5em;
    }

    &__tag:not(:last-of-type) {
      margin-right: 0.5em;
      margin-bottom: 0.5em;
    }
  }
</style>
