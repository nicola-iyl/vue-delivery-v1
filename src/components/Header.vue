<template>
  <nav class="flex items-center justify-between flex-wrap bg-black p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      InyourLife Delivery
    </div>
    <div class="block lg:hidden">
      <button class="flex items-center px-3 py-2 border rounded  text-gray-300 hover:text-white hover:border-white" v-on:click="switchMenu">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
        </svg>
      </button>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <router-link v-if="menuOpen" to="/" class="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">Scegli quello che vuoi</router-link>
        <router-link v-if="menuOpen" to="/about" class="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">Scegli tipo di consegna</router-link>
        <router-link v-if="menuOpen" to="/about" class="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">Scegli l'orario</router-link>
      </div>
      <div class="hidden md:block">
        <ShoppingCartIcon class="h-5 w-5 text-gray-300 hover:text-white" />{{carts_num}}
      </div>
    </div>
  </nav>
</template>

<script>
import {ShoppingCartIcon} from '@heroicons/vue/solid'
export default {
  name: "Header",
  components: { ShoppingCartIcon },
  data(){
    return {
      carts_num: this.$store.state.cart.length,
    }
  },
  computed: {
    menuOpen() {
      return this.$store.state.menuOpen;
    },
  },
  methods:{
    switchMenu()
    {
      this.$store.commit('setMenuOpen')
    }
  },
  mounted() {
  }
}
</script>

<style scoped>

</style>