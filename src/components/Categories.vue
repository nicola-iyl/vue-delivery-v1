<template>
  <div class="card bg-white py-3 px-5 rounded-xl flex flex-col mb-5">
    <div class="w-full py-3" v-for="category in categories" :key="category.id">
      <button class="focus:outline-none w-full block text-gray-800 bg-gray-100 hover:bg-gray-400 font-bold text-sm py-2.5 px-5 border-2 rounded-md hover:shadow-lg">
        {{category.nome}}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Categories",
  data(){
    return{
      categories: [
        {id: 1, nome: 'Pizze'},
        {id: 2, nome: 'Panini'},
        {id: 3, nome: 'Bevande'},
      ],
    }
  },
  methods:{
    showProducts(){},
  }
}
</script>

<style scoped>

</style>