<template>
   <div class="py-4 lg:py-6 px-3 lg:px-6">
     <div class="lg:flex items-center">
          <router-link to="/app/dashboard/services" class="flex items-center" style="color:#52B95E"> 
              <svg class="mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.7">
                <path d="M19 12H5" stroke="#52B95E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 19L5 12L12 5" stroke="#52B95E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
              </svg>
              Back
          </router-link>
          <h1 class="mt-4 lg:mt-0 lg:ml-5 text-black font-bold text-2xl">Create new service</h1>
      </div>
      <div class="cont mt-4 py-4">
        <div class="border-b border-solid flex justify-between lg:justify-start px-3">
          <router-link to="/app/dashboard/services/create/1" class="text-gray-500 pb-2">Service Setup</router-link>
          <router-link to="/app/dashboard/services/create/2" class="lg:ml-5 text-gray-500 pb-2">Service Packages</router-link>
        </div>
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
export default {
 
}
</script>

<style scoped>
.cont{
  border: 1px solid #DCDCDC;
  box-sizing: border-box;
  border-radius: 10px;
  color: #454545;
  min-height: 100vh
}
.router-link-exact-active{
  border-bottom: 2px solid #52B95E;
}
/* @media only screen and (min-width: 1280px){
  .cont{
    min-height: 120vh;
  }
} */
</style>