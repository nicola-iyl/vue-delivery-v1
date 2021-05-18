<template>
  <div class="home">

    <div>
      <div class="flex flex-wrap">
        <div class="w-full mx-3 p-4 font-bold uppercase text-center border-b-2">Scegli quello che vuoi</div>
      </div>
    </div>
    <Categories v-if="isCategories" />
  </div>
</template>

<script>
// @ is an alias to /src
import Categories from '@/components/Categories'

export default {
  name: 'Home',
  components: { Categories },
  data(){
    return{
      isCategories: true,
    }
  }
}
</script>
