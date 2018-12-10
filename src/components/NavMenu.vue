<template>
  <div id="nav">
    <nav>
      <ul>
        <!--<li>scroll position: {{ scrollPosition }}</li>
        <li>active route {{ activeRoute }}</li>-->
        <li><router-link title="Ezyo Music home" class="home" to="/">
            <img id="logo" src="../assets/logo.svg" alt="ezyo music logo"/>
        </router-link></li>
        <li><router-link title="learn about me" class="button" to="/about">
        about
        </router-link></li>
        <li><router-link title="listen to my music" class="button" to="/music">
        music
        </router-link></li>
        <li><router-link title="what Ezyo can do for you" class="button" to="/services">
        services
          </router-link></li>
          <li><router-link title="contact me" class="button" to="/contact">
          contact
          </router-link></li>
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
  },
  computed: {
    activeRoute () {
      return this.$store.state.activeRoute
    },
    scrollPosition () {
      return this.$store.state.scrollPosition
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
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9001;
}
nav ul {
  align-items: center;
  display: flex;
  margin: 0 4px;
  width: 100%;
}
#logo {
  cursor: pointer;
  display: none;
  width: 50px;
}
#nav nav ul li {
  flex: 1;
  flex-direction: row;
}
.router-link-exact-active:not(.home) {
  background-color: #72694a;
}
.router-link-exact-active .button {
  opacity: 0.6;
}
@media only screen and (min-width:768px) {
  #nav {
    /*background-image: url("../assets/vw-checkerboard.svg");*/
    /*background-image: url("../assets/carbon-fiber.svg");*/
    background-size: 2%;
    display: flex;
    height: 100vh;
    
    position: relative;
    width: 200px;
  }
  nav {
    align-content: center;
    box-shadow: 2px 0px 2px rgba(0,0,0,0.5);
    display: flex;
    height: 100%;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 200px;
  }
  nav ul {
    flex-direction: column;
    justify-content: center;
  }
  #logo {
    animation: bounce 0.8s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    display: block;
    width: 100px;
  }
  .home {
  line-height: 0;
  font-size: 0;
  color: transparent;
  }
  .home * {
    display: none;
  }
  #nav nav ul li {
    align-items: center;
    flex: 0;
    flex-direction: column;
    margin: 10px 0;
  }
  .router-link-exact-active {
    filter: url('../assets/filters.svg#white-glow');
  }
  .router-link-exact-active:not(.home) {
    background-color: #efe0af;
  }
  .router-link-exact-active.home {
    background-color: transparent;
  }
}
@media only screen and (min-width:1600px) {
  #nav {
        width: 300px;
  }
  nav {
    width: 300px;
  }
  #logo {
    width:150px;
  }
}
</style>
