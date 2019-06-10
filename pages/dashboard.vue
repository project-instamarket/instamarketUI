<template>
  <div>
    <h1>Welcome to your Instamarket Dashboard, {{ full_name }}</h1>
    <p>Your instagram handle is {{ username }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      full_name: null,
      profile_picture: null,
      username: null
    }
  },
  mounted() {
    const { full_name, profile_picture, username } = this.$store.getters['userModule/userInfo']
    this.full_name = full_name
    this.profile_picture = profile_picture
    this.username = username
  },
  middleware: 'authenticate'
}
</script>

<style scoped>

</style>
