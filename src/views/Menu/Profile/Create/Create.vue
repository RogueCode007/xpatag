<template>
  <div class="px-3 lg:px-6 pt-4">
      <router-link to="/app/dashboard/profile/professional" class="text-green-500">Back to profiles</router-link>
      <div class=" pt-5 lg:flex lg:gap-10 lg:pr-10">
            <div class="lg:w-2/5">
                <h1 class="text-black font-bold text-2xl">Create Profile</h1>
                <p class="text-gray-500 text-sm mt-4">Now is your chance to shine. Make it clear to potential purchasers what you excel at and how you acquired your talents, certificates, and expertise.</p>
            </div>
            <div class="mt-8 lg:w-full rightbox">
                <router-view />
            </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@media only screen and (min-width: 1024px){
 
  .rightbox{
      max-width: 500px;
  }
 
}
</style>