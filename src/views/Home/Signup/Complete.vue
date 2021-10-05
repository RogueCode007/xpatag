<template>
  <div class="mt-4">
    <svg class="checkmark mx-auto" width="110" height="110" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M33.2645 45.1349C31.7462 43.4786 29.1237 43.3406 27.4674 44.8589C25.811 46.3772 25.673 48.9997 27.1913 50.656L48.0334 73.2924C48.8615 74.1206 49.8277 74.6727 50.9319 74.6727C50.9319 74.6727 50.9319 74.6727 51.07 74.6727C52.1742 74.6727 53.2784 74.2586 53.9685 73.4304L106.695 20.8422C108.351 19.1859 108.351 16.5633 106.695 15.045C105.038 13.5268 102.416 13.3887 100.898 15.045L51.208 64.5967L33.2645 45.1349Z" fill="url(#paint0_linear)"/>
        <path d="M105.729 50.7939C103.382 50.7939 101.588 52.5882 101.588 54.9347C101.588 80.6077 80.6077 101.588 54.9347 101.588C29.2617 101.588 8.28161 80.6077 8.28161 54.9347C8.28161 29.2617 29.2617 8.28162 54.9347 8.28162C57.2812 8.28162 59.0755 6.48727 59.0755 4.14081C59.0755 1.79435 57.2812 0 54.9347 0C24.7068 0 0 24.7068 0 54.9347C0 85.1626 24.7068 109.869 54.9347 109.869C85.1626 109.869 109.869 85.1626 109.869 54.9347C109.869 52.5882 108.075 50.7939 105.729 50.7939Z" fill="url(#paint1_linear)"/>
        <defs>
        <linearGradient id="paint0_linear" x1="23.5206" y1="-0.995322" x2="122.745" y2="59.2169" gradientUnits="userSpaceOnUse">
        <stop stop-color="#2EA05B"/>
        <stop offset="1" stop-color="#CCCD34"/>
        </linearGradient>
        <linearGradient id="paint1_linear" x1="-3.50972" y1="-26.8254" x2="147.994" y2="41.5275" gradientUnits="userSpaceOnUse">
        <stop stop-color="#2EA05B"/>
        <stop offset="1" stop-color="#CCCD34"/>
        </linearGradient>
        </defs>
    </svg>

    <h1 class="mt-4 font-bold text-2xl text-center">Account successfully created!</h1>
    <router-link to="/" class="inline-block text-center mt-10 outline-none py-2 w-full lg:w-4/5 lg:block lg:mx-auto text-white focus:outline-none" style="background-color: #52B95E; border-radius: 22px">Continue to profile</router-link>
  </div>
</template>

<script>
export default {
  data(){
    return {
    }
  },
  methods:{
    submit(){
      
    }
  }

}
</script>

<style scoped>
.checkmark{
    margin-top: 40px;
    
}
</style>