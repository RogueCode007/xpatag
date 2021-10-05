<template>
  <div class="px-3 lg:px-6 py-10">
     <form @submit.prevent>
         <div class="lg:flex lg:justify-between">
             <label class="font-semibold">Full Name</label>
             <div class="mt-2">
                 <input type="text" class=" bg-white w-full py-2 px-3 rounded outline-none border focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent">
             </div>
         </div>
         <hr class="mt-4">
         <div class="mt-4 lg:flex lg:justify-between">
             <label class="font-semibold">Email</label>
             <div class="mt-2">
                 <input type="email" class=" bg-white w-full py-2 px-3 rounded outline-none border focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent">
             </div>
         </div>
         <hr class="mt-4">
         <div class="mt-4 lg:flex lg:justify-between">
             <div>
                 <label class="font-semibold">Online Status</label>
                 <p class="text-sm text-gray-500 lg:w-2/3">When online, your Services are visible under the Online search filter.</p>
             </div>
             <div class="mt-2" style="min-width: 206px">
                    <select class="bg-white w-full py-2 px-3 rounded outline-none border focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent">
                        <option>Offline</option>
                        <option>Online</option>
                    </select>             
             </div>
         </div>
         <hr class="mt-4">
         <button class="text-white p-3 w-full mt-10 mb-4" style="background: #52B95E;border-radius: 22px;">Update Settings</button>
     </form>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@media only screen and (min-width: 1024px){
    form{
        max-width: 500px;
        position: relative
    }
    button{
    width: 200px;
    position: absolute;
    bottom: -90px;
    right: 0
  }
}

</style>