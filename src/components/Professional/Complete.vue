<template>
  <div class="py-8 lg:py-10 px-3 lg:px-6">  
    <div class=" infobox">
       <div class="py-4 border-b border-solid lg:flex justify-between">
           <h3 class="text-base text-black">Occupation</h3>
           <p class="mt-4 lg:mt-0 text-base  text-gray-500">Yahoo boy</p>
       </div> 
       <div class="py-4 border-b border-solid lg:flex justify-between">
           <h3 class="text-base text-black">Area of Expertise</h3>
           <p class="mt-4 lg:mt-0 text-base text-gray-500">Internet Fraud/Scams and Cashouts</p>
       </div> 
       <div class="py-4 border-b border-solid justify-between">
           <h3 class="text-base  text-black">Skills</h3>
           <div class="mt-4 flex skillbox">
               <div v-for="skill in skills" :key="skill.id" class="border border-solid rounded p-2 text-sm skill">{{skill}}</div>
           </div>
       </div>  
       <div class="py-4 border-b border-solid ">
           <h3 class="text-base text-black">Education</h3>
           <div>
                <p class="mt-4 font-normal text-sm text-gray-500">B.A - Computer Science</p>
                <div class="lg:flex mt-2 justify-between">
                    <p class="text-sm" style="color: #b7b7b7">YABA COLLEGE OF TECHNOLOGY, Nigeria,</p>
                    <p class="mt-2 lg:mt-0 text-sm" style="color: #b7b7b7">2019</p>
                </div>
           </div>
       </div> 
       <div class="py-4 border-b border-solid ">
           <h3 class="text-base text-black">Certification</h3>
           <div>
                <p class="mt-4 text-sm text-gray-500">Certified Expert in Agricultural Finance</p>
                <div class="lg:flex mt-2 justify-between">
                    <p class="text-sm" style="color: #b7b7b7">Frankfurt School of Finance & Management</p>
                    <p class="mt-2 lg:mt-0 text-sm" style="color: #b7b7b7">2019</p>
                </div>
           </div>
       </div> 
       <div class="py-4 border-b border-solid ">
           <h3 class="text-base text-black">Portfolio</h3>
           <div>
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
                            <p class=" text-sm text-gray-500">Frankfurt School of Finance & Management</p>
                            <p class="mt-2 text-sm" style="color: #b7b7b7">2021</p>
                        </div>
                    </div>
                    <p class="mt-2 lg:mt-0 text-sm text-green-500">View</p>
                </div>
           </div>
       </div> 
    </div>
  </div>
</template>

<script>
import placeholder from "@/assets/img/Signup/person.png"
export default {
    data(){
        return {
            placeholder: placeholder,
            skills: ['Time Management', 'Unethical Hacking', 'Social Engineering', 'Crypto']
        }
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