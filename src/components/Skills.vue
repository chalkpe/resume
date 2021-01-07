<template lang="pug">
  .content
    h2 Skills
    .tag(v-for='skill in skills') {{ skill }}
</template>

<script>
export default {
  data: () => ({
    skills: ['Node.js', 'Vue.js', 'React', 'Koa', 'hapi', 'webpack', 'MongoDB', 'Firebase']
  })
}
</script>

<style lang="scss" scoped>
  .tag {
    margin: 0.5em;
  }
</style>
