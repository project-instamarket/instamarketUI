<template>
  <div>
    <section class="landing-page-header">
      <img src="~assets/images/logo.png" class="im-logo">
      <h1 class="im-header-description">
        Redefining social shopping
      </h1>

      <h2 class="im-header-description">
        Let your followers shop your instagram feed
      </h2>
      <a :href="igLink" class="landing-btn">Take A Dive</a>
    </section>

    <section class="landing-page-features">
      <div class="feature">
        <img src="~assets/svg/select-posts.svg">
        <span class="feature-heading">Select Posts</span>
        <span>
          Convert your followers into customers as they shop
          any selected posts
        </span>
      </div>

      <div class="feature">
        <img src="~assets/svg/create-shop.svg">
        <span class="feature-heading">Create your shop</span>
        <span>
          Display your feeds on your own personal shop customized
          for you
        </span>
      </div>

      <div class="feature">
        <img src="~assets/svg/cart.svg">
        <span class="feature-heading">Easy checkout</span>
        <span>
          Wondering how they'll pay?
          That's sorted, customers can checkout easily on your shop
        </span>
      </div>

      <div class="feature">
        <img src="~assets/svg/transport.svg">
        <span class="feature-heading">Up a notch!</span>
        <span>
          Hassle free delivery!
          Tell us how your clients how they'll get their items
        </span>
      </div>
    </section>

    <section class="instagram-feed">
      <h3>Feed From Instagram</h3>
      <span>
        Import your posts and description, and prices
        and you're all set!
      </span>
    </section>

    <section class="instagram-grid">
      <h2>Shopping made easy</h2>
      <div class="instagram-feed-grid">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import Noty from 'noty'
import Footer from '~/components/Footer.component.vue'
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
      console.log(isAuthenticated, '<====== isAUthed')
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
  components: { Footer },
  methods: {
    ...mapActions({
      authenticateUser: 'authModule/authenticateUser'
    })
  }
}
</script>

<style scoped>
  /*
    the css of this component is built with mobile-first
    implementation in mind
  */
  .landing-page-header {
    height: 70vh;
    width: 100vw;
    background: linear-gradient(0deg,rgba(255, 255, 255, 0.5),rgba(255, 255, 255, 0.2)), url("~assets/images/landing_man.jpg");
    color: #000;
    position: relative;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  .im-logo {
    margin-top: 2rem;
    margin-bottom: 10rem;
    width: 12rem;
  }

  .im-header-description {
    font-size: 2.2rem;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: center;
    color: inherit;
  }

  h2.im-header-description {
    font-weight: 200;
    font-size: 1.5rem;
    margin: 0.5rem 0;
  }

  .landing-btn {
    text-decoration: none;
    outline: none;
    cursor: pointer;
    color: #FFF;
    border: 0;
    background: #000;
    padding: 0.5rem 2.5rem;
    text-transform: uppercase;
    margin: 3rem 0;
    font-size: 1.5rem;
    letter-spacing: 0.15rem;
  }

  .landing-page-features {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 3rem 0;
    padding: 0 1rem;
  }

  .landing-page-features .feature {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    padding: 1rem 3.5rem;
  }

  .landing-page-features img {
    width: 3rem;
    height: 5rem;
  }

  .landing-page-features .feature .feature-heading {
    font-size: 1.4rem;
    font-weight: bold;
  }

  .instagram-feed {
    background: #fbfbfb;
    height: 50rem;
    margin-top: 2rem;
    text-align: center;
    padding: 3rem;
  }

  .instagram-feed h3 {
    font-size: 1.8rem;
    font-weight: bold;
  }

  .instagram-grid {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .instagram-grid h2 {
    margin: 2rem 0;
    font-weight: bold;
  }

  .instagram-feed-grid {
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
  }

  .instagram-feed-grid div {
    width: 45%;
    margin: 0.5rem;
    height: 10rem;
    border: 1px solid #0b0b0b;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background: url('https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTU0MTU0MTc3NzkzMTA3MzU1/beyonce-attends-tidal-x-1015-on-october-15-2016-in-new-york-city-photo-by-theo-wargogetty-images-for-tidal-sqaure.jpg');
  }

  /* desktop view */
  @media (min-width: 769px) {
    .landing-page-header {
      background-size: cover;
    }

    .im-logo {
      margin-top: 5rem;
      margin-bottom: 10rem;
    }

    .im-header-description {
      font-size: 3.5rem;
    }

    .landing-btn {
      margin: 6rem 0;
    }

    .landing-page-features {
      padding: 0 2rem;
    }

    .landing-page-features .feature {
      width: 25%;
    }

    .instagram-feed-grid div {
      width: 20%;
    }
  }
</style>
