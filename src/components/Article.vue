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
    padding: 20px 2%;
}
article h1, .content h2 {
  font-family: Bai Jamjuree;
}
article h1 {
  font-size: 2em;
  text-transform: uppercase;
}
article h2 {
  font-size: 1.8em;
}
article p {
  font-size: 1em;
}
img, iframe {
  margin: 14px 0;
}
@media only screen and (min-width:768px) {
  article {
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    padding: 0 10%;
  }
  article h1 {
    font-size: 4em;
  }
  article h2 {
    font-size: 3em;
  }
  article p {
    font-size: 1.3em;
  }
}
@media only screen and (min-width:1280px) {
  article {
    padding: 0 20%;
  }
}
</style>
