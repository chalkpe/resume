<template lang="pug">
  .column.content
    h2 Contact
    .level(v-for='contact in contacts'): .level-left
      span.level-item.icon: i.fa(:class='`fa-${contact.icon}`')
      a.level-item(:href='contact.href') {{ contact.text }}
</template>

<script>
  export default {
    data: () => ({
      contacts: [
        {
          text: '@ChalkPE',
          icon: 'github-alt',
          href: 'https://github.com/ChalkPE'
        },

        {
          text: '+82 10-9169-4579',
          icon: 'phone',
          href: 'tel:821091694579'
        },

        {
          text: 'chalkpe@gmail.com',
          icon: 'envelope-o',
          href: 'mailto:chalkpe@gmail.com'
        }
      ]
    })
  }
</script>

<style lang="scss" scoped>
  .level:not(:last-child) {
    margin-bottom: 1rem;
  }
</style>
