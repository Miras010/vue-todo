<template>
    <button class="btn">
      <slot></slot>
    </button>
</template>

<script>
export default {
  name: 'Button'
}
</script>

<style scoped>
  .btn {
    margin: 15px 0;
    padding: 10px 15px;
    background: none;
    color: teal;
    border: 1px solid teal;
    width: 100px;
  }
</style>
