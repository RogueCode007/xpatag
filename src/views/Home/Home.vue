<template>
  <div class="whitebox bg-white px-4 py-6 lg:flex lg:py-0 lg:px-0">
    <div class="relative w-full imgbox lg:w-1/3">
      <div class="gradient w-full absolute top-0 left-0" style="height: 100%"></div>
    </div>
    <div class="bg-white lg:w-2/3 lg:mx-auto lg:px-48 xl:px-60 lg:pt-16 viewbox lg:flex lg:items-center lg:justify-center" >
     <transition name="fade" mode="out-in">
      <router-view></router-view>
     </transition>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  components:{
    // Step
  },
  data(){
    return {
      
    }
  },
  methods:{
    submit(){
      this.$router.push('/app')
    }
  }
}
</script>
<style scoped>
.gradient{
  /* border: 1px solid red; */
  background: linear-gradient(114.28deg, #3656C6 -9.79%, #CD34A2 104.57%);
  opacity: 0.6;
  mix-blend-mode: multiply;
}
.imgbox{
  height: 300px;
  background-image: url('~@/assets/img/Signup/image 4.png');
  background-size: cover;
  background-repeat: no-repeat;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
@media only screen and (min-width: 1024px){
  .whitebox{
    min-height: 100vh;
    /* border: 1px solid red */
  }
  .imgbox{
    align-self: stretch;
    height: auto
  }
  
}
</style>
