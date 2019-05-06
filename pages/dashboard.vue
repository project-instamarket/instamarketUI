<template>
  <div>
    <h1>{{ title }} Title {{ code }}</h1>
    <p>Dashboard!!</p>
  </div>
</template>

<script>
export default {
  asyncData(context) {
    const code = context.query.code
    return { title: 'Instamarket', code }
  },
  middleware: 'authenticate'
}
</script>

<style scoped>

</style>
