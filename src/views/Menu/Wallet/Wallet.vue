<template>
  <div class="py-4 lg:py-6 px-3 lg:px-6">
    <div class="lg:flex justify-between items-center">
        <h1 class="text-black font-bold text-2xl lg:text-3xl">Wallet</h1>
        <div class="flex gap-4 mt-4 lg:mt-0">
            <router-link to="/" class="mt-4 lg:mt-0 p-2 border text-center border-solid text-sm" style="border-radius: 22px; color: #52B95E; border-color: #52B95E">Bank Settings</router-link>
            <router-link to="/" class="mt-4 lg:mt-0 p-2 border text-center border-solid text-sm" style="border-radius: 22px; color: #52B95E; border-color: #52B95E">Withdraw Funds</router-link>
        </div>
    </div>
    <div class="cont mt-4 py-2 lg:pb-20">
        <div class="border-b border-solid flex gap-10 lg:justify-start px-3">
          <router-link to="/app/dashboard/wallet/payment" class="text-gray-500 text-xs py-2 lg:text-base">Wallet Payments</router-link>
          <router-link to="/app/dashboard/wallet/transactions" class="lg:ml-5 py-2 text-gray-500 text-xs lg:text-base">Transactions</router-link>
        </div>
        <router-view></router-view>
      </div> 
  </div>
</template>

<script>
export default {
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