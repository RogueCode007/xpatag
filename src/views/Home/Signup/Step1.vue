<template>
  <div class="mt-6">
    <h1 class="fonts-bold text-2xl text-center">Create an account</h1>
    <form @submit.prevent="validate" class="mt-4">
      <div class="form__div mt-2">
        <input v-model="firstname" type="text" class="form__input" placeholder=" " required>
        <label class="text-sm text-gray-400 form__label">First name</label>
      </div>
      <div class="mt-4 form__div">
        <input v-model="lastname" type="text" class="form__input " placeholder=" " required>
        <label class="text-sm text-gray-400 form__label">Last name</label>
      </div>
      <div class="mt-4 form__div">
        <input v-model="email" type="email" class="form__input " placeholder=" " required>
        <label class="text-sm text-gray-400 form__label">Email Address</label>
      </div>
      <div class="mt-4">
        <div class="form__div mt-2 w-full rounded relative">
          <input type="password" v-model="password" ref="password" class="form__input " placeholder=" " required>
          <label class="text-sm text-gray-400 form__label">Password</label>
          <font-awesome-icon icon="eye" v-if="showEye" class="absolute cursor-pointer eye text-gray-500" @click="showPassword"/>
          <font-awesome-icon icon="eye-slash" v-else class="absolute cursor-pointer eye text-gray-500" @click="hidePassword"/>
        </div>
        <p v-if="password.length > 0 && error.password" class="text-red-500 text-sm mt-2">Your password should contain at least 8 characters (at least one uppercase, one lowercase, one special character and one number)</p>
      </div>
      <button class="mt-10 outline-none py-2 w-full lg:w-4/5 lg:block lg:mx-auto text-white focus:outline-none" style="background-color: #52B95E; border-radius: 22px">Continue</button>
    </form>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data(){
    return {
      showEye : true,
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      error: {
        password: false
      }
    }
  },
  watch:{
    password(){
      if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&^])[A-Za-z\d@$!%*#?&^]{8,}$/.test(this.password)){
        this.error.password = false
      }else{
        this.error.password = true
      }
    },
  },
  computed:{
    ...mapState({
      user: state => state.newUser
    })
  },
  methods:{
    showPassword(){
      this.$refs.password.type = 'text'
      this.showEye = false
    },
    hidePassword(){
      this.$refs.password.type = 'password'
      this.showEye = true
    },
    validate(){
       if(Object.values(this.error).includes(true)){
        return
      }else{
        const user = {
          firstname: this.firstname,
          lastname: this.lastname,
          email : this.email,
          password : this.password
        }
        this.$store.commit('setNewUser', user)
        this.$router.push('/signup/expert/step2')
        this.$store.commit('increaseSignup', {val: 25})
      }
    }
  },
  mounted(){
    this.$store.commit('endLoading')
    if(this.user.firstname){
      this.firstname = this.user.firstname
      this.lastname =  this.user.lastname
      this.email = this.user.email
      this.password = this.user.password
    }
  }
}
</script>

<style scoped>
.eye{
  top: 0;
  bottom: 0;
  margin: auto 0;
  right: 5px;
  cursor: pointer;
  z-index: 100;
}
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
  top: 0.8rem;
  color: #80868B;
  padding: 0 .25rem;
  background-color: #fff;
  font-size: 1rem;
  transition: .3s;
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