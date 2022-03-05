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
                            <button @click="editProfile(profile)">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.41999 20.579C4.13948 20.5785 3.87206 20.4603 3.68299 20.253C3.49044 20.0475 3.39476 19.7695 3.41999 19.489L3.66499 16.795L14.983 5.48103L18.52 9.01703L7.20499 20.33L4.51099 20.575C4.47999 20.578 4.44899 20.579 4.41999 20.579ZM19.226 8.31003L15.69 4.77403L17.811 2.65303C17.9986 2.46525 18.2531 2.35974 18.5185 2.35974C18.7839 2.35974 19.0384 2.46525 19.226 2.65303L21.347 4.77403C21.5348 4.9616 21.6403 5.21612 21.6403 5.48153C21.6403 5.74694 21.5348 6.00146 21.347 6.18903L19.227 8.30903L19.226 8.31003Z" fill="#2E3A59"></path>
                                </svg>
                                <!-- <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M12 19C10.3599 19.0204 8.7367 18.6664 7.254 17.965C6.10469 17.4042 5.07265 16.6297 4.213 15.683C3.30243 14.7041 2.58547 13.5616 2.1 12.316L2 12L2.105 11.684C2.59082 10.4394 3.30624 9.29725 4.214 8.31698C5.07334 7.37029 6.10504 6.59584 7.254 6.03498C8.73671 5.33357 10.3599 4.97959 12 4.99998C13.6401 4.97963 15.2633 5.3336 16.746 6.03498C17.8953 6.59571 18.9274 7.37017 19.787 8.31698C20.6993 9.29453 21.4165 10.4373 21.9 11.684L22 12L21.895 12.316C20.3262 16.3998 16.3742 19.0693 12 19ZM12 6.99998C8.59587 6.89331 5.47142 8.87507 4.117 12C5.4712 15.1251 8.59579 17.1069 12 17C15.4041 17.1064 18.5284 15.1247 19.883 12C18.5304 8.87356 15.4047 6.89106 12 6.99998ZM12 15C10.5573 15.0095 9.30937 13.9973 9.02097 12.5838C8.73256 11.1702 9.48427 9.75 10.8154 9.19364C12.1465 8.63728 13.6852 9.10011 14.4885 10.2985C15.2919 11.4969 15.1354 13.0961 14.115 14.116C13.5563 14.6812 12.7948 14.9995 12 15Z" fill="#2E3A59"></path>
                                </svg> -->
                            </button>
                            <button @click="deleteProfile(profile.profile_id)">
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
    <Edit v-if="showEdit" :profile="profile" v-on:close="showEdit = false" />
  </div>
</template>

<script>
import Edit from "@/components/Professional/EditProfileModal"
import placeholder from "@/assets/img/Signup/person.png"
import axios from 'axios'
import baseURL from "@/main"
import {mapState} from 'vuex'
export default {
    components: {Edit},
    data(){
        return {
            placeholder: placeholder,
            profiles: [],
            profile: {},
            showEdit: false
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
        },
        deleteProfile(id){
            this.$store.commit('startLoading')
            axios({url: `${baseURL}/profile`, data: {"profile-id": id}, method: 'DELETE'})
            .then((res)=> {
                this.$store.commit('setSuccess', {status: true, msg: res.data.message})
                this.getProfile()
            })
            .catch((err)=>{
                this.$store.dispatch('handleError', err)
            })
        },
        editProfile(obj){
            this.profile = obj
            this.showEdit = true
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