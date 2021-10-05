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
                    <textarea class="w-full p-3 focus:outline-none" placeholder="Describe the details for package"></textarea>
                </div>
                <div class="p-3 border-t border-solid">
                    <label class="text-sm text-gray-500">PRICE RANGE</label>
                    <input type="text" class="focus:outline-none outline-none w-full py-2">
                </div>
            </div>
            <div class="border border-solid mt-4 lg:mt-0">
                <div style="background: #F5F5F5" class="p-3">
                    <p>SILVER</p>    
                </div>
                <div>
                    <textarea class="w-full p-3 focus:outline-none" placeholder="Describe the details for package"></textarea>
                </div>
                <div class="p-3 border-t border-solid">
                    <label class="text-sm text-gray-500">PRICE RANGE</label>
                    <input type="text" class="focus:outline-none outline-none w-full py-2">
                </div>
            </div>
            <div class="border border-solid mt-4 lg:mt-0">
                <div style="background: #F5F5F5" class="p-3">
                    <p>GOLD</p>    
                </div>
                <div>
                    <textarea class="w-full p-3 focus:outline-none" placeholder="Describe the details for package"></textarea>
                </div>
                <div class="p-3 border-t border-solid">
                    <label class="text-sm text-gray-500">PRICE RANGE</label>
                    <input type="text" class="focus:outline-none outline-none w-full py-2">
                </div>
            </div>
        </div>
        <button class="text-white p-3 w-full mt-6 mb-4" style="background: #52B95E;border-radius: 22px;">Save & Publish</button>
    </form> 
    <Modal v-if="showModal" v-on:close="close"/>
  </div>
</template>

<script>
import Modal from "@/components/ServiceAdded.vue"
export default {
    components:{
        Modal
    },
    data(){
        return {
        showModal : false
        }
    },
    methods:{
        close(){
            this.$store.commit('setActiveModal', false)
            this.showModal = false
            this.$router.push('/app/dashboard/services')
        },
        submit(){
            this.$store.commit('setActiveModal', true)
            this.showModal = true
        }
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
    bottom: -180px;
    right: 80px
  }
}
</style>