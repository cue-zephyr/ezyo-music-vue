import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    activeRoute: 'nothing',
    scrollPosition: 0,
    viewHeight: 0
  },
  mutations: {
    setActiveRoute (state, payload) {
      state.activeRoute = payload.route
    },
    setScrollPosition (state, payload) {
      state.scrollPosition = payload.scrollPosition
    },
    setViewHeight (state, payload) {
      state.viewHeight = payload.viewHeight
    }
  }
})
