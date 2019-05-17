<template>
  <div id="landing-page-container">
    <section class="landing-page">
      <img src="~assets/images/logo.png" />
      <h1>Redefining social shopping.</h1>
      <h2>Let your followers shop your instagram feed</h2>
      <a :href="igLink" class="landing">Take A Dive</a>
    </section>

    <section class="landing-page-features">
      <div class="feature">
        <img src="~assets/svg/select-posts.svg" />
        <span class="feature-heading">Select Posts</span>
        <span>
          Convert your followers into customers as they shop
          any selected posts
        </span>
      </div>

      <div class="feature">
        <img src="~assets/svg/create-shop.svg" />
        <span class="feature-heading">Create your shop</span>
        <span>
          Display your feeds on your own personal shop customized
          for you
        </span>
      </div>

      <div class="feature">
        <img src="~assets/svg/cart.svg" />
        <span class="feature-heading">Easy checkout</span>
        <span>
          Wondering how they'll pay?
          That's sorted, customers can checkout easily on your shop
        </span>
      </div>

      <div class="feature">
        <img src="~assets/svg/transport.svg" />
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

    <section class="footer">
      <div class="footer-links">
        <a href="#">Integration</a>
        <a href="#">Terms & Conditions</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Legal</a>
        <a href="#">Shopping Policy</a>
        <a href="#">Help</a>
      </div>
      <span>Copyright &copy; {{new Date().getFullYear()}}. Instamarket.co</span>
    </section>
  </div>
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
  .landing-page {
    height: 70vh;
    width: 100vw;
    position: relative;
    background: linear-gradient(0deg,rgba(255, 255, 255, 0.5),rgba(255, 255, 255, 0.2)), url("~assets/images/landing_man.jpg");
    color: #000;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .landing-page img {
    position: absolute;
    top: 0;
    margin-top: 2rem;
    width: 10%;
  }

  .landing {
    text-decoration: none;
    outline: none;
    cursor: pointer;
    color: #FFF;
    border: 0;
    background: #000;
    padding: 0.5rem 2.5rem;
    text-transform: uppercase;
    margin: 1.5rem 0;
    font-size: 1.5rem;
    letter-spacing: 0.15rem;
  }

  .landing-page h1 {
    font-size: 4rem;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: left;
    color: inherit;
    margin-top: 3rem;
  }

  .landing-page h2 {
    font-size: 2rem;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.52;
    letter-spacing: normal;
    text-align: center;
    margin-bottom: 3rem;
  }

  .landing-page-features {
    /* @media (max-width: 400px) {
      .flex-grid,
      .flex-grid-thirds {
        display: block;
        .col {
          width: 100%;
          margin: 0 0 10px 0;
        }
      }
    } */
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
  }

  .landing-page-features .feature {
    /* border: 1px solid #000; */
    width: 22%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .landing-page-features img {
    width: 10rem;
  }

  .landing-page-features .feature .feature-heading {
    font-size: 1.4rem;
    font-weight: bold;
  }

  .instagram-feed {
    background: #fbfbfb;
    height: 30rem;
    margin-top: 2rem;
    text-align: center;
    padding: 3rem;
  }

  .instagram-grid {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .instagram-grid h2 {
    margin: 3rem 0;
  }

  .instagram-feed-grid {
    padding: 0 2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    flex: 1;
  }

  .instagram-feed-grid div {
    width: 15%;
    margin: 0.5rem;
    height: 10rem;
    border: 1px solid #0b0b0b;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background: url('https://s3.amazonaws.com/thumbnails.illustrationsource.com/huge.17.85300.JPG');
  }

  .footer {
    margin: 2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .footer .footer-links {
    display: inline-flex;
    justify-content: space-around;
    width: 60%;
    margin: 1rem 0;
  }

  .footer .footer-links a {
    color: #0b0b0b;
    text-decoration: none;
  }

  .footer span {
    font-size: 0.8rem;
  }

  @media (min-width: 768px) and (max-width: 1000px) {
    .landing-page h1 {
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
    .landing-page h1 {
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
    .landing-page h1 {
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
