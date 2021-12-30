<template>
  <div class="py-4 lg:py-6 px-3 lg:px-6">
        <p>Added Accounts</p>
        <div class="mt-6">
            <div v-for="(account, index) in accounts" :key="index" class="mb-6">
                <p class="font-bold">Bank</p>
                <p>{{account.bank_name}}</p>
                <p class="font-bold mt-4">Account name</p>
                <p>{{account.account_name}}</p>
                <p class="font-bold mt-4">Account number</p>
                <p>{{account.account_number}}</p>
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
            accounts: []
        }
    },
    methods:{
        getAccounts(){
            this.$store.commit('startLoading')
            axios.get(`${baseURL}/expert/banks`)
            .then((res)=>{
                this.accounts = res.data.data
                this.$store.commit('endLoading')
            })
            .catch((err)=>{
                this.$store.dispatch('handleError', err)
            })
        }
    },
    mounted(){
        this.getAccounts()
    }
}
</script>

<style>

</style>