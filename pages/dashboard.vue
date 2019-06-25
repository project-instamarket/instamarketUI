<template>
  <div class="dashboard-container">
    <h1 class="dashboard__store-name">
      {{ full_name }}'s Store
    </h1>
    <p>@{{ username }}</p>
    <a :href="igUrl" target="_blank" class="dashboard__profile-link">instagram.com/{{ username }}</a>

    <Spinner v-if="loading" class="spinner" />
    <ImageContainer v-else :userMedia="userMedia" />

    <Footer />
  </div>
</template>

<script>
import Noty from 'noty'
import { mapActions } from 'vuex'

import Footer from '~/components/Footer.component.vue'
import ImageContainer from '~/components/ImageContainer.component.vue'
import Spinner from '~/components/Spinner.component.vue'
import { notyOptions } from '../utils/options.util.js'

export default {
  components: {
    Footer,
    Spinner,
    ImageContainer
  },
  data() {
    return {
      full_name: null,
      profile_picture: null,
      username: null
    }
  },
  computed: {
    igUrl() {
      return `https://instagram.com/${this.username}`
    },
    loading() {
      const { loading } = this.$store.state.userModule
      return loading
    },
    userMedia() {
      const { media: userMedia } = this.$store.state.userModule
      return userMedia
    }
  },
  async created() {
    try {
      await this.fetchUserMedia()
    } catch (error) {
      const errorMessage = error.message || 'Error fetching user media'
      new Noty({
        ...notyOptions,
        type: 'error',
        text: errorMessage
      }).show()
    }
  },
  mounted() {
    const { full_name, profile_picture, username } = this.$store.state.userModule.user
    this.full_name = full_name
    this.profile_picture = profile_picture
    this.username = username
  },
  methods: {
    ...mapActions({
      fetchUserMedia: 'userModule/fetchUserMedia'
    })
  },
  middleware: 'authenticate'
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
  .spinner {
    flex: 1
  }
  .dashboard__profile-link {
    color: #000;
  }
</style>
