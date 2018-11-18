<template>
  <div id="nav">
    <nav>
      <ul>
        <router-link title="home" tag="li" class="home" to="/">
          <a>
            <img id="logo" src="../assets/logo.svg" alt="ezyo music logo"/>
          </a>
        </router-link>
        <router-link title="learn about me" tag="li" class="button" to="/about">
          <menu-btn txt="about"/>
        </router-link>
        <router-link title="listen to my music" tag="li" class="button" to="/music">
          <menu-btn txt="music"/>
        </router-link>
          <li class="button">
            <menu-btn state="disabled" txt="services"/>
          </li>
          <router-link title="contact me" tag="li" class="button" to="/contact">
            <menu-btn txt="contact" />
          </router-link>
        </ul>
      </nav>
    </div>
</template>

<script>
import MenuBtn from './MenuBtn'
export default {
  name: 'NavMenu',
  components: {
    'menu-btn': MenuBtn
  },
  data () {
    return {
      msg: 'Navigation menu here.'
    }
  }
}
</script>

<style scoped>
@keyframes bounce {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(0, -10px, 0);
  }
}
#nav {
  align-items: center;
  background-image: linear-gradient(#686868, #2f2f2f) ;
  /*background-image: url("../assets/vw-checkerboard.svg");*/
  background-image: url("../assets/carbon-fiber.svg");
  background-size: 2%;
  display: flex;
  height: 100vh;
  overflow: hidden;
}
nav {
  padding: 40px 20px;
}
#logo {
  animation: bounce 0.8s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  width: 100px;
}
#nav nav ul li {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 20px 0;
}
</style>
