<template>
  <div id="nav">
    <nav>
      <ul>
        <router-link title="Ezyo Music home" tag="li" class="home" to="/">
            <img id="logo" src="../assets/logo.svg" alt="ezyo music logo"/>
            <menu-btn txt="home"/>
        </router-link>
        <router-link title="learn about me" tag="li" class="button" to="/about">
          <menu-btn txt="about"/>
        </router-link>
        <router-link title="listen to my music" tag="li" class="button" to="/music">
          <menu-btn txt="music"/>
        </router-link>
        <router-link title="what Ezyo can do for you" tag="li" class="button" to="/services">
            <menu-btn txt="services"/>
          </router-link>
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
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}
nav {
  background-image: linear-gradient(#686868, #2f2f2f) ;
}
nav ul {
  align-items: center;
  display: flex;
  flex-direction: row;
  margin: 0 4px;
  width: 100%;
}
#logo {
  display: none;
  width: 50px;
}
#nav nav ul li {
  flex: 1;
  flex-direction: row;
  text-align: center;
}

@media only screen and (min-width:768px) {
  #nav {
    /*background-image: url("../assets/vw-checkerboard.svg");*/
    /*background-image: url("../assets/carbon-fiber.svg");*/
    background-size: 2%;
    display: flex;
    height: 100vh;
    overflow: hidden;
    position: relative;
    width: 200px;
  }
  nav {
    align-content: center;
    box-shadow: 2px 0px 2px rgba(0,0,0,0.5);
    display: flex;
    height: 100%;
    justify-content: center;
    padding: 40px 20px;
    position: fixed;
    top: 0;
    left: 0;
  }
  nav ul {
    flex-direction: column;
  }
  #logo {
    animation: bounce 0.8s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    display :block;
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
    flex-direction: column;
    margin: 10px 0;
  }
}
</style>
