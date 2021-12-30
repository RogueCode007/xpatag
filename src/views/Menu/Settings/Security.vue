<template>
  <div class="px-3 lg:px-6 py-10">
    <div class="cont">
      <div class="cursor-pointer">
        <div @click="showPassword = !showPassword" class="flex justify-between">
          <p class="text-black font-bold">Change Password</p>
          <svg v-if="!showPassword" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.75 19.5L16.25 13L9.75 6.5" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.51489 8.465L11.9999 16.95L20.4849 8.465L19.0709 7.05L11.9999 14.122L4.92889 7.05L3.51489 8.465Z" fill="#2E3A59"></path>
          </svg>
        </div>
         <form @submit.prevent="changePassword" v-if="showPassword" class="mt-6 lg:mt-10 relative">
          <div class="lg:flex lg:justify-between">
             <label class="text-sm">Old Password</label>
             <div class="mt-2 input">
                 <input v-model="oldpassword" type="password" ref="oldpassword" class=" bg-white w-full py-2 px-3 rounded outline-none border focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent">
             </div>
         </div>
          <div class="mt-4 lg:flex lg:justify-between">
             <label class="text-sm">New Password</label>
             <div class="mt-2 input relative">
                <input v-model="newpassword" type="password" ref="newpassword" class=" bg-white w-full py-2 px-3 rounded outline-none border focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent">
                <font-awesome-icon icon="eye" v-if="showEye" class="absolute cursor-pointer eye text-gray-500" @click="displayPassword"/>
                <font-awesome-icon icon="eye-slash" v-else class="absolute cursor-pointer eye text-gray-500" @click="hidePassword"/>
             </div>
         </div>
         <p v-if="newpassword.length > 0 && error.password" class="text-red-500 text-sm mt-2">Your password should contain at least 8 characters (at least one uppercase, one lowercase, one special character and one number)</p>
         <div class="lg:flex justify-between">
           <div></div>
           <button class="text-white p-3 text-sm mt-10 mb-4 focus:outline-none" style="background: #52B95E;border-radius: 22px;">Change Password</button>
         </div>
        </form>
        <hr class="mt-4">
      </div>
      <div class="mt-4 lg:mt-6 cursor-pointer">
        <div @click="showPhone = !showPhone" class="flex justify-between">
          <p class="text-black font-bold">Phone Number Verification</p>
          <svg v-if="!showPhone" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.75 19.5L16.25 13L9.75 6.5" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.51489 8.465L11.9999 16.95L20.4849 8.465L19.0709 7.05L11.9999 14.122L4.92889 7.05L3.51489 8.465Z" fill="#2E3A59"></path>
          </svg>
        </div>
        <form v-if="showPhone" class="mt-6 lg:mt-10 relative">
          <div class="lg:flex lg:justify-between">
             <label class="text-sm">Phone Number</label>
             <div class="mt-2 input">
                 <input type="text" class=" bg-white w-full py-2 px-3 rounded outline-none border focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent">
             </div>
         </div>
         <div class="lg:flex justify-between">
           <div></div>
           <button class="text-white p-3 text-sm mt-10 mb-4 focus:outline-none" style="background: #52B95E;border-radius: 22px;">Verify Phone</button>
         </div>
        </form>
        <hr class="mt-4">
      </div>
      <!-- <div class="mt-4 lg:mt-6 cursor-pointer">
        <div @click="showSecurity = !showSecurity"  class="flex justify-between">
          <p class="text-black font-bold">Security Question</p>
          <svg v-if="!showSecurity" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.75 19.5L16.25 13L9.75 6.5" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.51489 8.465L11.9999 16.95L20.4849 8.465L19.0709 7.05L11.9999 14.122L4.92889 7.05L3.51489 8.465Z" fill="#2E3A59"></path>
          </svg>
        </div>
        <form v-if="showSecurity" class="mt-6 lg:mt-10 relative">
          <div class="lg:flex lg:justify-between">
             <label class="text-sm">Question</label>
             <div class="mt-2 input">
               <textarea style="height: 100px" class=" bg-white w-full py-2 px-3 rounded outline-none border focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"></textarea>
             </div>
          </div>
          <div class="mt-4 lg:flex lg:justify-between">
             <label class="text-sm">Answer</label>
             <div class="mt-2 input">
               <textarea style="height: 100px" class=" bg-white w-full py-2 px-3 rounded outline-none border focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"></textarea>
             </div>
          </div>
          <div class="lg:flex justify-between">
           <div></div>
           <button class="text-white text-sm p-3 px-6 mt-10 mb-4 focus:outline-none" style="background: #52B95E;border-radius: 22px;">Submit</button>
         </div>
        </form>
        <hr class="mt-4">
      </div> -->
      <div class="block mt-4 lg:mt-6 cursor-pointer" @click="logout">
        <div class="flex justify-between">
          <p class="text-red-500 font-bold">Log Out</p>
           <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.75 19.5L16.25 13L9.75 6.5" stroke="#ff0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <hr class="mt-4">
      </div>
    </div>
      
  </div>
</template>

<script>
import axios from 'axios'
import baseURL from '@/main'
export default {
  data(){
    return {
      showPassword: false,
      showPhone: false,
      showSecurity: false,
      showEye : true,
      oldpassword: '',
      newpassword: '',
      error:{
        password: false
      }
    }
  },
  watch:{
    newpassword(){
      if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&^])[A-Za-z\d@$!%*#?&^]{8,}$/.test(this.newpassword)){
        this.error.password = false
      }else{
        this.error.password = true
      }
    },
  },
  methods:{
    logout(){
      this.$router.push('/login')
    },
    displayPassword(){
      this.$refs.newpassword.type = 'text'
      this.$refs.oldpassword.type = 'text'
      this.showEye = false
    },
    hidePassword(){
      this.$refs.newpassword.type = 'password'
      this.$refs.oldpassword.type = 'password'
      this.showEye = true
    },
    changePassword(){
      this.$store.commit('startLoading')
      let data = {
        old_password: this.oldpassword,
        new_password: this.newpassword
      }
      // console.log(data)
      axios({url: `${baseURL}/setting/password`, data: data, method: 'PATCH'})
      .then(()=>{
        this.$store.commit('endLoading')
        this.$store.commit('setSuccess', {status: true, msg: 'Password reset'})
        this.newpassword = ''
        this.oldpassword = ''
      })
      .catch((err)=>{
        this.$store.dispatch('handleError', err)
      })
    }
  }
}
</script>

<style scoped>
.eye{
  top: 0;
  bottom: 0;
  margin: auto 0;
  right: 5px;
  cursor: pointer;
  z-index: 100;
}
@media only screen and (min-width: 1024px){
  .cont{
    max-width: 500px
  }
  
}
</style>