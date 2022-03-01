<template>
  <h3>The ToDo list app</h3>
  <post-form @create="createPost" />
  <post-list @remove="removePost" :posts="allPosts"/>
</template>

<script>
import postList from '@/components/postList'
import postForm from '@/components/postForm'

import {mapGetters, mapActions, mapMutations} from "vuex";

export default {
	// не забывай давать названия компонентам
	name: 'PostsPages',
	emits: ['remove'],
  components: {
    postList,
		postForm
  },
  computed: mapGetters(['allPosts']),
  methods: {
    ...mapMutations(['createPost', 'removePost']),
		// Можно напрямую передавать методы из Vuex
    // create(post){
    //   this.createPost(post)
    // },
    // remove(post){
    //   this.removePost(post)
    // },
    ...mapActions(['fetchData'])
  },

  async mounted() {
    await this.fetchData(10)
  }

}
</script>

<style lang="scss">
* {
  font-size: 12px;
}
</style>
