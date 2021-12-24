<template>
  <div class="mt-4">
      <h1 class="font-bold text-2xl text-center">OTP VERIFICATION</h1>
      <p class="mt-4 text-center">Please enter the OTP sent to your mail to verify your account</p>
      <form @submit.prevent="validateForm" class="mt-6 text-center">
           <div class="mt-6 flex justify-between item-center mx-auto w-3/5 otps">
            <input type="text" class="blue-bg outline-none ring-1 ring-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" ref="d1" id="d1" v-model="digit1" maxlength="1" @keyup="keyMonitor" required />
            <input type="text" class="blue-bg outline-none ring-1 ring-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" ref="d2" id="d2" v-model="digit2"  maxlength="1"  @keyup="keyMonitor" required />
            <input type="text" class="blue-bg outline-none ring-1 ring-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" ref="d3" id="d3" v-model="digit3"  maxlength="1" @keyup="keyMonitor" required />
            <input type="text" class="blue-bg outline-none ring-1 ring-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" ref="d4" id="d4" v-model="digit4"  maxlength="1" @keyup="keyMonitor" required />
          </div>
          <p class="text-red-500 mt-4 text-center">{{errorMsg}}</p>
          <button class="mt-10 outline-none py-2 w-full lg:w-4/5 lg:block lg:mx-auto text-white focus:outline-none" style="background-color: #52B95E; border-radius: 22px">Verify</button>
        </form>
  </div>
</template>

<script>
import axios from "axios"
import baseURL from "@/main"
export default {
    data(){
        return {
        errorMsg: '',
        digit1: '',
        digit2: '',
        digit3: '',
        digit4: '',
        }
    },
    methods:{
        validateForm(){
            this.$store.commit('startLoading')
            const otp = this.digit1.concat(this.digit2, this.digit3, this.digit4)
            axios({url: `${baseURL}/verify/otp`, data: {otp: otp}, method: 'POST'})
            .then((res) => {
                console.log(res)
                this.$store.commit('endLoading')
                this.$store.commit('increaseSignup', {val: 100})
                this.$router.push('/signup/5')  
            })
            .catch(err => {
                this.$store.commit('endLoading')
                if(err.response){
                console.log(err.response)
                if(err.response.data.message == "User not found"){
                    this.errorMsg = "Invalid OTP"
                }else{
                    this.errorMsg = "Invalid OTP"
                }
                }
            })
        },
        keyMonitor(event){
        if(event.key == "Backspace" || event.key == "Delete"){
            console.log("backspace pressed")
            this.del(event.target.id)
        }else{
            this.next(event.target.id)
        }
        },
        next(id){
        if(id == "d1"){
            this.$refs.d2.focus()
        }else if(id == "d2"){
            this.$refs.d3.focus()
        }else if(id == "d3"){
            this.$refs.d4.focus()
        }
        },
        del(id){
            if(id == "d1"){
                this.$refs.d1.value = ""
            }else if(id == "d2"){
                this.$refs.d2.value = ''
                this.$refs.d1.focus()
            }else if(id == "d3"){
                this.$refs.d3.value = ''
                this.$refs.d2.focus()
            }
            else if(id == "d4"){
                this.$refs.d4.value = ''
                this.$refs.d3.focus()
            }
        }
        
    },
}
</script>

<style soped>
div.otps input{
  width: 40px;
  height: 50px;
  outline: none;
  background-color: #E2F5EC;
  border-radius: 5px;
  line-height: 50px;
  text-align: center;
  font-size: 24px;
}

</style>