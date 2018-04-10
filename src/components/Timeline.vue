<template lang="pug">
  .notification
    a(:href='href') {{ name }}
    p.description
      span {{ date }}
      span(v-if='description') &nbsp;({{ description }})
</template>

<script>
  export default {
    props: ['name', 'href', 'date', 'description']
  }
</script>

<style lang="scss" scoped>
  @import '~bulma';

  p.description {
    color: $grey-light;
  }
</style>
