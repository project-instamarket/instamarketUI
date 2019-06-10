<template>
  <v-toolbar flat v-if="isAuthenticated">
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
</template>

<script>
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

<style scoped>
  .v-toolbar__title {
    margin: 0 auto;
  }
  .theme--light.v-toolbar {
    background: #fff;
  }
  .nav-logo {
    width: 6rem;
    height: 2.5rem;
    vertical-align: middle;
    cursor: pointer;
  }
  .cart-logo {
    width: 2.5rem;
    height: 2.5rem;
    cursor: pointer;
  }
  .profile {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .profile-picture {
    width: 3rem;
    height: 3rem;
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
