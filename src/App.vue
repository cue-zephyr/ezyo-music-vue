<template>
  <div id="app">
    <nav-menu>
      <img id="logo" src="./assets/logo.svg" alt="ezyo music logo"/>
    </nav-menu>
    <router-view/>
  </div>
</template>

<script>
import NavMenu from './components/NavMenu'
export default {
  name: 'NavMenu',
  components: {
    "nav-menu": NavMenu
  }
}
</script>

<style>
#app {
  
}
#logo { width: 100px;}
</style>
