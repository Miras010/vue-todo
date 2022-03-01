<template>
  <div v-if="posts.length > 0">
    <transition-group name="list" tag="ul">
      <post v-for="post in posts"
            :post="post"
            :key="post.id"
            @remove="$emit('remove', post)"
      />
    </transition-group>

  </div>
  <h2 v-else>
    There is no posts
  </h2>
</template>
<script>
import post from "./post";

export default {
  components: {
    post,
  },
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>
<style>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
