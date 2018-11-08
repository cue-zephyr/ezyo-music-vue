<template>
  <div id="app">
    <nav-menu/>
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
#app {
  display: flex;
  flex-direction: row;
  height: 100vh;
}
.content {
  color: #efefef;
  flex: 1;
  font-family: Inconsolata;
}
.content * {
  margin: 16px;
  text-align: center;
}
.content h1, .content h2 {
  font-family: Bai Jamjuree|;
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