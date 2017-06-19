<template lang="pug">
  .column.content
    h2 Likes
      a.sort(@click='sortBy("name")') name
      a.sort(@click='sortBy("priority")') priority

    transition-group(name='like')
      .like(v-for='like in likes', :key='like.name')
        p {{ like.name }}
          span.tag(v-for='tag in like.tags') {{ tag }}
        progress.progress.is-small(max='16', :value='like.priority')
</template>

<script>
  export default {
    data: () => ({
      likes: [
        {
          name: 'JavaScript',
          priority: 15,
          tags: ['Node.js', 'Vue.js', 'Vuex', 'webpack', 'Socket.IO', 'Koa']
        },

        {
          name: 'Linux',
          priority: 11,
          tags: ['Ubuntu', 'Vim']
        },

        {
          name: 'HTML',
          priority: 13,
          tags: ['HTML5', 'Canvas', 'Pug (Jade)', 'Handlebars', 'EJS']
        },

        {
          name: 'CSS',
          priority: 13,
          tags: ['Responsive', 'Sass', 'Less']
        },

        {
          name: 'Java',
          priority: 9,
          tags: ['Stream', 'NIO', 'Gradle', 'Minecraft']
        },

        {
          name: 'PHP',
          priority: 2,
          tags: ['Composer', 'CodeIgniter', 'Slim']
        }
      ]
    }),

    created () {
      this.sortBy('priority')
    },

    methods: {
      sort (compareFunc, descending = false) {
        this.likes.sort(compareFunc)
        if (descending) this.likes.reverse()
      },

      sortBy (field) {
        switch (field) {
          case 'priority':
            this.sort((a, b) => a.priority - b.priority, true)
            break

          case 'name':
            this.sort((a, b) => a.name.localeCompare(b.name))
            break
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~bulma';

  .like-move {
    z-index: 100;
    transition: transform 1s;
  }

  h2 .sort {
    font-size: 0.5em;
    margin-left: 0.5em;
    color: $text-light;
  }

  .like {
    &:not(:last-of-type) {
      margin-bottom: 1.5em;
    }

    p {
      margin-bottom: 0.7em;
    }

    .tag {
      margin-left: 0.5em;

      &:first-of-type {
        margin-left: 1em;
      }
    }
  }
</style>
