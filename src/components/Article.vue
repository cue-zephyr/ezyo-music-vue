<template>
<div id="article">
  <article>
    <slot></slot>
  </article>
</div>
</template>

<script>
export default {
  name: 'Article'
}
</script>

<style scoped>
article {
    background-image: linear-gradient( #b65252, #3c253f);
    height: 100vh;
}
</style>
