<template>
  <div>
    <Header />
    <div class="">
      <img class="w-3/12 mx-auto" alt="Vue logo" src="./assets/logo-pizzeria.jpg">
    </div>
  </div>
  <router-view/>
</template>
<script>
  import Header from '@/components/Header'
  export default {
    data(){
      return {
      }
    },
    components: { Header },
    methods:{
      setMobile()
      {
        if(window.innerWidth < 1024){
          this.$store.commit('setIsMobile',true);
        }
        else{
          this.$store.commit('setMenuOpen');
        }
      },
    },
    mounted() {
      this.setMobile()
    }

  }
</script>

<style>

</style>
