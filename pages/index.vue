<template>
  <section id="landing-page">
    <h1>Redefining social shopping.</h1>
    <Button label="Take A Dive" landing />
  </section>
</template>

<script>
import Button from '~/components/Button.vue'
// import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Button
  },
  metaInfo: {
    title: 'Home',
    // override the parent template and just use the above title only
    titleTemplate: null
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

  h1 {
    font-size: 4.5rem;
    margin: 1.5rem 0;
  }

  @media (min-width: 768px) and (max-width: 1000px) {
    h1 {
      font-size: 3rem;
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
  }

  /*
    ##Device = Most of the Smartphones Mobiles (Portrait)
    ##Screen = B/w 320px to 479px
  */
  @media (min-width: 320px) and (max-width: 480px) {
    h1 {
      font-size: 1.5rem;
    }
  }
</style>
