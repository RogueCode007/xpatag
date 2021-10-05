<template>
  <div class="forgotbox">
    <div class="mt-4">
        <h1 class="font-bold text-2xl text-left">Forgot Password</h1>
        <!-- <p class="mt-4">Enter the email you registered with</p> -->
        <form @submit.prevent="validate" class="mt-4">
        <div class="mt-4">
            <label class="text-sm text-gray-400">Enter the email address you signed up with</label>
            <input v-model="email" type="email" class="mt-2 bg-white w-full py-2 px-3 rounded outline-none border focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" required>
        </div>
        <p class="mt-4 text-gray-400">Don't have an account? <router-link to="/signup" style="color: #52B95E">Sign up</router-link></p>
        <button class="mt-10 outline-none py-2 w-full lg:w-4/5 lg:block lg:mx-auto text-white focus:outline-none" style="background-color: #52B95E; border-radius: 22px">Submit</button>
        </form>
    </div>
  </div> 
</template>

<script>
import axios from 'axios'
import baseURL from "@/main"
export default {
  name: 'Login',
  data(){
    return {
      email: '',
    }
  },
  methods:{
    validate(){
      this.$store.commit('startLoading')
      axios({url:`${baseURL}/password/forgot`, data: {email : this.email}, method: 'POST'})
      .then(res=>{
        console.log(res)
        this.$store.commit('endLoading')
      })
      .catch(err => {
        this.$store.commit('endLoading')
        this.$store.dispatch('handleError', err)
      })
      // this.$router.push('/app')
    }
  }
}
</script>
<style scoped>
@media only screen and (min-width: 1024px){
  .forgotbox{
    width: 400px
  }
}

</style>
