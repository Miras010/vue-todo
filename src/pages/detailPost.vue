<template>
  <div>
    <h2>Detail post page</h2>
    <h3>Title: {{post.title}}</h3>
    <p>{{post.body}}</p>
  </div>
</template>

<script>

export default {
	// не забывай давать названия компонентам
	name: 'DetailPosts',
	// Если в роуте есть динамические параметры, то в компоненте из можно получить через props
	props: {
		id: {
			type: String
		}
	},
	// Если значение зависит от изменения других данных, то лучше рассчитывать его через компьютед
  computed: {
		post() {
			return this.$store.getters.detailPost(Number(this.id))
		}
  }
}
</script>
