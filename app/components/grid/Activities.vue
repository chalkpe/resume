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
          name: '테이블매니저',
          href: 'http://tablemanager.io/',
          period: '2017.07 - 2017.08',
          role: '인턴'
        },

        {
          name: 'JNJ Communications',
          href: 'https://facebook.com/jnjcomu',
          period: '2016 - 2017',
          role: '교내 인트라넷 개발'
        },

        {
          name: '설리번 프로젝트',
          href: 'https://sullivanproject.in',
          period: '2016',
          role: '선생님: HTML5 Canvas'
        }
      ]
    })
  }
</script>

<style lang="scss" scoped></style>
