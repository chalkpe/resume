<template lang="pug">
  nav.navbar: .container
    .navbar-menu
      a.navbar-item(href='https://github.com/ChalkPE/resume') Résumé
      a.navbar-item(@click='open = true') ID Picture

    .modal(:class='open && `is-active`')
      .modal-background(@click='open = false')
      .modal-content: p.image: img#face(src='http://i.imgur.com/JaIkDmv.jpg')
      button.modal-close(@click='open = false')
</template>

<script>
  export default {
    data: () => ({ open: false })
  }
</script>

<style lang="css">
  #face {
    border-radius: 2em;
  }
</style>
