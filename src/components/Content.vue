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
  margin-bottom: 50px;
  width: 100%;
}
@media only screen and (min-width:768px) {
  .content {
    
  }
}
</style>
