<template>
  <div class="pt-4 pb-2 px-3 hidden lg:flex lg:items-center lg:justify-between " style="background-color: #fff; box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);">
      <!-- <form @submit.prevent="submit" class="flex items-center border border-gray-500 border-solid lg:border-0 rounded-md px-3 relative" style="border-radius: 41px">
        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.7099 19.2899L16.9999 15.6099C18.44 13.8143 19.1374 11.5352 18.9487 9.2412C18.76 6.94721 17.6996 4.81269 15.9854 3.27655C14.2713 1.74041 12.0337 0.919414 9.73283 0.982375C7.43194 1.04534 5.24263 1.98747 3.61505 3.61505C1.98747 5.24263 1.04534 7.43194 0.982375 9.73283C0.919414 12.0337 1.74041 14.2713 3.27655 15.9854C4.81269 17.6996 6.94721 18.76 9.2412 18.9487C11.5352 19.1374 13.8143 18.44 15.6099 16.9999L19.2899 20.6799C19.3829 20.7736 19.4935 20.848 19.6153 20.8988C19.7372 20.9496 19.8679 20.9757 19.9999 20.9757C20.1319 20.9757 20.2626 20.9496 20.3845 20.8988C20.5063 20.848 20.6169 20.7736 20.7099 20.6799C20.8901 20.4934 20.9909 20.2442 20.9909 19.9849C20.9909 19.7256 20.8901 19.4764 20.7099 19.2899ZM9.9999 16.9999C8.61544 16.9999 7.26206 16.5894 6.11091 15.8202C4.95977 15.051 4.06256 13.9578 3.53275 12.6787C3.00293 11.3996 2.86431 9.99214 3.13441 8.63427C3.4045 7.27641 4.07119 6.02912 5.05016 5.05016C6.02912 4.07119 7.27641 3.4045 8.63427 3.13441C9.99214 2.86431 11.3996 3.00293 12.6787 3.53275C13.9578 4.06256 15.051 4.95977 15.8202 6.11091C16.5894 7.26206 16.9999 8.61544 16.9999 9.9999C16.9999 11.8564 16.2624 13.6369 14.9497 14.9497C13.6369 16.2624 11.8564 16.9999 9.9999 16.9999Z" fill="#454545" fill-opacity="0.49"/>
        </svg>
        <input type="text" v-model="searchkeyword" placeholder="Search..." class="w-full ml-4 focus:outline-none focus-ring focus-ring-blue-200 outline-none" style="background-color: #fff">
        <button class="border-0">
          <svg class="ml-4" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" fill="#52B95E"/>
            <path d="M28.0916 26.9085L24.9999 23.8418C26.2 22.3455 26.7812 20.4462 26.6239 18.5346C26.4667 16.6229 25.583 14.8442 24.1545 13.564C22.7261 12.2839 20.8614 11.5998 18.944 11.6522C17.0266 11.7047 15.2022 12.4898 13.8459 13.8461C12.4896 15.2024 11.7044 17.0269 11.652 18.9443C11.5995 20.8617 12.2837 22.7263 13.5638 24.1548C14.8439 25.5832 16.6227 26.4669 18.5343 26.6242C20.446 26.7814 22.3453 26.2002 23.8416 25.0002L26.9083 28.0668C26.9857 28.1449 27.0779 28.2069 27.1794 28.2492C27.281 28.2915 27.3899 28.3133 27.4999 28.3133C27.6099 28.3133 27.7189 28.2915 27.8204 28.2492C27.9219 28.2069 28.0141 28.1449 28.0916 28.0668C28.2418 27.9114 28.3257 27.7038 28.3257 27.4877C28.3257 27.2716 28.2418 27.0639 28.0916 26.9085ZM19.1666 25.0002C18.0129 25.0002 16.885 24.658 15.9258 24.0171C14.9665 23.3761 14.2188 22.4651 13.7773 21.3992C13.3358 20.3333 13.2203 19.1604 13.4453 18.0288C13.6704 16.8972 14.226 15.8578 15.0418 15.042C15.8576 14.2262 16.897 13.6707 18.0286 13.4456C19.1601 13.2205 20.333 13.336 21.3989 13.7775C22.4648 14.219 23.3759 14.9667 24.0168 15.926C24.6578 16.8853 24.9999 18.0131 24.9999 19.1668C24.9999 20.7139 24.3853 22.1977 23.2914 23.2916C22.1974 24.3856 20.7137 25.0002 19.1666 25.0002Z" fill="white"/>
          </svg>
        </button>
      </form> -->
      <div></div>
      <div class="hidden lg:flex lg:items-center lg:gap-5">
        <div class="relative">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.8742 21.7498C13.6838 22.0782 13.4104 22.3507 13.0815 22.5402C12.7526 22.7296 12.3797 22.8293 12.0001 22.8293C11.6205 22.8293 11.2476 22.7296 10.9187 22.5402C10.5898 22.3507 10.3164 22.0782 10.1259 21.7498M22.8334 17.4165H1.16675C2.0287 17.4165 2.85535 17.0741 3.46484 16.4646C4.07434 15.8551 4.41675 15.0285 4.41675 14.1665V8.74984C4.41675 6.73861 5.2157 4.80976 6.63785 3.38761C8.06001 1.96546 9.98886 1.1665 12.0001 1.1665C14.0113 1.1665 15.9402 1.96546 17.3623 3.38761C18.7845 4.80976 19.5834 6.73861 19.5834 8.74984V14.1665C19.5834 15.0285 19.9258 15.8551 20.5353 16.4646C21.1448 17.0741 21.9715 17.4165 22.8334 17.4165Z" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <div class="dot absolute" style="background-color: #F80000"></div>
        </div> 
        <div class="flex items-start">
          <div class="imgcont relative">
            <object :data="image" type="image/png">
              <img :src="placeholder" alt="Placeholder image" style="border-radius: 50%; height: 100%">
            </object>
            <!-- <img :src="user" alt="" class="w-full" style="border-radius: 50%; height: 100%"> -->
            <svg class="check absolute" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="9" cy="9" r="8.5" fill="#52B95E" stroke="white"/>
              <path d="M13 6L7.5 11.5L5 9" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="ml-3">
            <p class="text-sm">{{name}}</p>
            <p class="text-xs text-gray-500">Verified</p>
          </div>
        </div>
        
      </div>
    </div>

</template>

<script>
import placeholder from "@/assets/img/Signup/person.png"
export default {
 data(){
    return {
      placeholder: placeholder,
      searchkeyword: '',
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
input::placeholder{
  color: #697386
}
.imgcont{
  width: 45px;
  height: 45px;
  border-radius: 50%;
  /* border: 1px solid red */
}
.check{
  bottom: 5px;
  right: 0px
}
.dot{
  top: 0;
  right: 0;
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

</style>