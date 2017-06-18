<template lang="pug">
  .container
    h1.title Junyoung Park
    h2.subtitle Full-stack web developer

    .content
      h2 Contact
      ul
        li.level(v-for='contact in contacts'): .level-left
          span.level-item.icon: i.fa(:class='`fa-${contact.icon}`')
          a.level-item(:href='contact.href') {{ contact.text }}
    p
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
          text: 'chalkpe@gmail.com',
          icon: 'envelope-o',
          href: 'mailto:chalkpe@gmail.com'
        },

        {
          text: '+82 10-9169-4579',
          icon: 'phone',
          href: 'tel:821091694579'
        }
      ]
    })
  }
</script>

<style lang="scss">
</style>
