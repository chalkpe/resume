<template lang="pug">
  .content
    h2 Profile
    p 새로운 것들에 늘 가슴이 두근거리는 작은 웹 개발자입니다. 달콤한 간식을 먹으며 느긋하게 코딩하는 그 순간이 세상에서 제일 행복해요!

    .level.is-mobile(v-for='contact in contacts'): .level-left
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
          text: 'chalkpe.github.io',
          icon: 'link',
          href: 'https://chalkpe.github.io/'
        },

        {
          text: 'chalkpe@gmail.com',
          icon: 'envelope-o',
          href: 'mailto:chalkpe@gmail.com'
        },

        {
          text: '(+82) 10-9169-4579',
          icon: 'phone',
          href: 'tel:821091694579'
        },

        {
          text: '한국디지털미디어고등학교',
          icon: 'graduation-cap',
          href: 'https://dimigo.hs.kr'
        },

        {
          text: '경기도 고양시 일산동구',
          icon: 'home',
          href: 'https://goo.gl/maps/R6VFT7ZjQfq'
        },

        {
          text: 'Saturday, 17 June 2000',
          icon: 'birthday-cake',
          href: '#'
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
