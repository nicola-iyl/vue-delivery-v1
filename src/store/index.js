import { createStore } from 'vuex'

export default createStore({
  state(){
    return {
      isMobile: false,
      menuOpen: false,
      cart:[
        {product_id:'1',nome:'Pizza Margherita',qta:2,prezzo:12.5},
        {product_id:'2',nome:'Pizza 4 Stagioni',qta:2,prezzo:10.5}
      ]
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
