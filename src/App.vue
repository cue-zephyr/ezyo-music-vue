<template>
  <div id="app">
    <nav-menu/>
    <router-view class="router-view"/>
    <svg-filters/>
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
  background-image: linear-gradient( #5f2b2b, #1b111d);
  flex-direction: row;
  height: 100vh;
}
.router-view {
  flex: 1;
}
@media only screen and (min-width:768px) {
  #app {
    display: flex;
  }
}
</style>
