<template>
  <div>
    <h2>Detail post page</h2>
    <h3>Title: {{post.title}}</h3>
    <p>{{post.body}}</p>
  </div>
</template>

<script>

export default {
  data() {
    return {
      post: this.$store.getters.detailPost(Number(this.$route.params.id))
    }
  }
}
</script>

<style scoped>

</style>
