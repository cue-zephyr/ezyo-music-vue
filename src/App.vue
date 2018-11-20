<template>
  <div id="app">
    <svg-filters/>
    <nav-menu/>
    <router-view/>
  </div>
</template>

<script>
import SvgFilters from './components/SvgFilters.vue'
import NavMenu from './components/NavMenu'
export default {
  name: 'App',
  components: {
    'nav-menu': NavMenu,
    'svg-filters': SvgFilters
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: row;
  height: 100vh;
  overflow: hidden;
}
.content {
  /*background-image: linear-gradient( #ac759a, #6e5f86);*/
  /*background-image: linear-gradient( #757fac, #494c6d);*/
  background-image: linear-gradient( #b65252, #3c253f);
  color: #efefef;
  flex: 1;
  font-family: Inconsolata;
  padding: 6px;
}
.content * {
  margin: 16px;
}
.content h1, .content h2 {
  font-family: Bai Jamjuree;
}
.content h1 {
  font-size: 4em;
}
.content h2 {
  font-size: 3em;
}
.content p {
  font-size: 1.3em;
}
</style>
