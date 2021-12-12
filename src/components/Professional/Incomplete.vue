<template>
  <div class="px-3 lg:px-6 pt-5 lg:flex lg:gap-10 lg:pr-10">
    <div class="lg:w-2/5">
      <h1 class="text-black font-bold text-2xl">Professional Information</h1>
      <p class="text-gray-500 text-sm mt-4">Now is your chance to shine. Make it clear to potential purchasers what you excel at and how you acquired your talents, certificates, and expertise.</p>
    </div>
    <div class="mt-8 lg:w-full rightbox">
        <form @submit.prevent="submitDegree">
            <p class="text-gray-500 text-sm">EDUCATION</p>
            <div class="mt-4 relative pt-4" >
                <div class="form__div mt-2 ">
                    <input type="text" v-model="school" class="form__input" placeholder=" " required>
                    <label class="text-gray-500 text-xs form__label">University Name</label>
                </div>
                <div class="lg:flex lg:gap-4 lg:justify-between mt-4">
                    <div class="form__div lg:w-full">
                        <input type="text" v-model="degree" class="form__input" placeholder=" " required>
                        <label class="text-gray-500 text-xs form__label">Degree Title</label>
                    </div>
                    <div class="form__div mt-4 lg:mt-0 lg:w-full">
                        <input type="text" v-model="education_year" class="form__input" placeholder=" " required>
                        <label class="text-gray-500 text-xs form__label">Year</label>
                    </div>
                </div>    
            </div>
            <button class="bg-white mt-6 px-4 py-2 text-left text-xs block lg:float-right"  style="border: 1px solid #52B95E; border-radius: 17px; color: #52B95E">
                Add
            </button>
            <hr class="mt-4" style="margin-top: 70px">
        </form>
        <form @submit.prevent="submitCertificate">
            <p class="text-gray-500 text-sm mt-4">CERTIFICATION</p>
            <div class="mt-4 relative pt-4" >
                <div class=" mt-2 px-2 rounded" style="height: 58px; border: 1px solid #ECECEC; ">
                    <label class="text-gray-500 text-xs">Certificate</label>
                    <input type="file" class="block" ref="certificate" @change="upload" required>
                </div>
                <div class="lg:flex lg:gap-4 lg:justify-between mt-4">
                    <div class="form__div lg:w-full">
                        <input type="text" v-model="issued_by" class="form__input" placeholder=" " required>
                        <label class="text-gray-500 text-xs form__label">Issued By</label>
                    </div>
                    <div class="form__div mt-4 lg:mt-0 lg:w-full">
                        <input type="text" v-model="cert_year" class="form__input" placeholder=" " required>
                        <label class="text-gray-500 text-xs form__label">Year</label>
                    </div>
                </div>    
            </div>
            <button class="bg-white mt-6 px-4 py-2 text-left text-xs block lg:float-right"  style="border: 1px solid #52B95E; border-radius: 17px; color: #52B95E">
                Add
            </button>
            <hr class="mt-4" style="margin-top: 70px">
        </form>
        <form @submit.prevent="submitAward">
            <p class="text-gray-500 text-sm mt-4">AWARDS</p>
            <div class="mt-4 relative pt-4">
                <div class="form__div mt-2 ">
                    <input type="text" v-model="institute" class="form__input" placeholder=" " required>
                    <label class="text-gray-500 text-xs form__label">Award Institute</label>
                </div>
                <div class="lg:gap-4 lg:flex lg:justify-between mt-4">
                    <div class="form__div lg:w-full">
                        <input type="text" v-model="award_title" class="form__input" placeholder=" " required>
                        <label class="text-gray-500 text-xs form__label">Award Title</label>
                    </div>
                    <div class="form__div mt-4 lg:mt-0 lg:w-full">
                        <input type="text" v-model="award_year" class="form__input" placeholder=" " required>
                        <label class="text-gray-500 text-xs form__label">Year</label>
                    </div>
                </div>    
            </div>
            <button class="bg-white mt-6 px-4 py-2 text-left text-xs block lg:float-right"  style="border: 1px solid #52B95E; border-radius: 17px; color: #52B95E">
                Add
            </button>
            <hr class="mt-4" style="margin-top: 70px">
        </form>
        <form @submit.prevent="submitPortfolio">
            <p class="text-gray-500 text-sm mt-4">PORTFOLIO</p>
            <div class="mt-4 mb-12 relative pt-4" >
                <div class="lg:flex lg:gap-4 lg:justify-between mt-4">
                    <div class="form__div lg:w-full">
                        <input type="text" v-model="portfolio_year" class="form__input" placeholder=" " required>
                        <label class="text-gray-500 text-xs form__label">Year</label>
                    </div>
                    <div class="form__div mt-4 lg:mt-0 lg:w-full">
                        <input type="text" v-model="portfolio_title" class="form__input" placeholder=" " required>
                        <label class="text-gray-500 text-xs form__label">Title</label>
                    </div>
                </div>  
                <div class="form__div mt-2 ">
                    <textarea v-model="portfolio_description" class="form__input" placeholder=" " style="height: 80px" required></textarea>
                    <label class="text-gray-500 text-xs form__label">Job Description</label>
                </div>  
            </div>
            <button class="bg-white mt-12 px-4 py-2 text-left text-xs block lg:float-right"  style="border: 1px solid #52B95E; border-radius: 17px; color: #52B95E">
                Add
            </button>
        </form>
    </div>
    <Updated v-if="completed" v-on:close="completed = false" />
  </div>
