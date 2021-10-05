<template>
  <div class="py-4 lg:py-6 px-3 lg:px-6">
    <h1 class="text-xl font-bold lg:text-3xl" style="padding: 8px">Manage Bookings</h1>
    <Bookings />
  </div>
</template>

<script>
import Bookings from "@/components/AllBookings.vue"
export default {
  components:{
    Bookings
  },
  created(){
    this.$store.commit('showMobileNav', false)
  }

}
</script>

<style scoped>
.cardbg{
  background-color: #27293d;
  color:  #9a9a9a
}
.inputbox{
  background-color: #27293d;
  border-color: #2b3553;
  border-width: 1px
}
input, select, textarea{
  background-color: #27293d;
}
input::placeholder{
  color: #344675;
}
input:focus{
  background-color: #1d253b;
  color: white
}
button{
  background-image: linear-gradient(to bottom left,#e14eca,#ba54f5,#e14eca);
  background-color: #e14eca;
  color: white;
  bottom: 20px;
  right: 20px
}
</style>