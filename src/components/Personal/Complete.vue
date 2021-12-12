<template>
  <div class="py-8 lg:py-16 px-3 lg:px-6 lg:flex lg:gap-20">
    <div class="imgcont relative">
       <object :data="user.image" type="image/png">
        <img :src="placeholder" alt="Placeholder image">
       </object>
        <!-- <img :src="user.image" alt="" class="w-full" style="border-radius: 50%; height: 100%"> -->
    </div>  
    <div class="mt-6 infobox">
       <div class="py-4 border-b border-solid lg:flex justify-between">
           <h3 class="text-base text-black">Full Name</h3>
           <p class="mt-4 lg:mt-0 text-base  text-gray-500">{{user.firstname}} {{user.lastname}}</p>
       </div> 
       <div class="py-4 border-b border-solid lg:flex justify-between">
           <h3 class="text-base  text-black">Email</h3>
           <p class="mt-4 lg:mt-0 text-base text-gray-500">{{user.email}}</p>
       </div> 
       <div class="py-4 border-b border-solid lg:flex justify-between">
           <h3 class="text-base  text-black">Phone number</h3>
           <p class="mt-4 lg:mt-0 text-base  text-gray-500">{{user.phone}}</p>
       </div>  
       <div class="py-4 border-b border-solid lg:flex justify-between">
           <h3 class="text-base text-black">State/City</h3>
           <p class="mt-4 lg:mt-0 text-base  text-gray-500">{{profile.city}}</p>
       </div> 
       <div class="py-4 border-b border-solid lg:flex justify-between">
           <h3 class="text-base text-black">Address</h3>
           <p class="mt-4 lg:mt-0 text-base text-gray-500">{{profile.address}}</p>
       </div> 
       <div class="py-4 border-b border-solid lg:flex lg:justify-between lg:gap-16">
           <h3 class="text-xl text-black">Bio</h3>
           <p class="mt-4 lg:mt-0 text-base text-gray-500">{{profile.portfolio[profile.portfolio.length - 1].description}}</p>
       </div> 
       <!-- <div class="py-4 border-b border-solid lg:flex justify-between">
           <h3 class="text-base text-black">Socials</h3>
           <a href="#" target="blank" class="block mt-4 lg:mt-0 text-base text-gray-500 rounded p-2">
               <svg class="mr-3 inline" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.36 0H0.64C0.286 0 0 0.286 0 0.64V15.36C0 15.714 0.286 16 0.64 16H15.36C15.714 16 16 15.714 16 15.36V0.64C16 0.286 15.714 0 15.36 0ZM4.746 13.634H2.372V5.998H4.746V13.634ZM3.56 4.954C3.28785 4.954 3.02182 4.8733 2.79554 4.7221C2.56925 4.57091 2.39289 4.356 2.28874 4.10457C2.1846 3.85314 2.15735 3.57647 2.21044 3.30956C2.26353 3.04264 2.39458 2.79746 2.58702 2.60502C2.77946 2.41258 3.02464 2.28153 3.29156 2.22844C3.55847 2.17535 3.83514 2.2026 4.08657 2.30674C4.338 2.41089 4.55291 2.58725 4.7041 2.81354C4.8553 3.03982 4.936 3.30585 4.936 3.578C4.934 4.338 4.318 4.954 3.56 4.954ZM13.634 13.634H11.262V9.92C11.262 9.034 11.246 7.896 10.028 7.896C8.794 7.896 8.604 8.86 8.604 9.856V13.634H6.234V5.998H8.51V7.042H8.542C8.858 6.442 9.632 5.808 10.788 5.808C13.192 5.808 13.634 7.39 13.634 9.446V13.634Z" fill="black"/>
                </svg>Linkedln
            </a>
       </div>  -->
    </div>
  </div>
</template>

<script>
import placeholder from "@/assets/img/Signup/person.png"
import {mapState} from 'vuex'
export default {
    data(){
        return {
            placeholder: placeholder,
        }
    },
    computed:{
        ...mapState({
            user: state => state.user,
            profile : state => state.profile.professionalProfile
        })
    },
    mounted(){
        console.log(this.user)
    }
}
</script>

<style scoped>
.imgcont{
  width: 100px;
  height: 100px;
  border-radius: 50%;
  /* border: 1px solid red */
}
.imgcont img{
    width: 100%;
    height: 100%;
    border-radius: 50%
}
.green-circle{
  background-color: #52B95E;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  text-align: left;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 5px;
  right: 10px
}
@media only screen and (min-width: 1024px){
    .imgcont{
        width: 150px;
        height: 150px;
    }
    .infobox{
        min-width: 600px;
        max-width: 600px
    }
}

</style>