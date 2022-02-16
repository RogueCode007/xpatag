<template>
  <div class="">
      <form @submit.prevent="submit">
           <div class="mt-4">
                <label class="text-sm text-gray-400">Area of expertise/sub-category</label>
                <select v-model="sub_category_id" class="mt-2 bg-white w-full py-2 px-3 rounded outline-none border focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" required>
                <option value="" selected disabled>Select an area of expertise</option>
                <optgroup v-for="(category,index) in categories" :key="index" :label="category.name">
                    <option v-for="(sub,index) in category.sub_category" :key="index" :value="sub.sub_category_id">{{sub.name}}</option>
                </optgroup>
                </select>
            </div>
            <div class="mt-4">
                <label class="text-sm text-gray-400">Years of Experience</label>
                <input v-model="experience" type="text" class="mt-2 bg-white w-full py-2 px-3 rounded outline-none border focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" placeholder="3" required>
                <p v-if="experience.length > 0 && error.experience" class="text-red-500 text-sm mt-2">Please enter a number</p>
            </div>
            <div class="mt-4">
                <label class="text-sm text-gray-400">Profession</label>
                <input v-model="profession" type="text" class="mt-2 bg-white w-full py-2 px-3 rounded outline-none border focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" required>
            </div>
            <div class="mt-4">
                <label class="text-sm text-gray-400">Select days of availability</label>
                <div class="mt-2">
                    <multiselect v-model="working_days" :options="options" :multiple="true" track-by="val" label="text" ></multiselect>
                </div>
                <p v-if="error.availability" class="text-red-500 text-sm mt-2">Please select at least one day</p>
            </div>
             <button class="bg-white mt-6 px-4 py-2 text-left text-xs block "  style="border: 1px solid #52B95E; border-radius: 17px; color: #52B95E">
                Create Profile
            </button>
      </form>
  </div>
</template>

<script>
import axios from 'axios'
import baseURL from '@/main'
import Multiselect from 'vue-multiselect'
export default {
    components: { Multiselect },
    data(){
        return {
            categories: [],
            experience: '',
            profession: '',
            sub_category_id: '',
            working_days: [],
            options: [{text: 'Mon', val: 1},{text: 'Tue', val:2},{text:'Wed', val:3}, {text:'Thu', val:4,},{text:'Fri', val:5}, {text:'Sat', val:6},{text:'Sun', val:7}],
            error: {
                experience: false,
                availability: false
            }
        }
    },
    watch: {
        experience(){
            if(/^\d*$/.test(this.experience)) return this.error.experience = false
            this.error.experience = true
        },
        working_days(){
            if(this.working_days.length > 0) return this.error.availability = false
            this.error.availability = true
        }
    },
    methods: {
        submit(){
            if(Object.values(this.error).includes(true)) return 
            let working_days = []
            this.working_days.map((item)=> {
                working_days.push(item.val)
            })
            let data = {
                sub_category_id : this.sub_category_id,
                working_days : working_days,
                profession : this.profession, 
                experience : parseInt(this.experience)
            }
            this.createProfile(data)
        },
        createProfile(data){
            this.$store.commit('startLoading')
            axios({url: `${baseURL}/profile`, data: data, method: 'POST'})
            .then((res)=> {
                this.$store.commit('endLoading')
                this.$store.commit('setProfileId', res.data.data.profile_id)
                this.$router.push('/app/dashboard/profile/add/2')
            })
            .catch((err)=>{
                this.$store.dispatch('handleError', err)
            })
        }
    },
    mounted(){
        axios.get(`${baseURL}/category`)
        .then(res=>{
            this.$store.commit('endLoading')
            this.categories = res.data.data
            
        })
        .catch(err=>{
            this.$store.dispatch('handleError', err)
        })
    }
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>

</style>