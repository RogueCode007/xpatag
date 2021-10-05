<template>
  <div class="mt-4">
    <div class="relative">
      <h1 class="font-bold text-2xl text-center">Professional Information</h1>
      <router-link to="/signup/2" class="absolute flex items-center link left-0 text-green-500">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM12 4C7.6054 4.00111 4.03446 7.54686 4.00224 11.9413C3.97002 16.3358 7.48858 19.9336 11.8827 19.9991C16.2768 20.0647 19.9011 16.5735 20 12.18V13.963V12C19.995 7.58378 16.4162 4.00496 12 4ZM12 17L7 12L12 7L13.41 8.41L10.83 11H17V13H10.83L13.41 15.59L12 17Z" fill="#10B981"></path>
        </svg>
        <p>Back</p>
      </router-link>
    </div>
    <p class="mt-4 text-center">Please provide the following information to create an account.</p>
    <form @submit.prevent="validate" class="mt-6">
      <div class="lg:mt-4 lg:flex lg:justify-between">
        <div class="mt-4 lg:mt-0 lg:mr-3">
          <label class="text-sm text-gray-400">Profession</label>
          <input v-model="profession" type="text" class="mt-2 bg-white w-full py-2 px-3 rounded outline-none border focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" required>
        </div>
        <div class="mt-4 lg:mt-0 lg:mr-3">
          <label class="text-sm text-gray-400">Years of Experience</label>
          <input v-model="experience" type="text" class="mt-2 bg-white w-full py-2 px-3 rounded outline-none border focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" placeholder="3" required>
        </div>
      </div>
      <div class="mt-4">
        <label class="text-sm text-gray-400">Area of expertise/sub-category</label>
        <select v-model="sub_category_id" class="mt-2 bg-white w-full py-2 px-3 rounded outline-none border focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" required>
          <option value="" selected disabled>Select an area of expertise</option>
          <optgroup v-for="(category,index) in categories" :key="index" :label="category.name">
            <option v-for="(sub,index) in category.sub_category" :key="index" :value="sub.sub_category_id">{{sub.name}}</option>
          </optgroup>
        </select>
      </div>
      <!-- <div class="mt-4">
        <label class="text-sm text-gray-400">Average number of days</label>
        <select v-model="no_of_days" class="mt-2 bg-white w-full py-2 px-3 rounded outline-none border focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" required>
          <option value="" selected disabled>1 day</option>
          <option value="2">2 days</option>
          <option value="3">3 days</option>
        </select>
      </div>
      <div class="mt-6 px-2 py-2 border rounded">
        <label for="actual-btn" class="flex justify-between cursor-pointer" style="background-color: #FAFAFA">
          <p>Upload Professionalism Test Result</p>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.5 3.4099V2.19906L8.64568 3.05711L6.35645 5.35634C6.35633 5.35646 6.35621 5.35658 6.35609 5.3567C6.30935 5.40334 6.25391 5.44035 6.19291 5.46562C6.13175 5.49095 6.0662 5.50399 6 5.50399C5.9338 5.50399 5.86825 5.49095 5.80709 5.46562C5.74593 5.44028 5.69036 5.40315 5.64355 5.35634C5.59675 5.30953 5.55961 5.25396 5.53428 5.1928C5.50895 5.13164 5.49591 5.06609 5.49591 4.9999C5.49591 4.9337 5.50895 4.86815 5.53428 4.80699C5.55961 4.74583 5.59675 4.69026 5.64355 4.64345L9.63904 0.647962C9.68588 0.60393 9.74079 0.569332 9.80075 0.546081L9.80079 0.546173L9.81 0.54239C9.93173 0.492381 10.0683 0.492381 10.19 0.54239L10.19 0.542481L10.1992 0.546081C10.2592 0.569332 10.3141 0.60393 10.361 0.647963L14.3564 4.64345L14.3579 4.6449C14.4048 4.69138 14.442 4.74668 14.4673 4.80761C14.4927 4.86854 14.5058 4.93389 14.5058 4.9999C14.5058 5.06591 14.4927 5.13126 14.4673 5.19218C14.442 5.25311 14.4048 5.30841 14.3579 5.3549L14.355 5.3578C14.3085 5.40466 14.2532 5.44186 14.1923 5.46724C14.1314 5.49263 14.066 5.50569 14 5.50569C13.934 5.50569 13.8686 5.49263 13.8077 5.46724C13.7468 5.44186 13.6915 5.40466 13.645 5.35779L13.6443 5.35711L11.3543 3.05711L10.5 2.19906V3.4099V12.9999C10.5 13.1325 10.4473 13.2597 10.3536 13.3534C10.2598 13.4472 10.1326 13.4999 10 13.4999C9.86739 13.4999 9.74022 13.4472 9.64645 13.3534C9.55268 13.2597 9.5 13.1325 9.5 12.9999V3.4099ZM18.6464 10.6463C18.7402 10.5526 18.8674 10.4999 19 10.4999C19.1326 10.4999 19.2598 10.5526 19.3536 10.6463C19.4473 10.7401 19.5 10.8673 19.5 10.9999V16.9999C19.5 17.6629 19.2366 18.2988 18.7678 18.7677C18.2989 19.2365 17.663 19.4999 17 19.4999H3C2.33696 19.4999 1.70107 19.2365 1.23223 18.7677C0.763392 18.2988 0.5 17.6629 0.5 16.9999V10.9999C0.5 10.8673 0.552678 10.7401 0.646446 10.6463C0.740215 10.5526 0.867392 10.4999 1 10.4999C1.13261 10.4999 1.25979 10.5526 1.35355 10.6463C1.44732 10.7401 1.5 10.8673 1.5 10.9999V16.9999C1.5 17.3977 1.65804 17.7793 1.93934 18.0606C2.22065 18.3419 2.60218 18.4999 3 18.4999H17C17.3978 18.4999 17.7794 18.3419 18.0607 18.0606C18.342 17.7793 18.5 17.3977 18.5 16.9999V10.9999C18.5 10.8673 18.5527 10.7401 18.6464 10.6463Z" fill="black" stroke="#454545"/>
          </svg>
        </label>
        <input id="actual-btn" type="file" ref="result" class="hidden" v-on:change="resultUpload">
      </div> 
      
      <p class="text-sm text-gray-400">{{file_name}}</p>
      <p class="text-red-500 text-sm mt-2" v-if="error.result">Please upload your test result</p>
      <a href="#" class="flex items-center rounded p-2 mt-6" style="background-color: rgba(82,185,94, 0.15);  color: #52B95E">
        <svg class="mr-3" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.33325 10.8332C8.69113 11.3117 9.14772 11.7075 9.67204 11.994C10.1964 12.2805 10.7762 12.4508 11.3721 12.4935C11.9681 12.5362 12.5662 12.4502 13.126 12.2414C13.6858 12.0326 14.1942 11.7058 14.6166 11.2832L17.1166 8.78322C17.8756 7.99738 18.2956 6.94487 18.2861 5.85238C18.2766 4.7599 17.8384 3.71485 17.0658 2.94231C16.2933 2.16978 15.2482 1.73157 14.1558 1.72208C13.0633 1.71259 12.0108 2.13256 11.2249 2.89156L9.79159 4.31656" stroke="#52B95E" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M11.6666 9.16653C11.3087 8.68809 10.8521 8.29221 10.3278 8.00575C9.80347 7.71928 9.22367 7.54893 8.62771 7.50625C8.03176 7.46357 7.4336 7.54956 6.8738 7.75838C6.314 7.9672 5.80566 8.29397 5.38326 8.71653L2.88326 11.2165C2.12426 12.0024 1.70429 13.0549 1.71378 14.1474C1.72327 15.2399 2.16148 16.2849 2.93401 17.0574C3.70655 17.83 4.7516 18.2682 5.84408 18.2777C6.93657 18.2872 7.98908 17.8672 8.77492 17.1082L10.1999 15.6832" stroke="#52B95E" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <b class="text-sm">Take Xpatag Professional Test now</b>
      </a> -->
      <button class="mt-10 outline-none py-2 w-full lg:w-4/5 lg:block lg:mx-auto text-white focus:outline-none" style="background-color: #52B95E; border-radius: 22px">Save Details</button>
    </form>
  </div>
