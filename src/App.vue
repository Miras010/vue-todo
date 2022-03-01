<template>
  <div class="app">
    <navbar/>
    <router-view></router-view>
  </div>
</template>

<script>
// Если используешь alias, то тогда стоит использовать его везде
import navbar from "@/components/navbar"

export default {
	name: 'App',
  components: {
    navbar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 12px;
}
</style>
