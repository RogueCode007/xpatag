<template>
  <div class="py-4 lg:py-6 px-3 lg:px-6 lg:flex lg:justify-between" style="color: #454545">
    <div class="leftcont">
      <RecentBookings />
      <Setup />
    </div>
    <div class="rightcont">
      <Profile />
      <Share />
    </div>
  </div>
</template>

<script>
import RecentBookings from "@/components/RecentBookings"
import Setup from "@/components/Setup"
import Profile from "@/components/Profile"
import Share from "@/components/ShareService"
export default {
  components: {RecentBookings, Setup, Profile, Share},
  data(){
    return {
      
    }
  },
  methods:{
   
  },
  created(){
    this.$store.commit('showMobileNav', false)
  }
}
</script>

<style scoped>
@media only screen and (min-width: 1028px){
  .leftcont{
    flex: 0 0 70%
  }
  .rightcont{
    flex: 0 0 25%
  }
}
</style>