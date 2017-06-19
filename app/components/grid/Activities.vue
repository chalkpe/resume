<template lang="pug">
  .content
    h2 Activities

    timeline(v-for='a in activities',
      :key='a.name', :name='a.name',
      :href='a.href', :date='a.period', :description='a.role')
</template>

<script>
  import Timeline from '../Timeline.vue'

  export default {
    components: { Timeline },

    data: () => ({
      activities: [
        {
          name: 'JNJ Communications',
          href: 'https://facebook.com/jnjcomu',
          period: '2016년 - 현재',
          role: '교내 인트라넷 개발'
        },

        {
          name: '설리번 프로젝트',
          href: 'https://sullivanproject.in',
          period: '2016년',
          role: '선생님: HTML5 Canvas'
        }
      ]
    })
  }
</script>

<style lang="scss" scoped>
  @import '~bulma';

  p.description {
    color: $grey-light;
  }
</style>
