<template>
  <div>
    <Navbar />
    <nuxt />
  </div>
</template>

<script>
import 'noty/lib/noty.css'
import 'noty/lib/themes/mint.css'

import Navbar from '~/components/Navbar.component.vue'

export default {
  components: { Navbar },
  middleware: 'authenticate'
}
</script>

<style>
  html {
    font-family: 'Poppins', sans-serif !important;
    line-height: 1.5;
    font-size: calc(0.85rem + 5.3125*(100vw - 801px)/1700);
  }
  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  body {
    width: 100vw;
    height: 100vh;
    transition: 1s ease-in-out;
  }
</style>
