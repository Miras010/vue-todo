<template>
  <div>
    <form @submit.prevent>
      <ui-input v-model="post.title" placeholder="Title"/>
      <ui-input v-model="post.body" placeholder="Desc"/>
      <Button @click="createPost">Add post</Button>
    </form>
  </div>
</template>
<script>
import UiInput from "./ui/uiInput";
import axios from 'axios'

export default {
  components: {UiInput},
  data() {
    return {
      post: {
        title: '',
        body: ''
      }
    }
  },
  methods: {
    createPost() {
      this.$emit('create', this.post)
      this.post = {
        title: '',
        body: ''
      }
    },

  }
}
</script>
