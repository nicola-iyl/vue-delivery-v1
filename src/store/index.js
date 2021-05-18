import { createStore } from 'vuex'

export default createStore({
  state(){
    return {
      isMobile: false,
      menuOpen: false,
    }
  }
  ,
  mutations: {
    setIsMobile(state, payload) {
      state.isMobile = payload;
    },
    setMenuOpen(state) {
      state.menuOpen = !state.menuOpen;
    },
  },
  actions: {
  },
  modules: {
  }
})
