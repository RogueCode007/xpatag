<template>
  <div class="py-4 lg:py-6 px-3 lg:px-6">
    <div class="flex justify-between items-center">
      <h1 class="text-black font-bold text-2xl lg:text-3xl">My Profile</h1>
      <router-link to="/app/dashboard/profile/update" class="mt-4 lg:mt-0 p-2 border text-center border-solid text-sm" style="border-radius: 22px; color: #52B95E; border-color: #52B95E">Update Profile</router-link>
    </div>
    <div class="cont mt-4 py-2 lg:pb-20">
        <div class="border-b border-solid flex justify-between lg:justify-start px-3 lg:px-6">
          <router-link to="/app/dashboard/profile/personal" class="text-gray-500 py-2 text-xs lg:text-base">Personal Information</router-link>
          <router-link to="/app/dashboard/profile/professional" class="lg:ml-5 py-2 text-gray-500 text-xs lg:text-base">Professional Information</router-link>
          <router-link to="/app/dashboard/profile/ratings" class="lg:ml-5 py-2 text-gray-500 text-xs lg:text-base">Ratings</router-link>
        </div>
        <router-view></router-view>
      </div> 
  </div>
</template>

<script>
import axios from 'axios'
import baseURL from "@/main"
import {mapState} from 'vuex'
export default {
  computed:{
    ...mapState({
      userId: state => state.user.user_id,
      profile : state => state.profile.professionalProfile
    })
  },
  methods:{
    getProfile(){
      this.$store.commit('startLoading')
      axios.get(`${baseURL}/expert/profile/${this.userId}`)
      .then((res)=>{
        this.$store.commit('setProfessionalProfile', res.data.data.profile)
        this.$store.commit('endLoading')
      })
      .catch((err)=>{
        this.$store.dispatch('handleError', err)
      })
    }
  },
  mounted(){
    // if(Object.keys(this.profile).length == 0){
      this.getProfile()
    // }
  },
  created(){
    this.$store.commit('showMobileNav', false)
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