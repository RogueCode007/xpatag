<template>
   <div class="l-modal">
      <div class="loading-modal w-full">
          <div class="loader bg-white mx-auto pb-8">
            <font-awesome-icon icon="times-circle" class="mt-4 mr-4 cursor-pointer text-red-500 text-xl float-right" @click="$emit('close')"/>
            <p class="text-xl text-black font-bold text-center pt-6 pb-3">Add Bank Account</p>
            <VerifyAccount v-if="!verified" :banks="banks" v-on:verify="verify"/>
            <AddAccount v-else :data="verifiedData" v-on:add="addAccount"/>
          </div>
      </div>
    </div>
</template>

<script>
import VerifyAccount from "@/components/Wallet/VerifyAccount"
import AddAccount from "@/components/Wallet/AddAccount"
import axios from 'axios'
import baseURL from "@/main"
export default {
    props: ['banks'],
    components: {VerifyAccount, AddAccount},
    data(){
        return {
            bank_id: null,
            account_number: null,
            verified : false,
            verifiedData: {}
        }
    },
    methods:{
        verify(obj){
            this.verified = true
            this.verifiedData = obj
        },
        addAccount(number){
            this.$store.commit('startLoading')
            axios({url: `${baseURL}/bank/account`, data: {account_number: number}, method: 'POST'})
            .then((res)=>{
                this.$store.commit('endLoading')
                this.$store.commit('setSuccess', {status: true, msg:res.data.message})
                this.$emit('close')
            })
            .catch((err)=>{
                this.$store.dispatch('handleError', err)
            })
        }
    },
    mounted(){
        this.$store.commit('endLoading')
    }
}
</script>

<style scoped>
.loader{
  position: relative;
  top: 50px;
  width: 80%;
  border-radius: 16px;
}
.times{
  top: -50px
}

@media only screen and (min-width: 1024px){
  .loader{
    width: 30%;
    max-width: 450px
  }
}
</style>