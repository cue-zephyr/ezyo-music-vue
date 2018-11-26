<template>
  <div id="app">
    <svg-filters/>
    <nav-menu/>
    <router-view class="router-view"/>
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
}
.router-view {
  flex: 1;
}
</style>
