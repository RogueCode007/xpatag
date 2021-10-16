<template>
  <div class="whitebox bg-white px-4 py-6 lg:flex lg:py-0 lg:px-0">
    <div class="relative w-full imgbox lg:w-1/3">
      <div class="gradient w-full absolute top-0 left-0" style="height: 100%"></div>
      <svg  class="absolute logo" width="135" height="45" viewBox="0 0 135 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M68.5105 29.1538L63.7633 21.8033L68.2043 14.7153H64.8572L62.1007 19.2656L59.3224 14.7153H55.9534L60.46 21.8033L55.669 29.1538H59.038L62.1007 24.3629L65.1634 29.1538H68.5105ZM70.4851 29.1538H73.4384V24.0566H75.9104C78.9294 24.0566 81.1171 22.1314 81.1171 19.375C81.1171 16.5967 78.9294 14.7153 75.9104 14.7153H70.4851V29.1538ZM73.4384 21.4752V17.3186H75.9104C77.2449 17.3186 78.0981 18.1499 78.0981 19.375C78.0981 20.622 77.2887 21.4752 75.9104 21.4752H73.4384ZM91.0418 29.1538H94.2139L87.7822 14.4528H86.7978L80.3442 29.1538H83.5163L84.3257 27.2724H90.2324L91.0418 29.1538ZM89.2042 24.8441H85.3539L87.2791 19.9657L89.2042 24.8441ZM97.8003 29.1538H100.754V17.3842H105.391V14.7153H93.1843V17.3842H97.8003V29.1538ZM115.012 29.1538H118.184L111.752 14.4528H110.768L104.314 29.1538H107.486L108.296 27.2724H114.203L115.012 29.1538ZM113.174 24.8441H109.324L111.249 19.9657L113.174 24.8441ZM119.004 21.9346C118.938 26.0692 122.482 29.5038 126.727 29.4163C128.236 29.4163 129.592 29.0663 130.796 28.3444C132.021 27.6225 132.961 26.6599 133.618 25.5004V21.2345H126.683V23.7941H130.664V24.9754C129.855 26.0911 128.52 26.7693 126.858 26.7693C123.992 26.7693 122.045 24.7348 122.045 21.9346C122.045 19.1781 123.926 17.1874 126.683 17.1874C128.345 17.1874 129.68 17.8874 130.708 19.3094L132.808 17.5811C131.408 15.5904 129.264 14.4528 126.727 14.4528C122.461 14.3872 118.917 17.778 119.004 21.9346Z" fill="white"/>
        <path d="M17.363 9.57837L0 37.9345C3.21918 35.2633 10.6233 29.4277 14.4863 27.4551C19.3151 24.9893 20.8562 31.051 21.3699 31.9756C21.8836 32.9003 26.3014 40.0921 30.9247 37.8318C34.6233 36.0236 33.7671 32.1469 32.8767 30.4345L17.363 9.57837Z" fill="white"/>
        <path d="M36.844 29.2808L23.0769 11.4041C32.529 19.8699 47.7002 7.32877 54.1043 0L36.844 29.2808Z" fill="white"/>
      </svg>
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
.logo{
  top: 20px;
  left: 20px;
  z-index: 10;
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