</template>

<script>
import axios from "axios"
import baseURL from "@/main"
import {mapState} from 'vuex'
export default {
  data(){
    return {
      profession: '',
      experience: '',
      sub_category_id: '',
      categories: [],
      file_name: '',
      error: {
        result: false
      }
    }
  },
  watch:{
  },
  computed:{
    ...mapState({
      user: state => state.newUser
    })
  },
  methods:{
    checkResult(){
      //check if a file has been uploaded and if the file up;oaded is an image file
      // if(this.$refs.image.files[0] && (this.$refs.image.files[0].type == "image/png" || this.$refs.image.files[0].type == "image/jpeg")){
      if(this.$refs.result.files[0]){
        this.error.result = false
        this.validate()
      }else{
        this.error.result = true
      }
    },
    validate(){
       if(Object.values(this.error).includes(true)){
        return
      }else{
        const data = {
          sub_category_id : this.sub_category_id,
          profession : this.profession,
          experience : parseInt(this.experience)
        }
        this.$store.commit('setNewUser', data)
        this.$router.push('/signup/4')
        this.$store.commit('increaseSignup', {val: 60})
      }
    },
    resultUpload(){
      console.log(this.$refs.result.files[0])
      this.file_name = this.$refs.result.files[0].name
      this.error.result = false
    }
  },
  mounted(){
    this.$store.commit('startLoading')
    console.log(this.user)
    this.profession = this.user.profession
    this.experience = this.user.experience
    this.sub_category_id = this.user.sub_category_id
    axios.get(`${baseURL}/category`)
    .then(res=>{
      this.$store.commit('endLoading')
      this.categories = res.data.data
      console.log(this.categories)
    })
    .catch(err=>{
      this.$store.dispatch('handleError', err)
    })
  }
}
</script>

<style scoped>
.link{
  top: 50%;
  transform: translateY(-50%);
}
</style>