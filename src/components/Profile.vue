<template>
  <div class="mt-4 lg:mt-0 cont p-3">
       <div class="flex items-start">
          <div class="imgcont relative">
            <object :data="image" type="image/png">
              <img :src="placeholder" alt="Placeholder image" style="border-radius: 50%; height: 100%">
            </object>
          </div>
          <div class="ml-3">
            <p class="text-sm font-semibold">{{name}}</p>
            <div class="flex mt-2">
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0)">
                    <path d="M9.625 4.5835C9.625 7.79183 5.5 10.5418 5.5 10.5418C5.5 10.5418 1.375 7.79183 1.375 4.5835C1.375 3.48948 1.8096 2.44027 2.58318 1.66668C3.35677 0.893093 4.40598 0.458496 5.5 0.458496C6.59402 0.458496 7.64323 0.893093 8.41682 1.66668C9.1904 2.44027 9.625 3.48948 9.625 4.5835Z" stroke="#111111" stroke-width="1.22222" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M5.5 5.9585C6.25939 5.9585 6.875 5.34289 6.875 4.5835C6.875 3.8241 6.25939 3.2085 5.5 3.2085C4.74061 3.2085 4.125 3.8241 4.125 4.5835C4.125 5.34289 4.74061 5.9585 5.5 5.9585Z" stroke="#111111" stroke-width="1.22222" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <defs>
                    <clipPath id="clip0">
                    <rect width="11" height="11" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
                <p class="ml-2  text-xs text-gray-300">Lagos, Nigeria</p>
            </div>
          </div>
        </div>
        <router-link to="/app/dashboard/settings" class="block text-green-500 mt-4">Edit profile</router-link>
        <router-link to="/app/dashboard/messages" class="block text-green-500 mt-4">View Inbox</router-link>
        <p class="text-green-500 mt-4">Invite friends</p>
        <p class="text-green-500 mt-4">Earning - #0.00</p>
  </div>
</template>

<script>
import placeholder from "@/assets/img/Signup/person.png"
export default {
    data(){
        return {
            placeholder: placeholder,
        }
    
    },
    computed:{
      name(){
        return this.$store.state.user.firstname.toUpperCase() + " " + this.$store.state.user.lastname.toUpperCase()
      },
      image(){
        return this.$store.state.user.image
      }
    }
}
</script>

<style scoped>
.imgcont{
  width: 65px;
  height: 65px;
  border-radius: 50%;
  /* border: 1px solid red */
}
.cont{
    border: 1px solid #DCDCDC;
    box-sizing: border-box;
    border-radius: 10px;
}
</style>