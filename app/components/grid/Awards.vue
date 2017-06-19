<template lang="pug">
  .content
    h2 Awards

    timeline(v-for='a in awards', :key='a.name', :name='a.name',
      :date='a.date', :href='a.href', :description='a.prize')
</template>

<script>
  import Timeline from '../Timeline.vue'

  export default {
    components: { Timeline },
    data: () => ({
      awards: [
        {
          name: '제1회 디미고 해카톤 대회',
          href: 'https://github.com/hex-random',
          prize: '은상',
          date: '2016년 12월'
        }
      ]
    })
  }
</script>

<style lang="scss" scoped></style>
