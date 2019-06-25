<template>
  <section class="instagram__image">
    <img :src="product.productImage">
  </section>
</template>

<script>
export default {
  props: ['product']
}
</script>

<style scoped>
.instagram__image {
  border: 1px solid #000;
  width: 100%;
  height: 100%;
  margin: 1rem 0;
}

.instagram__image img {
  border-style: none;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
