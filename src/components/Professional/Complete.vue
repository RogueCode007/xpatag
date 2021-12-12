<template>
  <div class="py-8 lg:py-10 px-3 lg:px-6">  
    <div class=" infobox">
       <div class="py-4 border-b border-solid lg:flex justify-between">
           <h3 class="text-base text-black">Profession</h3>
           <p class="mt-4 lg:mt-0 text-base  text-gray-500">{{profile.profession}}</p>
       </div> 
       <div class="py-4 border-b border-solid lg:flex justify-between">
           <h3 class="text-base text-black">Area of Expertise</h3>
           <p v-if="profile.category" class="mt-4 lg:mt-0 text-base text-gray-500">{{profile.category.name}}</p>
       </div> 
       <!-- <div class="py-4 border-b border-solid justify-between">
           <h3 class="text-base  text-black">Skills</h3>
           <div class="mt-4 flex skillbox">
               <div v-for="skill in skills" :key="skill.id" class="border border-solid rounded p-2 text-sm skill">{{skill}}</div>
           </div>
       </div>   -->
       <div class="py-4 border-b border-solid ">
           <h3 class="text-base text-black">Education</h3>
           <div v-if="profile.education">
                <p class="mt-4 font-normal text-sm text-gray-500">{{profile.education[profile.education.length - 1].degree}}</p>
                <div class="lg:flex mt-2 justify-between">
                    <p class="text-sm" style="color: #b7b7b7">{{profile.education[profile.education.length - 1].school}}</p>
                    <p class="mt-2 lg:mt-0 text-sm" style="color: #b7b7b7">{{profile.education[profile.education.length - 1].year}}</p>
                </div>
           </div>
       </div> 
       <div class="py-4 border-b border-solid ">
           <h3 class="text-base text-black">Award</h3>
           <div v-if="profile.award"> 
                <p class="mt-4 font-normal text-sm text-gray-500">{{profile.award[profile.award.length - 1].title}}</p>
                <div class="lg:flex mt-2 justify-between">
                    <p class="text-sm" style="color: #b7b7b7">{{profile.award[profile.award.length - 1].institute}}</p>
                    <p class="mt-2 lg:mt-0 text-sm" style="color: #b7b7b7">{{profile.award[profile.award.length - 1].year}}</p>
                </div>
           </div>
       </div> 
       <div class="py-4 border-b border-solid ">
           <h3 class="text-base text-black">Certification</h3>
           <div v-if="profile.certificate">
                <div class="lg:flex lg:justify-between lg:items-center mt-2">
                    <div class="flex">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0)">
                            <path d="M12.7992 1.82812H5.48543C5.0005 1.82813 4.53542 2.02076 4.19252 2.36366C3.84962 2.70657 3.65698 3.17164 3.65698 3.65657V18.2842C3.65698 18.7691 3.84962 19.2342 4.19252 19.5771C4.53542 19.92 5.0005 20.1126 5.48543 20.1126H16.4561C16.941 20.1126 17.4061 19.92 17.749 19.5771C18.0919 19.2342 18.2846 18.7691 18.2846 18.2842V7.31347L12.7992 1.82812Z" stroke="#111111" stroke-width="1.82845" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M12.7991 1.82812V7.31347H18.2844" stroke="#111111" stroke-width="1.82845" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M14.6275 11.8848H7.31372" stroke="#111111" stroke-width="1.82845" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M14.6275 15.542H7.31372" stroke="#111111" stroke-width="1.82845" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M9.14217 8.22754H8.22794H7.31372" stroke="#111111" stroke-width="1.82845" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                            <clipPath id="clip0">
                            <rect width="21.9414" height="21.9414" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                        <div class="ml-2">
                            <p class=" text-sm text-gray-500">{{profile.certificate[profile.certificate.length - 1].issued_by}}</p>
                            <p class="mt-2 text-sm" style="color: #b7b7b7">{{profile.certificate[profile.certificate.length - 1].year}}</p>
                        </div>
                    </div>
                    <a :href="profile.certificate[profile.certificate.length - 1].link" target="_blank" rel="noopener noreferrer" class=" block mt-2 lg:mt-0 text-sm text-green-500">View</a>
                </div>
           </div>
       </div> 
       <!-- <div class="py-4 border-b border-solid ">
           <h3 class="text-base text-black">Portfolio</h3>
           <div v-if="profile.portfolio">
                <div class="lg:flex lg:justify-between lg:items-center mt-2">
                    <div class="flex">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0)">
                            <path d="M12.7992 1.82812H5.48543C5.0005 1.82813 4.53542 2.02076 4.19252 2.36366C3.84962 2.70657 3.65698 3.17164 3.65698 3.65657V18.2842C3.65698 18.7691 3.84962 19.2342 4.19252 19.5771C4.53542 19.92 5.0005 20.1126 5.48543 20.1126H16.4561C16.941 20.1126 17.4061 19.92 17.749 19.5771C18.0919 19.2342 18.2846 18.7691 18.2846 18.2842V7.31347L12.7992 1.82812Z" stroke="#111111" stroke-width="1.82845" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M12.7991 1.82812V7.31347H18.2844" stroke="#111111" stroke-width="1.82845" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M14.6275 11.8848H7.31372" stroke="#111111" stroke-width="1.82845" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M14.6275 15.542H7.31372" stroke="#111111" stroke-width="1.82845" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M9.14217 8.22754H8.22794H7.31372" stroke="#111111" stroke-width="1.82845" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                            <clipPath id="clip0">
                            <rect width="21.9414" height="21.9414" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                        <div class="ml-2">
                            <p class=" text-sm text-gray-500">My Portfolio</p>
                            <p class="mt-2 text-sm" style="color: #b7b7b7">2021</p>
                        </div>
                    </div>
                    <a :href="profile.portfolio[0].file" target="_blank" rel="noopener noreferrer" class=" block mt-2 lg:mt-0 text-sm text-green-500">View</a>
                    <a >View</a>
                </div>
           </div>
       </div>  -->
    </div>
  </div>
</template>

<script>
import placeholder from "@/assets/img/Signup/person.png"
// import axios from 'axios'
// import baseURL from "@/main"
import {mapState} from 'vuex'
export default {
    data(){
        return {
            placeholder: placeholder,
            skills: ['Time Management', 'Unethical Hacking', 'Social Engineering', 'Crypto']
        }
    },
    computed:{
        ...mapState({
            userId: state => state.user.user_id,
            profile : state => state.profile.professionalProfile
        })
    },
    // methods:{
    //     getProfile(){
    //         this.$store.commit('startLoading')
    //         axios.get(`${baseURL}/expert/profile/${this.userId}`)
    //         .then((res)=>{
    //             this.$store.commit('setProfessionalProfile', res.data.data.profile)
    //             this.$store.commit('endLoading')
    //         })
    //         .catch((err)=>{
    //             this.$store.dispatch('handleError', err)
    //         })
    //     }
    // },
    mounted(){
        // if(Object.keys(this.profile).length == 0){
            // this.getProfile()
            console.log(this.profile)
        // }
    }
}
</script>

<style scoped>
.skillbox{
    flex-wrap: wrap;
    gap: 10px;
}
@media only screen and (min-width: 1024px){
    .imgcont{
        width: 150px;
        height: 150px;
    }
    .infobox{
        max-width: 600px
    }
}

</style>