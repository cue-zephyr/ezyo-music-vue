<template>
<div class="content">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: 'Content'
}
</script>

<style scoped>
.content {
  /*background-image: linear-gradient( #ac759a, #6e5f86);*/
  /*background-image: linear-gradient( #757fac, #494c6d);*/
  color: #efefef;
  font-family: Inconsolata;
  height: 100vh;
  width: 100%;
}
.content * {
}
</style>
