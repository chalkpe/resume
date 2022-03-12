<template lang="pug">
  .content
    h4.title.is-4 인적사항
    .level.is-mobile(v-for='c in contacts' :title='c.title'): .level-left
      span.level-item.icon: i.fa(:class='`fa-${c.icon}`')
      a.level-item(:href='c.href') {{ c.text }}
</template>

<script>
import contacts from '../data/contacts'
export default { data: () => ({ contacts }) }
</script>

<style lang="scss" scoped>
  .level:not(:last-child) {
    margin-bottom: 1rem;
  }
</style>
