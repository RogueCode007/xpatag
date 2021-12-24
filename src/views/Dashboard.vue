<template>
  <div class="home">
    <div class="wrapper w-full">
      <div class="l-modal block lg:hidden" v-if="$store.state.showMobileNav">
        <MobileNav />
      </div>
      <div class="aside hidden lg:block w-full border-r border-solid border-gray-200" style="box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.04);">
        <TheSidebar />
      </div>
      <div class="p-3 flex justify-between lg:hidden" style="background-color: #fff">
        <font-awesome-icon icon="bars" class="text-3xl text-black" @click="$store.commit('showMobileNav', true)"/>
        <svg width="80" height="39" viewBox="0 0 117 39" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M59.3758 26.0005L55.2615 19.63L59.1103 13.4871H56.2095L53.8206 17.4307L51.4127 13.4871H48.493L52.3986 19.63L48.2465 26.0005H51.1663L53.8206 21.8483L56.475 26.0005H59.3758ZM61.087 26.0005H63.6466V21.5829H65.789C68.4055 21.5829 70.3014 19.9144 70.3014 17.5255C70.3014 15.1177 68.4055 13.4871 65.789 13.4871H61.087V26.0005ZM63.6466 19.3457V15.7433H65.789C66.9456 15.7433 67.685 16.4638 67.685 17.5255C67.685 18.6062 66.9835 19.3457 65.789 19.3457H63.6466ZM78.9029 26.0005H81.652L76.0779 13.2596H75.2247L69.6316 26.0005H72.3808L73.0823 24.37H78.2014L78.9029 26.0005ZM77.3103 22.2654H73.9734L75.6418 18.0374L77.3103 22.2654ZM84.7602 26.0005H87.3198V15.8002H91.3392V13.4871H80.7597V15.8002H84.7602V26.0005ZM99.677 26.0005H102.426L96.852 13.2596H95.9988L90.4058 26.0005H93.1549L93.8564 24.37H98.9755L99.677 26.0005ZM98.0844 22.2654H94.7475L96.416 18.0374L98.0844 22.2654ZM103.137 19.7438C103.08 23.3272 106.151 26.3038 109.83 26.228C111.138 26.228 112.313 25.9246 113.356 25.299C114.418 24.6733 115.233 23.8391 115.802 22.8342V19.1371H109.792V21.3554H113.242V22.3792C112.541 23.3461 111.384 23.9339 109.943 23.9339C107.46 23.9339 105.772 22.1706 105.772 19.7438C105.772 17.3549 107.403 15.6296 109.792 15.6296C111.233 15.6296 112.389 16.2363 113.28 17.4686L115.1 15.9708C113.887 14.2455 112.029 13.2596 109.83 13.2596C106.132 13.2027 103.061 16.1415 103.137 19.7438Z" fill="#585858"/>
          <path d="M15.0479 8.30127L0 32.8766C2.78995 30.5615 9.20685 25.504 12.5548 23.7944C16.7397 21.6574 18.0753 26.9109 18.5205 27.7122C18.9658 28.5136 22.7945 34.7465 26.8014 32.7876C30.0069 31.2204 29.2648 27.8606 28.4932 26.3766L15.0479 8.30127Z" fill="#2D9759"/>
          <path d="M31.9315 25.3767L20 9.88356C28.1918 17.2205 41.3402 6.3516 46.8904 0L31.9315 25.3767Z" fill="#CCCD34"/>
        </svg>
      </div>
      <div class="w-full overflow-x-hidden" style="background-color: #fff">
        <div class="">  
          <transition name="fade" mode="out-in">
            <router-view :key="$route.path"></router-view>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TheSidebar from '@/components/TheSidebar.vue'
import MobileNav from '@/components/MobileNav.vue'

export default {
  components:{
    TheSidebar, MobileNav
  },
  
}
</script>
<style scoped>
.home{
  height: 100%
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
  .wrapper{
    display: grid;
    grid-template-columns: 272px auto;
    grid-template-rows: auto;
    min-height: 100vh;
    width: 100%;
  }
 
}

</style>