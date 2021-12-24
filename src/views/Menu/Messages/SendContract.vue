<template>
   <div class="l-modal">
      <div class="loading-modal w-full">
          <div class="loader bg-white mx-auto px-4 pt-4 pb-8">
                <div class="flex items-center justify-between">
                    <p class="text-xl text-black font-bold">Initiate Contract</p>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" @click="$emit('close')" class="cursor-pointer">
                        <path d="M17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41L17.59 5Z" fill="#2E3A59"></path>
                    </svg>
                </div>
                <form @submit.prevent="submitContract">
                    <div class="mt-4">
                        <label class="text-sm text-gray-400">Amount</label>
                        <money v-model="amount" v-bind="money" class="focus:outline-none border rounded outline-none w-full p-2" required></money>
                        <!-- <p v-if="error.amount" class="text-red-500 text-sm mt-2">Please enter a valid amount</p> -->
                    </div>
                    <div class="mt-4 lg:flex items-center justify-between">
                        <div class="">
                            <label class="text-sm text-gray-400">Start Date</label>
                            <input v-model="start" type="date" class="mt-2 bg-white py-2 px-3 rounded outline-none border focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" required>
                        </div>
                        <div class="mt-4 lg:mt-0">
                            <label class="text-sm text-gray-400">End Date</label>
                            <input v-model="end" type="date" class="mt-2 block bg-white py-2 px-3 rounded outline-none border focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" required>
                        </div>
                    </div>
                    <div class="mt-4">
                        <label class="text-sm text-gray-400">Contract Description</label>
                        <textarea v-model="description" rows="5" class="mt-2 bg-white w-full py-2 px-3 rounded outline-none border focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" required></textarea>
                    </div>
                    <div class="mt-6 flex gap-2 items-center">
                        <input type="checkbox" v-model="check" required>
                        <p class="text-sm">I agree to the <span class="text-green-500 underline">terms and conditions</span></p>
                    </div>
                    <button @click="show = true" style="width: 150px; background: #52B95E;" class="mt-6 text-sm rounded-3xl px-2 py-2 text-white oultine-none focus:outline-none">Send Contract</button>
                </form>
          </div>
      </div>
    </div>
</template>

<script>
import {Money} from "v-money"
export default {
    components:{
        Money
    },
    data(){
        return {
            money: {
                thousands: ',',
                prefix: '₦ ',
                precision: 0,
                masked: false
            },
            amount: '',
            start: '',
            end: '',
            check: [],
            description: '',
            error:{
                amount: false
            }
        }
    },
    // watch:{
    //     amount(){
    //         console.log(this.amount)
    //         if(this.amount.length > 0){
    //             this.error.amount = false
    //         }else{
    //             this.error.amount = true
    //         }
    //     }
    // },
    methods:{
        submitContract(){
            let obj = {
                amount: (this.amount * 100).toString() ,
                start: this.start,
                end: this.end,
                description: this.description
            }
            this.$emit('sendContract', obj)
            this.$emit('close')
        }
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
    input[type=date]{
        max-width: 190px
    }   
}
</style>