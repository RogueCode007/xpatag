<template>
  <div class="py-8 lg:py-10 px-3 lg:px-6"> 
      <div class="flex justify-between items-center">
      <h1 class="text-black font-bold text-2xl lg:text-3xl">Profiles</h1>
      <router-link to="/app/dashboard/profile/add" class="mt-4 lg:mt-0 p-2 border text-center border-solid text-sm" style="border-radius: 22px; color: #52B95E; border-color: #52B95E">Add Profile</router-link>
    </div> 
    <div v-if="!$store.state.loading && profiles.length == 0" class="py-24 flex items-center justify-center">
        <p>You have no profiles yet, go ahead and add one</p>
    </div>
    <div v-else class="tablecont overflow-x-auto mt-8">
       <table class="w-full">
           <thead>
               <tr>
                   <th class="text-gray-300 text-sm">S/N</th>
                   <th class="text-gray-300 text-sm">Category</th>
                   <th class="text-gray-300 text-sm">Subcategory</th>
                   <th class="text-gray-300 text-sm">Profession</th>
                   <th class="text-gray-300 text-sm">Action</th>
               </tr>
           </thead>
           <tbody>
               <tr v-for="(profile, index) in profiles" :key="index">
                    <td class="text-gray-500 text-sm">{{index + 1}}</td> 
                    <td class="text-gray-500 text-sm">{{profile.category.name}}</td> 
                    <td class="text-gray-500 text-sm">{{profile["sub_category"].name}}</td> 
                    <td class="text-gray-500 text-sm">{{profile.profession}}</td> 
                    <td class="">
                        <div class="flex gap-2 items-center">
                            <button >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M12 19C10.3599 19.0204 8.7367 18.6664 7.254 17.965C6.10469 17.4042 5.07265 16.6297 4.213 15.683C3.30243 14.7041 2.58547 13.5616 2.1 12.316L2 12L2.105 11.684C2.59082 10.4394 3.30624 9.29725 4.214 8.31698C5.07334 7.37029 6.10504 6.59584 7.254 6.03498C8.73671 5.33357 10.3599 4.97959 12 4.99998C13.6401 4.97963 15.2633 5.3336 16.746 6.03498C17.8953 6.59571 18.9274 7.37017 19.787 8.31698C20.6993 9.29453 21.4165 10.4373 21.9 11.684L22 12L21.895 12.316C20.3262 16.3998 16.3742 19.0693 12 19ZM12 6.99998C8.59587 6.89331 5.47142 8.87507 4.117 12C5.4712 15.1251 8.59579 17.1069 12 17C15.4041 17.1064 18.5284 15.1247 19.883 12C18.5304 8.87356 15.4047 6.89106 12 6.99998ZM12 15C10.5573 15.0095 9.30937 13.9973 9.02097 12.5838C8.73256 11.1702 9.48427 9.75 10.8154 9.19364C12.1465 8.63728 13.6852 9.10011 14.4885 10.2985C15.2919 11.4969 15.1354 13.0961 14.115 14.116C13.5563 14.6812 12.7948 14.9995 12 15Z" fill="#2E3A59"></path>
                                </svg>
                            </button>
                            <button>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17 22H7C5.89543 22 5 21.1046 5 20V7H3V5H7V4C7 2.89543 7.89543 2 9 2H15C16.1046 2 17 2.89543 17 4V5H21V7H19V20C19 21.1046 18.1046 22 17 22ZM7 7V20H17V7H7ZM9 4V5H15V4H9ZM15 18H13V9H15V18ZM11 18H9V9H11V18Z" fill="#ff0000"></path>
                                </svg>
                            </button>
                        </div>
                    </td> 
               </tr>
           </tbody>
       </table>
    </div>
  </div>
</template>

<script>
import placeholder from "@/assets/img/Signup/person.png"
import axios from 'axios'
import baseURL from "@/main"
import {mapState} from 'vuex'
export default {
    data(){
        return {
            placeholder: placeholder,
            profiles: [],
        }
    },
    computed:{
        ...mapState({
            userId: state => state.user.user_id,
        })
    },
    methods: {
        getProfile(){
            this.$store.commit('startLoading')
            axios.get(`${baseURL}/expert/profile/${this.userId}`)
            .then((res)=>{
                this.profiles = res.data.data
                console.log(this.profiles)
                this.$store.commit('endLoading')
            })
            .catch((err)=>{
                this.$store.dispatch('handleError', err)
            })
        }
    },
    mounted(){
        this.getProfile()
        
    }
}
</script>

<style scoped>
th, td{
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #f2f4f7;
}
thead th:nth-child(1){
    width: 50px;
}
thead th:nth-child(2){
    min-width : 200px;
}
thead th:nth-child(3){
    min-width: 200px;
}
thead th:nth-child(4){
    min-width: 150px;
}
thead th:nth-child(15){
    min-width: 100px
}
.tablecont::-webkit-scrollbar{
    height: 0
}
@media only screen and (min-width: 1024px){
    
}

</style>