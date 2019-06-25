<template>
  <section class="dashboard__store-grid">
    <Overlay v-for="product in userMedia" :key="product.imageId">
      <InstagramImage :product="product" />

      <template v-slot:overlayContent>
        <ImageOptions />
      </template>
    </Overlay>
  </section>
</template>

<script>
import InstagramImage from '~/components/InstagramImage.component.vue'
import Overlay from '~/components/Overlay.component.vue'
import ImageOptions from '~/components/ImageOptions.component.vue'

export default {
  components: { InstagramImage, Overlay, ImageOptions },
  props: {
    userMedia: Array
  }
}
</script>

<style scoped>
p { color: white; }
.dashboard__store-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 20rem));
  grid-template-rows: repeat(auto-fit,  minmax(14rem, 18rem));
  grid-gap: 1rem;
  width: 100%;
  padding: 2rem;
  margin: 1rem;
  flex: 1;
  grid-auto-rows: minmax(15rem, 20rem);
}
</style>
