<template>
  <h3>The ToDo list app</h3>
  <post-form @create="create" />
  <post-list @remove="remove" :posts="allPosts"/>
</template>

<script>
import postList from '@/components/postList'
import postForm from '@/components/postForm'

import {mapGetters, mapActions, mapMutations} from "vuex";

export default {
  components: {
    postList, postForm
  },
  computed: mapGetters(['allPosts']),
  methods: {
    ...mapMutations(['createPost', 'removePost']),
    create(post){
      this.createPost(post)
    },
    remove(post){
      this.deletePost(post.id)
    },
    ...mapActions(['getData', 'deletePost'])
  },

  mounted() {
    // await this.fetchData(10)
    this.getData(5)
  }

}
</script>

<style lang="scss">
* {
  font-size: 12px;
}
</style>
