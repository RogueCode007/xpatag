<template>
  <div class="px-3 pt-5 lg:flex lg:gap-10 lg:pr-10">
    <div class="lg:w-2/5">
      <h1 class="text-black font-bold text-2xl">Professional Information</h1>
      <p class="text-gray-500 mt-4">Now is your chance to shine. Make it clear to potential purchasers what you excel at and how you acquired your talents, certificates, and expertise.</p>
    </div>
    <form @submit.prevent="submit" class="mt-8 lg:w-full">
        <div class="lg:flex lg:gap-4 lg:justify-between">
            <div class="form__div lg:w-full">
                <select class="focus:outline-none w-full" style="color: #80868B">
                    <option value="" selected disabled>Your Occupation</option>
                    <option value="rre">fewkwef</option>
                </select>
            </div>
            <div class="form__div mt-4 lg:mt-0 lg:w-full">
                <input type="text" class="form__input" placeholder=" ">
                <label class="text-gray-500 text-xs form__label">Area of Expertise</label>
            </div>
        </div>
        <hr class="mt-4">
        <div>
            <p class="text-gray-500 text-lg mt-4">ADD SKILLS</p>
            <div class="mt-4 relative pt-4" v-for="(skill, index) in skills" :key="index">
                <font-awesome-icon icon="trash" class="text-red-500 absolute cursor-pointer" v-if="index > 0" @click="removeSkill(index)" style="right: 0; top: 0"/>
                <div class="lg:flex lg:gap-4 lg:justify-between mt-2">
                    <div class="form__div lg:mt-0 lg:w-full">
                        <input type="text" v-model="skill.skill" class="form__input" placeholder=" ">
                        <label class="text-gray-500 text-xs form__label">Skill</label>
                    </div>
                    <div class="mt-4 md:mt-0 form__div lg:w-full">
                        <select v-model="skill.experience_level" class="focus:outline-none w-full" style="color: #80868B">
                            <option value="" selected disabled>Experience Level</option>
                            <option value="rre">fewkwef</option>
                        </select>
                    </div>
                </div>    
            </div>
            <button @click="addSkill" class="bg-white mt-6 px-4 py-2 text-left text-xs block lg:float-right"  style="border: 1px solid #52B95E; border-radius: 17px; color: #52B95E">
                Add
            </button>
            <hr class="mt-4" style="margin-top: 70px">
        </div>
        <div>
            <p class="text-gray-500 text-lg mt-4">EDUCATION</p>
            <div class="mt-4 relative pt-4" v-for="(degree, index) in degrees" :key="index">
                <font-awesome-icon icon="trash" class="text-red-500 absolute cursor-pointer" v-if="index > 0" @click="removeDegree(index)" style="right: 0; top: 0"/>
                <div class="form__div mt-2 ">
                    <input type="text" v-model="degree.university_name" class="form__input" placeholder=" ">
                    <label class="text-gray-500 text-xs form__label">University Name</label>
                </div>
                <div class="lg:flex lg:gap-4 lg:justify-between mt-4">
                    <div class="form__div lg:w-full">
                        <!-- <label class="mt-2">Degree Title</label> -->
                        <input type="text" v-model="degree.title" class="form__input" placeholder=" ">
                        <label class="text-gray-500 text-xs form__label">Degree Title</label>
                    </div>
                    <div class="form__div mt-4 lg:mt-0 lg:w-full">
                        <input type="text" v-model="degree.year" class="form__input" placeholder=" ">
                        <label class="text-gray-500 text-xs form__label">Year</label>
                    </div>
                </div>    
            </div>
            <button @click="addDegree" class="bg-white mt-6 px-4 py-2 text-left text-xs block lg:float-right"  style="border: 1px solid #52B95E; border-radius: 17px; color: #52B95E">
                Add
            </button>
            <hr class="mt-4" style="margin-top: 70px">
        </div>
        <div>
            <p class="text-gray-500 text-lg mt-4">CERTIFICATION</p>
            <div class="mt-4 relative pt-4" v-for="(cert, index) in certifications" :key="index">
                <font-awesome-icon icon="trash" class="text-red-500 absolute cursor-pointer" v-if="index > 0" @click="removeCert(index)" style="right: 0; top: 0"/>
                <div class=" mt-2 px-2 rounded" style="height: 58px; border: 1px solid #ECECEC; ">
                    <label class="text-gray-500 text-xs">Certificate</label>
                    <input type="file" class="block" placeholder=" " @change="addCertFile(index)">
                </div>
                <div class="lg:flex lg:gap-4 lg:justify-between mt-4">
                    <div class="form__div lg:w-full">
                        <!-- <label class="mt-2">Degree Title</label> -->
                        <input type="text" v-model="cert.from" class="form__input" placeholder=" ">
                        <label class="text-gray-500 text-xs form__label">Issued By</label>
                    </div>
                    <div class="form__div mt-4 lg:mt-0 lg:w-full">
                        <input type="text" v-model="cert.year" class="form__input" placeholder=" ">
                        <label class="text-gray-500 text-xs form__label">Year</label>
                    </div>
                </div>    
            </div>
            <button @click="addCert" class="bg-white mt-6 px-4 py-2 text-left text-xs block lg:float-right"  style="border: 1px solid #52B95E; border-radius: 17px; color: #52B95E">
                Add
            </button>
            <hr class="mt-4" style="margin-top: 70px">
        </div>
        <div class="mt-4">
            <div class="mt-4 relative pt-4" v-for="(memb, index) in memberships" :key="index">
                <font-awesome-icon icon="trash" class="text-red-500 absolute cursor-pointer" v-if="index > 0" @click="removeMembership(index)" style="right: 0; top: 0"/>
                <div class="form__div">
                    <input type="text" v-model="memb.name" class="form__input" placeholder=" ">
                    <label class="text-gray-500 text-xs form__label">Professional Membership</label>
                </div>
            </div>
            <button @click="addMembership" class="bg-white mt-6 px-4 py-2 text-left text-xs block lg:float-right"  style="border: 1px solid #52B95E; border-radius: 17px; color: #52B95E">
                Add
            </button>
            <hr class="mt-4" style="margin-top: 70px">
        </div>
        <div>
            <p class="text-gray-500 text-lg mt-4">AWARDS</p>
            <div class="mt-4 relative pt-4" v-for="(item, index) in awards" :key="index">
                <font-awesome-icon icon="trash" class="text-red-500 absolute cursor-pointer" v-if="index > 0" @click="removeAward(index)" style="right: 0; top: 0"/>
                <div class="form__div mt-2 ">
                    <input type="text" v-model="item.institue" class="form__input" placeholder=" ">
                    <label class="text-gray-500 text-xs form__label">Award Institute</label>
                </div>
                <div class="lg:gap-4 lg:flex lg:justify-between mt-4">
                    <div class="form__div lg:w-full">
                        <input type="text" v-model="item.title" class="form__input" placeholder=" ">
                        <label class="text-gray-500 text-xs form__label">Award Title</label>
                    </div>
                    <div class="form__div mt-4 lg:mt-0 lg:w-full">
                        <input type="text" v-model="item.year" class="form__input" placeholder=" ">
                        <label class="text-gray-500 text-xs form__label">Year</label>
                    </div>
                </div>    
            </div>
            <button @click="addAward" class="bg-white mt-6 px-4 py-2 text-left text-xs block lg:float-right"  style="border: 1px solid #52B95E; border-radius: 17px; color: #52B95E">
                Add
            </button>
            <hr class="mt-4" style="margin-top: 70px">
        </div>
        <div>
            <p class="text-gray-500 text-lg mt-4">PORTFOLIO</p>
            <div class="mt-4 relative pt-4" v-for="(item, index) in portfolios" :key="index">
                <font-awesome-icon icon="trash" class="text-red-500 absolute cursor-pointer" v-if="index > 0" @click="removePortfolio(index)" style="right: 0; top: 0"/>
                <div class="lg:flex lg:gap-4 lg:justify-between mt-4">
                    <div class="form__div lg:w-full">
                        <input type="text" v-model="item.year" class="form__input" placeholder=" ">
                        <label class="text-gray-500 text-xs form__label">Year</label>
                    </div>
                    <div class="form__div mt-4 lg:mt-0 lg:w-full">
                        <input type="text" v-model="item.title" class="form__input" placeholder=" ">
                        <label class="text-gray-500 text-xs form__label">Title</label>
                    </div>
                </div>  
                <div class="form__div mt-2 ">
                    <textarea v-model="item.description" class="form__input" placeholder=" " style="height: 80px"></textarea>
                    <label class="text-gray-500 text-xs form__label">Job Description</label>
                </div>  
            </div>
            <button @click="addPortfolio" class="bg-white mt-12 px-4 py-2 text-left text-xs block lg:float-right"  style="border: 1px solid #52B95E; border-radius: 17px; color: #52B95E">
                Add
            </button>
        </div>
        <button class="text-white p-3 w-full mt-6 mb-4 submit" style="background: #52B95E;border-radius: 22px;">Continue</button>
    </form>
    <Updated v-if="completed" v-on:close="completed = false" />
  </div>
