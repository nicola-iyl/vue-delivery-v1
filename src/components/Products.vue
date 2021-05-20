<template>
  <div class="card bg-white py-3 px-5 rounded-xl flex flex-col mb-5">
    <div v-for="product in products" :key="product.id" class="mb-2 py-4 px-4 w-full mx-auto bg-white rounded-xl shadow-md space-y-2 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
      <div class="text-center space-y-2 sm:text-left">
        <div class="space-y-0.5">
          <p class="text-lg text-black font-semibold">
            {{product.nome}}
          </p>
          <p class="text-gray-500 font-medium">
            Product Engineer
          </p>
        </div>
        <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"><ShoppingCartIcon class="h-5 w-5 text-gray-900" /></button>
      </div>
    </div>
  </div>
</template>

<script>
import {ShoppingCartIcon} from '@heroicons/vue/solid'
export default {
  name: "Products",
  components: {ShoppingCartIcon},
  props:{
    category_id: Number,
  },
  data(){
    return{
      products:[
        {id:1,category_id:1,nome:'Pizza Margherita'},
        {id:2,category_id:1,nome:'Pizza 4 stagioni'},
        {id:3,category_id:1,nome:'Pizza ai funghi'},
      ]
    }
  },
  methods:{
  }
}
</script>

<style scoped>

</style>