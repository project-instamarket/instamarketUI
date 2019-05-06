<template>
  <!-- import navbar here and only show when the user is logged in -->
  <nuxt />
</template>

<script>
import 'noty/lib/noty.css'
import 'noty/lib/themes/mint.css'

export default {
  data() {
    return {
      isAuthed: false
    }
  }
}
</script>

<style>
  html {
    font-family: 'Poppins', sans-serif !important;
    line-height: 1.5;
    font-size: calc(14px + 5.3125*(100vw - 801px)/1700);
  }
  body {
    width: 100vw;
    height: 100vh;
  }
</style>
