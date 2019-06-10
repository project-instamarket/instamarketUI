<template>
  <div class="dashboard-container">
    <h1 class="dashboard__store-name">{{ full_name }}'s Store</h1>
    <p>@{{ username }}</p>
    <a :href="igUrl">instagram.com/{{ username }}</a>

    <section class="dashboard__store-grid">
      <div class="dashboard__store-item" />
      <div class="dashboard__store-item" />
      <div class="dashboard__store-item" />
      <div class="dashboard__store-item" />
      <div class="dashboard__store-item" />
      <div class="dashboard__store-item" />
      <div class="dashboard__store-item" />
    </section>

    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/Footer.component.vue'

export default {
  components: { Footer },
  data() {
    return {
      full_name: null,
      profile_picture: null,
      username: null
    }
  },
  mounted() {
    const { full_name, profile_picture, username } = this.$store.state.userModule.user
    this.full_name = full_name
    this.profile_picture = profile_picture
    this.username = username
  },
  middleware: 'authenticate',
  computed: {
    igUrl() {
      return `https://instagram.com/${this.username}`
    }
  }
}
</script>

<style scoped>
  .dashboard-container {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
  .dashboard__store-name {
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
  .dashboard__store-grid {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 1rem;
    width: 100%;
    padding: 2rem;
  }
  .dashboard__store-item {
    border: 1px solid #000;
    width: 45%;
    height: 18rem;
    margin: 1rem 0;
  }

  @media (min-width: 769px) {
    .dashboard__store-grid {
      padding: 2rem;
    }
    .dashboard__store-item {
      width: 15%;
    }
  }
</style>
