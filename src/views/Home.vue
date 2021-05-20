<template>
  <div class="home">

    <div>
      <div class="flex flex-wrap">
        <div class="w-full mx-3 p-4 font-bold uppercase text-center border-b-2">Scegli quello che vuoi</div>
      </div>
    </div>
    <Categories v-on:showProducts="showProducts" v-if="isCategories" />
    <Products v-bind:category_id="category_id" v-if="isProducts" />
  </div>
</template>

<script>
// @ is an alias to /src
import Categories from '@/components/Categories'
import Products from '@/components/Products'

export default {
  name: 'Home',
  components: { Categories, Products },
  data(){
    return{
      isCategories: true,
      isProducts: false,
      category_id: 1,
    }
  },
  methods:{
    showProducts(category_id){
      this.isCategories = false;
      this.isProducts = true;
      this.category_id = category_id;
    }
  }
}
</script>
