<template>
  <button :class="{ landing: landing }">
    {{ label }}
  </button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    landing: {
      default: false,
      type: Boolean
    }
  }
}
</script>

<style scoped>
.landing {
  cursor: pointer;
  border: 2px solid white;
  padding: 0.5rem 2.5rem;
  text-transform: uppercase;
  outline: none;
  margin: 1.5rem 0;
  font-size: 1.5rem;
  letter-spacing: 0.15rem;
}

@media (min-width: 768px) and (max-width: 1000px) {
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
@media (min-width: 320px) and (max-width: 480px) {
  .landing {
    margin: 0.5rem 0;
    letter-spacing: 0;
    padding: 0.5rem 1.5rem;
    font-size: 1rem;
  }
}
</style>
