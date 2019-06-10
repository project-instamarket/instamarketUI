<template>
  <no-ssr>
    <v-toolbar v-if="isAuthenticated" flat>
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
  </no-ssr>
</template>

<script>
export default {
  data() {
    const { isAuthenticated } = this.$store.state.authModule
    const { full_name, profile_picture, username } = this.$store.state.userModule.user

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
    border: 2px solid #000;
    padding: 7px;
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
    border: 2px solid #000;
    height: 100%;
    box-sizing: border-box;
  }
  .user-info-name {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    margin-right: 0.5rem;
  }
  .user-info-name span {
    font-size: 0.9rem;
  }
  .user-info-name span:first-child {
    font-weight: bold;
  }
</style>
