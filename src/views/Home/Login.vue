<template>
  <div class="login">
    <div class="mt-4">
        <h1 class="font-bold text-2xl text-center">Log in to your consultant account</h1>
        <form @submit.prevent="validate" class="mt-4">
        <div class="mt-4">
            <label class="text-sm text-gray-400">Email Address</label>
            <input v-model="email" type="email" class="mt-2 bg-white w-full py-2 px-3 rounded outline-none border focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" required>
        </div>
        <div class="mt-4">
            <label class="text-sm text-gray-400">Password</label>
            <div class="mt-2 border w-full rounded relative">
            <input type="password" v-model="password" ref="password" class="w-full py-2 px-3 rounded blue-bg outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" required>
            <font-awesome-icon icon="eye" v-if="showEye" class="absolute eye text-gray-500" @click="showPassword"/>
            <font-awesome-icon icon="eye-slash" v-else class="absolute eye text-gray-500" @click="hidePassword"/>
            </div>
        </div>
        <p class="mt-4 text-gray-400">Don't have an account? <router-link to="/signup" style="color: #52B95E">Sign up</router-link></p>
        <p class="mt-4 text-gray-400"><router-link to="/forgotpassword" style="color: #52B95E">Forgot password?</router-link></p>
        <button class="mt-10 outline-none py-2 w-full lg:w-4/5 lg:block lg:mx-auto text-white focus:outline-none" style="background-color: #52B95E; border-radius: 22px">Log in</button>
        </form>
    </div>
</div>
<!-- <div class="whitebox bg-white px-4 py-6 lg:flex lg:py-0 lg:px-0">
    <div class="relative w-full imgbox lg:w-1/3">
      <div class="gradient w-full absolute top-0 left-0" style="height: 100%"></div>
    </div>
    
  </div> -->
  
</template>

<script>
export default {
  name: 'Login',
  data(){
    return {
      email: '',
      password: '',
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
      const user = {
        email: this.email,
        password: this.password
      }
      this.$store.commit('startLoading')
      this.$store.dispatch('loginUser', user)
      .then(res=>{
        console.log(res)
        this.$store.commit('endLoading')
        this.$router.push('/app')
      })
      .catch(err=>{
        this.errorMsg = err.data.message
        if(err.data.message == 'Please verify account first'){
          this.$router.push('/signup/verifyotp')
          this.$store.commit('setError', {status: true, msg: err.data.message})
        }else{
          this.$store.dispatch('handleError', err)
        }
        // this.$store.commit('setError', {status: true, msg: err.response.data.message})
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
}
@media only screen and (min-width: 1024px){
  .login{
    width: 400px
  }
}

</style>
