<template lang="pug">
  nav.nav.has-shadow: .container
    .nav-left
      a.nav-item(href='https://github.com/ChalkPE/resume') Résumé
      a.nav-item(@click='modalOpen = true') ID Picture

    .modal(:class='modalOpen && `is-active`')
      .modal-background(@click='modalOpen = false')
      .modal-content: p.image: img(src='http://i.imgur.com/JaIkDmv.jpg')
      button.modal-close(@click='modalOpen = false')
</template>

<script>
  export default {
    data: () => ({
      modalOpen: false
    })
  }
</script>

<style lang="css"></style>
