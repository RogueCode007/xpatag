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
           <p class="mt-4 lg:mt-0 text-base  text-gray-500">{{user.city}} {{user.state}}</p>
       </div> 
       <div class="py-4 border-b border-solid lg:flex justify-between">
           <h3 class="text-base text-black">Address</h3>
           <p class="mt-4 lg:mt-0 text-base text-gray-500">{{user.address}}</p>
       </div> 
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
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
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