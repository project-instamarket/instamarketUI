<template>
  <!-- import navbar here and only show when the user is logged in -->
  <div>
    <v-toolbar flat>

      <v-toolbar-title>
        <img src="~assets/images/logo.png" class="nav-logo">
      </v-toolbar-title>

      <section class="profile">
        <div class="user-info">
          <div class="user-info-name">
            <span>{{ full_name }}</span>
           <span>@{{ username }}</span>
          </div>
          <img :src="profile_picture" class="profile-picture">
        </div>

        <img src="~assets/svg/cart.svg" class="cart-logo">
      </section>

    </v-toolbar>
    <nuxt />
  </div>
</template>

<script>
import 'noty/lib/noty.css'
import 'noty/lib/themes/mint.css'

export default {
  data() {
    const isAuthenticated = this.$store.getters['authModule/isUserAuthenticated']
    const { full_name, profile_picture, username } = this.$store.getters['userModule/userInfo']

    return {
      isAuthenticated,
      full_name,
      profile_picture,
      username
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
  * {
    box-sizing: border-box;
  }
  body {
    width: 100vw;
    height: 100vh;
  }
  .v-toolbar__title {
    margin: 0 auto;
  }
  .theme--light.v-toolbar {
    background: #fff;
  }
  .nav-logo, .cart-logo {
    width: 6rem;
  }
  .profile {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .profile > img {
    border: 2px solid #0b0b0b;
  }
  .profile-picture {
    width: 3rem;
    border: 2px solid black;
    border-radius: 50%;
  }
  .user-info {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 1rem;
  }
  .user-info-name {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
