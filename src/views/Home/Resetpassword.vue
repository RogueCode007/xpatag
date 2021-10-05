<template>
  <div class="resetbox">
    <div class="mt-4">
        <h1 class="font-bold text-2xl text-left">Reset Password</h1>
        <!-- <p class="mt-4">Enter the email you registered with</p> -->
        <form @submit.prevent="validate" class="mt-4">
        <div class="mt-4">
            <label class="text-sm text-gray-400">Enter your new password</label>
            <input v-model="password" type="password" class="mt-2 bg-white w-full py-2 px-3 rounded outline-none border focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" required>
        </div>
        <p class="mt-4 text-gray-400">Don't have an account? <router-link to="/signup" style="color: #52B95E">Sign up</router-link></p>
        <button class="mt-10 outline-none py-2 w-full lg:w-4/5 lg:block lg:mx-auto text-white focus:outline-none" style="background-color: #52B95E; border-radius: 22px">Submit</button>
        </form>
    </div>
  </div>  
</template>

<script>
export default {
  name: 'Login',
  data(){
    return {
      passowrd: '',
      showEye : true
    }
  },
  methods:{
    showPassword(){
      this.$refs.password.type = 'text'
      this.showEye = false
    },
    hidePassword(){
      this.$refs.password.type = 'password'
      this.showEye = true
    },
    validate(){
      this.$router.push('/app')
    }
  }
}
</script>
<style scoped>
@media only screen and (min-width: 1024px){
  .resetbox{
    width: 400px
  }
}
</style>
