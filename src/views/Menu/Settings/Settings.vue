<template>
  <div class="py-4 lg:py-6 px-3 lg:px-6">
    <div class="lg:flex justify-between items-center">
        <h1 class="text-black font-bold text-2xl lg:text-3xl">Settings</h1>
        <button @click="logout" class="mt-4 lg:mt-0 p-2 px-4 border text-center border-solid text-sm" style="border-radius: 22px; color: #000; border-color: #000">Log Out</button>
    </div>
    <div class="cont mt-4 py-2 lg:pb-20">
        <div class="border-b border-solid flex gap-4 lg:gap-10 lg:justify-start px-3">
          <router-link to="/app/dashboard/settings/account" class="text-gray-500 text-xs py-2 lg:text-base">Account</router-link>
          <router-link to="/app/dashboard/settings/security" class="lg:ml-5 py-2 text-gray-500 text-xs lg:text-base">Security</router-link>
          <!-- <router-link to="/app/dashboard/settings/notifications" class="lg:ml-5 py-2 text-gray-500 text-xs lg:text-base">Notifications</router-link>
          <router-link to="/app/dashboard/settings/password" class="lg:ml-5 py-2 text-gray-500 text-xs lg:text-base">Password</router-link>
          <router-link to="/app/dashboard/settings/help" class="lg:ml-5 py-2 text-gray-500 text-xs lg:text-base">Help</router-link> -->
        </div>
        <router-view></router-view>
      </div> 
  </div>
</template>

<script>
export default {
  created(){
    this.$store.commit('showMobileNav', false)
  },
  methods:{
    logout(){
      this.$store.dispatch('logoutUser')
      this.$router.push('/')
    }
  }
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
  color: #000;
  border-bottom: 2px solid #52B95E;
}
@media only screen and (min-width: 1024px){
  .cont{
    min-height: 120vh
  }
}
</style>