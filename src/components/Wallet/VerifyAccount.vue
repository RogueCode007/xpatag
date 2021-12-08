<template>
<form @submit.prevent="verifyBank" class="px-8">
    <div class="mt-6">
        <div class="form__div">
            <input type="text" class="form__input" placeholder=" " v-model="account_number" required>
            <label class="text-gray-500 text-xs form__label">Account Number</label>
        </div>
    </div>
    <div class="mt-4">
        <label class="text-sm text-gray-400">Bank Name</label>
        <select v-model="bank_id" class="mt-2 bg-white w-full py-2 px-3 rounded outline-none border focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" required>
            <option value="" selected disabled>Select a bank</option>
            <option v-for="(bank,index) in banks" :key="index" :value="bank.id">{{bank.name}}</option>
        </select>
    </div>
    <button class="text-center block w-3/4 mx-auto mt-10 p-2 text-white text-sm" style="background: #52B95E;border-radius: 22px;">Verify Account</button>
</form>
</template>

<script>
import axios from "axios"
import baseURL from "@/main"
export default {
    props: ['banks'],
    data(){
        return {
            bank_id: null,
            account_number: null,
        }
    },
    methods:{
        verifyBank(){
            this.$store.commit('startLoading')
            const obj = {
                bank_id : this.bank_id,
                account_number: this.account_number
            }
            axios({url: `${baseURL}/bank/verify`, data: obj, method: 'POST'})
            .then((res)=>{
                this.$store.commit('setSuccess', {status: true, msg: res.data.message})
                this.$emit('verify', res.data.data)
                this.$store.commit('endLoading')
            })
            .catch((err)=>{
                this.$store.dispatch('handleError', err)
            })
        }
    }
}
</script>

<style scoped>
.form__div{
  position: relative;
  height: 48px;
}
.form__input{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-size: 1rem;
  border: 1px solid #ECECEC;
  border-radius: .5rem;
  outline: none;
  padding: 1rem;
  background: none;
  z-index: 1;
}
.form__label{
  position: absolute;
  left: 1rem;
  top: 1rem;
  color: #80868B;
  padding: 0 .25rem;
  background-color: #fff;
  font-size: 1rem;
  transition: .3s;
}
select{
  border: 1px solid #ECECEC;
  border-radius: .5rem;
  padding: 1rem;
}
select:focus{
  border: 1px solid #1A73E8;
}
/*Input focus move up label*/
.form__input:focus + .form__label{
  top: -.5rem;
  left: .8rem;
  color:  #1A73E8;
  font-size: 1;
  font-weight: 500;
  z-index: 10;
}

/*Input focus sticky top label*/
.form__input:not(:placeholder-shown).form__input:not(:focus)+ .form__label{
  top: -.5rem;
  left: .8rem;
  font-size: 1;
  font-weight: 500;
  z-index: 10;
}

/*Input focus*/
.form__input:focus{
  border: 1.5px solid  #1A73E8;
}
</style>