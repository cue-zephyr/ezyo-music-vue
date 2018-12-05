<template>
  <div id="app">
    <nav-menu/>
    <transition name="fade">
      <router-view class="router-view"/>
    </transition>
  </div>
</template>

<script>
import NavMenu from './components/NavMenu'
export default {
  name: 'App',
  components: {
    'nav-menu': NavMenu,
  },
  mounted () {
    this.setActiveRoute()
    this.setViewHeight()
    this.$nextTick(() => {
      window.addEventListener('scroll', () => {
        this.setScrollPos()
      })
      window.addEventListener('resize', () => {
        this.setViewHeight()
      })
    })
  },
  methods: {
    setActiveRoute: function () {
      this.$store.commit('setActiveRoute', {
        route: this.$route.name
      })
    },
    setScrollPos: function () {
      this.$store.commit('setScrollPosition', {
        scrollPosition: window.scrollY
      })
    },
    setViewHeight: function () {
      this.$store.commit('setViewHeight', {
        viewHeight: window.innerHeight
      })
    }
  },
  watch: {
    $route (to, from) {
      this.setActiveRoute()
    }
  }
}
</script>

<style>
#app {
  background-color: #008080;
  flex-direction: row;
  height: 100vh;
}
::selection {
  background: #ffae00; /* WebKit/Blink Browsers */
}
::-moz-selection {
  background: #ffae00; /* Gecko Browsers */
}
.router-view {
  flex: 1;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
@media only screen and (min-width:768px) {
  #app {
    display: flex;
  }
}
</style>