</template>

<script>
import axios from 'axios'
import baseURL from '@/main'
import Updated from "@/components/ProfileUpdated"
export default {
    components:{
        Updated
    },
    data(){
        return {
            completed : false,
            school: '',
            degree: '',
            education_year: '',
            certfile: '',
            issued_by: '',
            cert_year: '',
            institute: '',
            award_title: '',
            award_year: '',
            portfolio_year: '',
            portfolio_title: '',
            portfolio_description: '',
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
        submitDegree(){
            this.$store.commit('startLoading')
            let obj = {
                school : this.school,
                degree: this.degree,
                year: parseInt(this.education_year)
            }
            axios({url: `${baseURL}/expert/profile/education`, data: obj, method:'POST'})
            .then(()=>{
                this.$store.commit('endLoading')
                this.$store.commit('setSuccess', {status: true, msg: 'Education record saved'})
            })
            .catch((err)=>{
                this.$store.dispatch('handleError', err)
            })
        },
        submitAward(){
            this.$store.commit('startLoading')
            let obj = {
                institute: this.institute,
                title: this.award_title,
                year: parseInt(this.award_year)
            }
            axios({url: `${baseURL}/expert/profile/award`, data: obj, method:'POST'})
            .then(()=>{
                this.$store.commit('endLoading')
                this.$store.commit('setSuccess', {status: true, msg: 'Award record saved'})
            })
            .catch((err)=>{
                this.$store.dispatch('handleError', err)
            })
        },
        submitPortfolio(){
            this.$store.commit('startLoading')
            let obj = {
                year: parseInt(this.portfolio_year),
                name: this.portfolio_title,
                description: this.portfolio_description
            }
            axios({url: `${baseURL}/expert/profile/portfolio`, data: obj, method:'POST'})
            .then(()=>{
                this.$store.commit('endLoading')
                this.$store.commit('setSuccess', {status: true, msg: 'Portfolio record saved'})
            })
            .catch((err)=>{
                this.$store.dispatch('handleError', err)
            })
        },
        submitCertificate(){
            this.$store.commit('startLoading')
            let formData = new FormData;
            formData.append('file', this.certfile);
            formData.append('issued_by', this.issued_by)
            formData.append('year', this.cert_year)
            axios.post(`${baseURL}/expert/profile/certificate`, formData, {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            })
            .then(() =>{
              this.$store.commit('endLoading')
              this.$store.commit('setSuccess', {status: true, msg: 'Certificate saved'})
            })
            .catch(err => {
              this.$store.dispatch('handleError', err)
            })
        },
        upload(){
            this.certfile = this.$refs.certificate.files[0]
        },
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
            this.portfolios.splice(index, 1)
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
  font-size: 12px;
  transition: .3s;
}
select{
  border: 1px solid #ECECEC;
  border-radius: .5rem;
  padding-left: 1rem;
  font-size: 12px
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
  .rightbox{
      max-width: 500px;
  }
  .submit{
    width: 200px;
    position: absolute;
    bottom: -70px;
    right: 0
  }
}
</style>