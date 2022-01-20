<template>
  <div class="mt-4">
    <div class="relative">
      <h1 class="font-bold text-2xl text-center">Professional Information</h1>
      <router-link to="/signup/3" class="absolute flex items-center link left-0 text-green-500">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM12 4C7.6054 4.00111 4.03446 7.54686 4.00224 11.9413C3.97002 16.3358 7.48858 19.9336 11.8827 19.9991C16.2768 20.0647 19.9011 16.5735 20 12.18V13.963V12C19.995 7.58378 16.4162 4.00496 12 4ZM12 17L7 12L12 7L13.41 8.41L10.83 11H17V13H10.83L13.41 15.59L12 17Z" fill="#10B981"></path>
        </svg>
        <p>Back</p>
      </router-link>
    </div>
    <p class="mt-4 text-center">Please provide the following information to create an account.</p>
    
    <form @submit.prevent="submit" class="mt-6">
      <div class="flex-cont ">
        <label class="container">One
          <input type="checkbox" v-model="working_days" :value="7">
          <span class="checkmark">Sunday</span>
        </label>
        <label class="container">Two
          <input type="checkbox" v-model="working_days" :value="1">
          <span class="checkmark">Monday</span>
        </label>
        <label class="container">Three
          <input type="checkbox" v-model="working_days" :value="2">
          <span class="checkmark">Tuesday</span>
        </label>
        <label class="container">Four
          <input type="checkbox" v-model="working_days" :value="3">
          <span class="checkmark">Wednesday</span>
        </label>
        <label class="container">Four
          <input type="checkbox" v-model="working_days" :value="4">
          <span class="checkmark">Thursday</span>
        </label>
        <label class="container">Four
          <input type="checkbox" v-model="working_days" :value="5">
          <span class="checkmark">Friday</span>
        </label>
        <label class="container">Four
          <input type="checkbox" v-model="working_days" :value="6">
          <span class="checkmark">Saturday</span>
        </label>
      </div>
      <button class="mt-10 outline-none py-2 w-full lg:w-4/5 lg:block lg:mx-auto text-white focus:outline-none" :class="[enable ? 'opacity-50' : '']" :disabled="enable" style="background-color: #52B95E; border-radius: 22px">Save Details</button>
    </form>
  </div>
</template>

<script>
import axios from "axios"
import baseURL from "@/main"
import {mapState} from "vuex"
export default {
  data(){
    return {
     working_days: [],
     enable: false
    }
  },
  watch:{
    working_days(){
      if(this.working_days.length < 1){
        this.enable = true
      }else{
        this.enable = false
      }
    }
  },
  computed:{
    ...mapState({
      user: state => state.newUser
    })
  },
  methods:{
    submit(){
      this.$store.commit('startLoading')
      this.user.working_days = this.working_days
      // console.log(this.user)
      axios({url: `${baseURL}/signup/expert`, data: this.user, method: 'POST'})
      .then(res=>{
        console.log(res)
        this.$store.commit('increaseSignup', {val: 80})
        this.$store.commit('endLoading')
        this.$router.push('/signup/verifyotp')
      })
      .catch(err=>{
        this.$store.commit('endLoading')
        this.$store.dispatch('handleError', err)
      })
      // 
    }
  },
  mounted(){
    this.$store.commit('endLoading')
  }
}
</script>

<style scoped>
.link{
  top: 50%;
  transform: translateY(-50%);
}∏
.flex-cont{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  /* border: 1px solid red */
}
/* The container */
.container {
  flex: 0 0 45%;
  display: inline-block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  min-width: 117px;
  height: 115px;
  border-radius: 5.48787px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: #fff
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 5.48787px;
  background-color: rgba(213, 213, 213, 0.2) ;
  padding: 0 10px;
  color: #454545;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: rgba(213, 213, 213, 0.5) ;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: rgba(82,185,94, 0.15);
  border: 1px solid rgba(82,185,94, 1);
}
@media only screen and (min-width: 768px){
  .flex-cont{
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    justify-content: space-between;
    display: flex;
    flex-wrap: wrap;
  }
  .container{
    flex: 0 0 23%
  }
}
</style>