<template>
  <div class="signupbox">
    <Step class="mt-4 mx-auto" />
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <p class="mt-4 text-gray-400 lg:w-4/5 lg:text-center lg:mx-auto">Already have an account? <router-link to="/" style="color: #52B95E">Log in</router-link></p>
  </div>
</template>

<script>
// @ is an alias to /src
import Step from "@/components/SignupProgressBar.vue"
export default {
  name: 'Home',
  components:{
    Step
  },
  data(){
    return {
      
    }
  },
  methods:{
    submit(){
      this.$router.push('/app')
    }
  }
}
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
@media only screen and (min-width: 1024px){
  .signupbox{
    width: 500px
  }
}
</style>
