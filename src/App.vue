<template>
  <div id="app">
    <nav-menu>
      <img id="logo" src="./assets/logo.svg" alt="ezyo music logo"/>
    </nav-menu>
    <router-view/>
  </div>
</template>

<script>
import NavMenu from "./components/NavMenu";
export default {
  name: "App",
  components: {
    "nav-menu": NavMenu
  }
};
</script>

<style>
@keyframes bounce {
  from { transform: translate3d(0, 0, 0);     }
  to   { transform: translate3d(0, -10px, 0); }
}
#app {
}
#logo {
  animation: bounce 0.8s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  width: 100px;
}
</style>