</template>

<script>
import Updated from "@/components/ProfileUpdated"
export default {
    components:{
        Updated
    },
    data(){
        return {
            completed : false,
            skills: [
                {skill: "", experience_level: ""}
            ],
            degrees: [
                {university_name: "", year: "", title: "" }
            ],
            awards: [
                {institute: "", year: "", title: "" }
            ],
            certifications: [
                {from: "", year: "", name: "" }
            ],
            memberships: [{
                name: ""
            }],
            portfolios: [
                {year: "", title: "", description: ""}
            ]
        }
    },
    methods:{
        submit(){
            this.completed = true;
        // this.$router.push('/app/dashboard/services/create/2')
        },
        addSkill(){
            this.skills.push({
                skill: "",
                experience_level: "",
            })
        },
        removeSkill(index){
            this.skills.splice(index, 1)
        },
        addDegree(){
            this.degrees.push({
                university_name: "", year: "", title: ""
            })
        },
        removeDegree(index){
            this.degrees.splice(index, 1)
        },
        addCert(){
            this.certifications.push({
                from: "", year: "", name: "" 
            })
        },
        removeCert(index){
            this.certifications.splice(index, 1)
        },
        addCertFile(){
            console.log('file added')
        },
        addMembership(){
            this.memberships.push({
                name: "" 
            })
        },
        removeMembership(index){
            this.memberships.splice(index, 1)
        },
        addAward(){
            this.awards.push({
                institute: "" , year: "", title: ""
            })
        },
        removeAward(index){
            this.awards.splice(index, 1)
        },
        addPortfolio(){
            this.portfolios.push({
                description: "" , year: "", title: ""
            })
        },
        removePortfolio(index){
            this.awards.splice(index, 1)
        },
    }
}
</script>

<style scoped>
.imgcont{
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #DDDDDD;
  /* border: 1px solid red */
}
.form__div{
  position: relative;
  height: 48px;
}
select{
    height: 48px
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
  padding-left: 1rem;
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
@media only screen and (min-width: 1024px){
  form{
    max-width: 500px;
    position: relative;
    padding-bottom: 20px;
  }
  .submit{
    width: 200px;
    position: absolute;
    bottom: -70px;
    right: 0
  }
}
</style>