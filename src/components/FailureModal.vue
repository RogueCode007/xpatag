<template>
   <div class="l-modal">
      <div class="loading-modal w-full">
          <div class="loader bg-white mx-auto py-6 pb-8 px-10 relative" v-on-clickaway="close">
            <font-awesome-icon icon="times-circle" class="absolute  cursor-pointer text-red-500 text-xl right-2 top-2" @click="$store.commit('setError', {status: false, msg: 'Error'})"/>
            <svg class="block w-full" width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path  d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM11 15V17H13V15H11ZM11 7V13H13V7H11Z" fill="#ff0000"></path>
            </svg>
            <p class="text-xl text-black font-bold text-center pt-6 pb-3">{{msg}}</p>
          </div>
      </div>
    </div>
</template>

<script>
import { directive as onClickaway } from 'vue-clickaway'
export default {
  computed:{
    msg(){
      return this.$store.state.errorMsg
    }
  },
  methods:{
    close(){
      this.$store.commit('setError', {status: false, msg: 'Error'})
    }
  },
  directives:{
    onClickaway : onClickaway
  }
}
</script>

<style scoped>
.loader{
  position: relative;
  top: 20px;
  width: 80%;
  border-radius: 16px;
}
.times{
  top: -50px
}
@media only screen and (min-width: 1024px){
  .loader{
    width: 40%;
    max-width: 450px;
  }
}
</style>