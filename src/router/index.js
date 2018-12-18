import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Music from '@/components/Music'
import Services from '@/components/Services'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/music',
      name: 'Music',
      component: Music
    },
    {
      path: '/services',
      name: 'Services',
      component: Services
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
  
})
