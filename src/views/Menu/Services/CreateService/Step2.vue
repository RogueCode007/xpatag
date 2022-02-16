<template>
  <div class="px-3 pt-5 lg:flex lg:gap-4">
    <div class="lg:w-2/5">
        <h1 class="text-black font-bold text-2xl">Service Packages</h1>
        <p class="text-gray-500 mt-4">Based on your different services offerings that will suit any budget, you will reach a wider customer segment. It explains the features you can offer for a particular price range.</p>
    </div>
    <form @submit.prevent="submit" class="mt-4 lg:mt-0">
        <div class="lg:flex">
            <div class="border border-solid">
                <div style="background: #F5F5F5" class="p-3">
                    <p>BRONZE</p>    
                </div>
                <div>
                    <textarea v-model="bronze_description" class="w-full p-3 focus:outline-none" placeholder="Describe the details for package" required></textarea>
                </div>
                <div class="p-3 border-t border-solid">
                    <p class="text-sm text-gray-500">PRICE RANGE</p>
                    <div class="mt-4">
                        <label class="text-xs">Lower Range</label>   
                        <money v-model="bronze_lower_bound" v-bind="money" class="focus:outline-none border outline-none w-full p-2" required></money>
                    </div>
                    <div class="mt-4">
                        <label class="text-xs">Upper Range</label>   
                        <money v-model="bronze_upper_bound" v-bind="money" class="focus:outline-none border outline-none w-full p-2" required></money>
                    </div>
                </div>
            </div>
            <div class="border border-solid mt-4 lg:mt-0">
                <div style="background: #F5F5F5" class="p-3">
                    <p>SILVER</p>    
                </div>
                <div>
                    <textarea v-model="silver_description" required class="w-full p-3 focus:outline-none" placeholder="Describe the details for package"></textarea>
                </div>
                <div class="p-3 border-t border-solid">
                    <label class="text-sm text-gray-500">PRICE RANGE</label>
                    <div class="mt-4">
                        <label class="text-xs">Lower Range</label>   
                        <money v-model="silver_lower_bound" v-bind="money" class="focus:outline-none border outline-none w-full p-2" required></money>
                    </div>
                    <div class="mt-4">
                        <label class="text-xs">Upper Range</label>   
                        <money v-model="silver_upper_bound" v-bind="money" class="focus:outline-none border outline-none w-full p-2" required></money>
                    </div>
                </div>
            </div>
            <div class="border border-solid mt-4 lg:mt-0">
                <div style="background: #F5F5F5" class="p-3">
                    <p>GOLD</p>    
                </div>
                <div>
                    <textarea v-model="gold_description" required class="w-full p-3 focus:outline-none" placeholder="Describe the details for package"></textarea>
                </div>
                <div class="p-3 border-t border-solid">
                    <label class="text-sm text-gray-500">PRICE RANGE</label>
                    <div class="mt-4">
                        <label class="text-xs">Lower Range</label>   
                        <money v-model="gold_lower_bound" v-bind="money" class="focus:outline-none border outline-none w-full p-2" required></money>
                    </div>
                    <div class="mt-4">
                        <label class="text-xs">Upper Range</label>   
                        <money v-model="gold_upper_bound" v-bind="money" class="focus:outline-none border outline-none w-full p-2" required></money>
                    </div>
                </div>
            </div>
        </div>
        <div class="relative">
            <button class="text-white p-3 w-full mt-6 mb-4" style="background: #52B95E;border-radius: 22px;">Save & Publish</button>
        </div>
        
    </form> 
    <Modal v-if="showModal" v-on:close="close"/>
  </div>
</template>

<script>
import Modal from "@/components/ServiceAdded.vue"
import axios from "axios"
import baseURL from "@/main"
import {mapState} from 'vuex'
import {Money} from "v-money"
export default {
    components:{
        Modal, Money
    },
    data(){
        return {
            showModal : false,
            bronze_description: '',
            silver_description: '',
            gold_description: '',
            bronze_lower_bound: '',
            bronze_upper_bound: '',
            silver_lower_bound: '',
            silver_upper_bound: '',
            gold_lower_bound: '',
            gold_upper_bound: '',
            money: {
                thousands: ',',
                prefix: '₦ ',
                precision: 0,
                masked: false
            }
            
        }
    },
    computed:{
        ...mapState({
            newService : state => state.newService
        })
    },
    methods:{
        close(){
            this.$store.commit('setActiveModal', false)
            this.showModal = false
            this.getServices()
        },
        submit(){
            this.$store.commit('startLoading')
            const obj = {
                bronze_description : this.bronze_description,
                silver_description : this.silver_description,
                gold_description : this.gold_description,
                bronze_lower_bound: this.bronze_lower_bound * 100,
                bronze_upper_bound: this.bronze_upper_bound * 100,
                silver_lower_bound : this.silver_lower_bound * 100,
                silver_upper_bound: this.silver_upper_bound * 100,
                gold_lower_bound : this.gold_lower_bound * 100,
                gold_upper_bound : this.gold_upper_bound * 100,
                name: this.newService.name,
                image: this.newService.image,
                service_description : this.newService.service_description,
                profile_id : this.newService.profile_id
            }
            axios({url: `${baseURL}/service`, data: obj, method: 'POST'})
            .then(res=>{
                console.log(res.data.data)
                this.$store.commit('endLoading')
                this.$store.commit('setActiveModal', true)
                this.showModal = true
            })
            .catch(err=>{
                this.$store.dispatch('handleError', err)
            })
        },
        getServices(){
            this.$store.commit('startLoading')
            axios.get(`${baseURL}/service`)
            .then(res=>{
                this.$store.commit('endLoading')
                this.$store.commit('setServices', res.data.data)
                this.$router.push('/app/dashboard/services')
            })
            .catch(err=>{
                this.$store.dispatch('handleError', err)
            })
        }
    },
    mounted(){
        console.log(this.newService)
        
    }
}
</script>

<style scoped>
    textarea{
        height : 200px 
    }
@media only screen and (min-width: 1024px){
    textarea{
        height : 300px 
    }
  button{
    width: 200px;
    position: absolute;
    /* bottom: -180px; */
    right: 0  
 }
}
</style>