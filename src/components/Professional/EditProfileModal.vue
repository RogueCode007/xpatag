<template>
   <div class="l-modal">
      <div class="loading-modal w-full">
          <div class="loader bg-white mx-auto pb-8 px-4">
              <div class="flex justify-between items-center pt-6">
                <h1 class="text-lg">Edit Profile</h1>
                <button type="button" @click="$emit('close')">
                    <font-awesome-icon icon="times-circle" class="cursor-pointer text-red-500 text-xl " />
                </button>
              </div>
            
           <form @submit.prevent="submit" class="pt-6">
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
                        Edit Profile
                    </button>
            </form>
          </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
import baseURL from '@/main'
import Multiselect from 'vue-multiselect'
export default {
    components: { Multiselect },
    props: {
        profile: {
            type: Object,
            required: true
        }
    },
    data(){
        return {
            categories: [],
            experience: '',
            profession: '',
            sub_category_id: '',
            working_days: [],
            options: [{text: 'Monday', val: 1},{text: 'Tuesday', val:2},{text:'Wednesday', val:3}, {text:'Thursday', val:4,},{text:'Friday', val:5}, {text:'Saturday', val:6},{text:'Sunday', val:7}],
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
                experience : parseInt(this.experience),
                profile_id: this.profile.profile_id
            }
            this.editProfile(data)
        },
        editProfile(obj){
            this.$store.commit('startLoading')
            axios({url: `${baseURL}/profile`, data: obj, method: 'PATCH'})
            .then((res)=> {
                this.$store.commit('endLoading')
                this.$store.commit('setSuccess', {status: true, msg: res.data.message})
                this.$emit('close')
            })
            .catch((err)=>{
                this.$store.dispatch('handleError', err)
            })
        }, 
        getCategories(){
            axios.get(`${baseURL}/category`)
            .then(res=>{
                this.categories = res.data.data
            })
            .catch(err=>{
                this.$store.dispatch('handleError', err)
            })
        }
    },
    mounted(){
        console.log(this.profile)
        this.getCategories()
        this.experience = this.profile.experience
        this.sub_category_id = this.profile.sub_category.id
        this.profession = this.profile.profession
    }
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
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