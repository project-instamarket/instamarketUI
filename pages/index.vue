<template>
  <section id="landing-page">
    <h1>Redefining social shopping.</h1>
    <a :href="igLink" class="landing">Take A Dive</a>
  </section>
</template>

<script>
import Noty from 'noty'
import { mapActions } from 'vuex'

import { notyOptions } from '../utils/options.util.js'

const CLIENT_ID = process.env.IG_CLIENT_ID
const REDIRECT_URI = `${process.env.BASE_URL}`

export default {
  data() {
    return {
      igLink: `https://api.instagram.com/oauth/authorize/?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`
    }
  },
  mounted() {
    const { query: { code } } = this.$router.currentRoute
    const isAuthenticated = this.$store.getters['authModule/isUserAuthenticated']

    if (isAuthenticated) {
      this.$router.push('/dashboard')
    } else if (code) {
      return this.authenticateUser({ code })
        .then(() => this.$router.push('/dashboard'))
        .catch(() => new Noty({
          ...notyOptions,
          type: 'error',
          text: 'Error authenticating user.'
        }).show())
    }
  },
  methods: {
    ...mapActions({
      authenticateUser: 'authModule/authenticateUser'
    })
  }
}
</script>

<style lang="css" scoped>
  /* figure out a way to import images locally */
  #landing-page {
    height: 100vh;
    width: 100vw;
    position: relative;
    align-items: center;
    justify-content: center;
    background: linear-gradient(0deg,rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url("https://res.cloudinary.com/proton/image/upload/v1556763691/background_tvfkiu.jpg");
    color: #FFF;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .landing {
    text-decoration: none;
    outline: none;
    cursor: pointer;
    color: #FFF;
    border: 2px solid white;
    padding: 0.5rem 2.5rem;
    text-transform: uppercase;
    outline: none;
    margin: 1.5rem 0;
    font-size: 1.5rem;
    letter-spacing: 0.15rem;
  }

  h1 {
    font-size: 4.5rem;
    margin: 1.5rem 0;
  }

  @media (min-width: 768px) and (max-width: 1000px) {
    h1 {
      font-size: 3rem;
    }

    .landing {
      margin: 1rem 0;
      letter-spacing: 0;
    }
  }

  /*
    ##Device = Low Resolution Tablets, Mobiles (Landscape)
    ##Screen = B/w 481px to 767px
  */
  @media (min-width: 481px) and (max-width: 767px) {
    h1 {
      font-size: 2rem;
    }

    .landing {
      margin: 1rem 0;
      letter-spacing: 0;
      padding: 0.5rem 1.5rem;
      font-size: 1rem;
    }
  }

  /*
    ##Device = Most of the Smartphones Mobiles (Portrait)
    ##Screen = B/w 320px to 479px
  */
  @media (min-width: 10px) and (max-width: 480px) {
    h1 {
      font-size: 1.5rem;
    }

    .landing {
      margin: 0.5rem 0;
      letter-spacing: 0;
      padding: 0.5rem 1.5rem;
      font-size: 1rem;
    }
  }
</style>
