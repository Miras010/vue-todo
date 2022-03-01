<template>
<!--	Для чего нужен дополнительный div?-->
	<div class="post">
		<div>
			<h3>Title: {{ post.title }}</h3>
			<h3>Body: {{ post.body }}</h3>
		</div>
		<Button @click="$router.push(`/posts/${post.id}`)">Open</Button>
		<Button @click="$emit('remove', post)">Delete</Button>
	</div>
</template>

<script>

export default {
	name: 'Post',
  props: {
    post: {
      required: true,
      type: Object
    }
  },
	// Во Vue3 появилась возможность объявлять emits
	// рекомендую про нее не забывать
	emits: ['remove']
}
</script>

<style scoped>
.post {
  border: 2px teal solid;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 50px;
}
</style>
