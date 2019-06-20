<template>
  <section class="instagram__image">
    <img :src="image_object.images.standard_resolution" />
  </section>
</template>

<script>
export default {
  props: ['image_object']
}
</script>

<style scoped>

</style>
