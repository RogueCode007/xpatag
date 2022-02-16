<template>
  <div class="mt-4">
    <div class="relative">
      <h1 class="font-bold text-2xl text-center">Personal Information</h1>
      <router-link to="/signup/expert/step1" class="absolute flex items-center link left-0 text-green-500">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM12 4C7.6054 4.00111 4.03446 7.54686 4.00224 11.9413C3.97002 16.3358 7.48858 19.9336 11.8827 19.9991C16.2768 20.0647 19.9011 16.5735 20 12.18V13.963V12C19.995 7.58378 16.4162 4.00496 12 4ZM12 17L7 12L12 7L13.41 8.41L10.83 11H17V13H10.83L13.41 15.59L12 17Z" fill="#10B981"></path>
        </svg>
        <p>Back</p>
      </router-link>
    </div>
    
    <p class="mt-4 text-center">Please provide the following information to create an account.</p>
    <form @submit.prevent="checkImage" class="mt-6">
      <div class="border mx-auto flex justify-center items-center" style="width: 135px; height: 135px; border-radius: 50%">
        <div class="imgcont relative">
          <img :src="placeholder" alt="" class="w-full" style="border-radius: 50%; height: 100%">
          <label for="actual-btn" class="green-circle absolute">
            <svg class="editsvg" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.625 1.87494C10.7892 1.71079 10.984 1.58058 11.1985 1.49174C11.413 1.4029 11.6429 1.35718 11.875 1.35718C12.1071 1.35718 12.337 1.4029 12.5515 1.49174C12.766 1.58058 12.9608 1.71079 13.125 1.87494C13.2892 2.0391 13.4194 2.23397 13.5082 2.44845C13.597 2.66292 13.6428 2.8928 13.6428 3.12494C13.6428 3.35709 13.597 3.58696 13.5082 3.80144C13.4194 4.01592 13.2892 4.21079 13.125 4.37494L4.6875 12.8124L1.25 13.7499L2.1875 10.3124L10.625 1.87494Z" stroke="#FFF5F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </label>
          <input id="actual-btn" type="file" ref="image" class="hidden" v-on:change="imageUpload">
        </div>
      </div>
      <p class="text-red-500 text-sm text-center" v-if="error.image">Please upload a valid image file</p>
      <div class="mt-4">
        <label class="text-sm text-gray-400">Phone number</label>
        <input v-model="phone" type="text" class="mt-2 bg-white w-full py-2 px-3 rounded outline-none border focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" required>
        <p v-if="phone.length > 0 && error.phone" class="text-red-500 text-sm mt-2">Please enter a valid phone number</p>
      </div>
      <div class="mt-4">
        <label class="text-sm text-gray-400">Address</label>
        <input v-model="address" type="text" class="mt-2 bg-white w-full py-2 px-3 rounded outline-none border focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" required>
      </div>
      <div class="lg:mt-4 lg:flex lg:justify-between">
        <div class="mt-4 lg:mt-0 lg:mr-3">
          <label class="text-sm text-gray-400">State</label>
          <select v-model="state_id" class="mt-2 bg-white w-full py-2 px-3 rounded outline-none border focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" required>
            <option value="" selected disabled>Select State</option>
            <option v-for="(state, index) in states" :key="index" :value="state.id">{{state.name}}</option>
          </select>
        </div>
        <div class="mt-4 lg:mt-0 lg:ml-3">
          <label class="text-sm text-gray-400">City</label>
          <input v-model="city" type="text" class="mt-2 bg-white w-full py-2 px-3 rounded outline-none border focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" required>
        </div>
        
      </div>
      <button class="mt-10 outline-none py-2 w-full lg:w-4/5 lg:block lg:mx-auto text-white focus:outline-none" style="background-color: #52B95E; border-radius: 22px">Continue</button>
    </form>
  </div>
</template>

<script>
import placeholder from "@/assets/img/Signup/person.png"
import axios from "axios"
import baseURL from "@/main"
import {mapState} from 'vuex'
export default {
  data(){
    return {
      phone: '',
      address: '',
      state_id: '',
      states: [],
      city: '',
      placeholder: placeholder,
      error: {
        phone: false,
        image: false
      }
    }
  },
  computed:{
    ...mapState({
      user: state => state.newUser
    })
  },
  watch:{
    phone(){
      if(/^\d{11}$/.test(this.phone)){
        this.error.phone = false;
      }else{
        this.error.phone = true;
      }
    },
    state(){
      if(this.state.id){
        this.state_id = this.state.id
        this.models = this.state.models
      }
    },
  },
  methods:{
    checkImage(){
      //check if a file has been uploaded and if the file up;oaded is an image file
      if(this.$refs.image.files[0] && (this.$refs.image.files[0].type == "image/png" || this.$refs.image.files[0].type == "image/jpeg")){
        this.error.image = false
        this.validate()
      }else{
        this.error.image = true
      }
    },
    validate(){
       if(Object.values(this.error).includes(true)){
        return
      }else{
        const obj = {
          image: this.placeholder,
          phone : this.phone,
          address: this.address,
          city: this.city,
          state_id : this.state_id,
        }
        // console.log(obj)
        this.$store.commit('setNewUser', obj)
        this.$router.push('/signup/expert/step3')
        this.$store.commit('increaseSignup', {val: 50})
      }
    },
    imageUpload(){
      if(this.$refs.image.files[0].type == "image/png" || this.$refs.image.files[0].type == "image/jpeg"){
        this.error.image = false
        let fileToLoad = this.$refs.image.files[0];
        let fileReader = new FileReader();
        let vm = this
        fileReader.onload = function(fileLoadedEvent) {
          vm.placeholder = fileLoadedEvent.target.result; // <--- data: base64
        }
        fileReader.readAsDataURL(fileToLoad);
      }else{
        this.error.image = true
      }
    },
  },
  mounted(){
    this.$store.commit('startLoading')
    if(this.user.phone){
      this.phone = this.user.phone
      this.city = this.user.city
      this.address = this.user.address
      this.state_id = this.user.state_id
    }
    axios.get(`${baseURL}/state`)
    .then(res=>{
      this.$store.commit('endLoading')
      this.states = res.data.data
    })
    .catch(err=>{
      console.log(err)
      this.$store.dispatch('handleError', err)
    })
  }

}
</script>

<style scoped>
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

.imgcont{
  width: 124px;
  height: 124px;
  border-radius: 50%;
  /* border: 1px solid red */
}
.link{
  top: 50%;
  transform: translateY(-50%);
}
</style>