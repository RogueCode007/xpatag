<template>
  <div class="px-3 pt-5 lg:flex lg:gap-10 lg:pr-10">
    <div class="lg:w-2/5">
      <h1 class="text-black font-bold text-2xl">Personal Information</h1>
      <p class="text-gray-500 mt-4">Please tell us a little bit about yourself. This information will be displayed on your public profile, allowing potential clients to learn more about you.</p>
    </div>
    <form @submit.prevent="submit" class="mt-8 lg:w-full">
     <div class="lg:flex lg:gap-4 lg:justify-between">
        <div class="form__div lg:w-full">
            <input type="text" class="form__input" placeholder=" ">
            <label class="text-gray-500 text-xs form__label">First name</label>
        </div>
        <div class="form__div mt-4 lg:mt-0 lg:w-full">
            <input type="text" class="form__input" placeholder=" ">
            <label class="text-gray-500 text-xs form__label">Last name</label>
        </div>
     </div>
      <div class="mt-4">
          <p style="color: #80868B; font-size: 1rem">Profile Picture</p>
          <label for="img" class="mt-4 imgcont flex justify-center items-center">
            <svg width="34" height="30" viewBox="0 0 34 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28.6668 5.83305H26.5335L26.0002 4.16638C25.6544 3.18843 25.0131 2.34222 24.165 1.74498C23.3169 1.14774 22.3041 0.829046 21.2668 0.833045H12.7335C11.6861 0.835005 10.6657 1.16585 9.81644 1.77889C8.96716 2.39192 8.33184 3.25619 8.00016 4.24971L7.46683 5.91638H5.3335C4.00741 5.91638 2.73564 6.44316 1.79796 7.38084C0.86028 8.31853 0.333496 9.5903 0.333496 10.9164V24.2497C0.333496 25.5758 0.86028 26.8476 1.79796 27.7852C2.73564 28.7229 4.00741 29.2497 5.3335 29.2497H28.6668C29.9929 29.2497 31.2647 28.7229 32.2024 27.7852C33.14 26.8476 33.6668 25.5758 33.6668 24.2497V10.9164C33.6779 10.2528 33.5567 9.59364 33.3104 8.97736C33.0641 8.36108 32.6976 7.80001 32.2322 7.32685C31.7668 6.8537 31.2118 6.47793 30.5997 6.22146C29.9876 5.96499 29.3305 5.83295 28.6668 5.83305ZM30.3335 24.1664C30.3335 24.6084 30.1579 25.0323 29.8453 25.3449C29.5328 25.6575 29.1089 25.833 28.6668 25.833H5.3335C4.89147 25.833 4.46755 25.6575 4.15498 25.3449C3.84242 25.0323 3.66683 24.6084 3.66683 24.1664V10.833C3.66683 10.391 3.84242 9.9671 4.15498 9.65453C4.46755 9.34197 4.89147 9.16638 5.3335 9.16638H8.66683C9.03027 9.18535 9.38994 9.08484 9.69089 8.88019C9.99184 8.67554 10.2175 8.37801 10.3335 8.03305L11.2335 5.29971C11.3453 4.96868 11.5583 4.68115 11.8424 4.47778C12.1266 4.27441 12.4674 4.16548 12.8168 4.16638H21.3502C21.6996 4.16548 22.0404 4.27441 22.3245 4.47778C22.6087 4.68115 22.8217 4.96868 22.9335 5.29971L23.8335 8.03305C23.9404 8.35095 24.1408 8.6292 24.4084 8.8314C24.6761 9.0336 24.9985 9.15034 25.3335 9.16638H28.6668C29.1089 9.16638 29.5328 9.34197 29.8453 9.65453C30.1579 9.9671 30.3335 10.391 30.3335 10.833V24.1664ZM17.0002 9.16638C15.6816 9.16638 14.3927 9.55737 13.2964 10.2899C12.2 11.0225 11.3455 12.0636 10.841 13.2818C10.3364 14.5 10.2044 15.8404 10.4616 17.1336C10.7188 18.4269 11.3538 19.6147 12.2861 20.5471C13.2185 21.4794 14.4064 22.1144 15.6996 22.3716C16.9928 22.6288 18.3332 22.4968 19.5514 21.9922C20.7696 21.4877 21.8107 20.6332 22.5433 19.5368C23.2758 18.4405 23.6668 17.1516 23.6668 15.833C23.6668 14.0649 22.9645 12.3692 21.7142 11.119C20.464 9.86876 18.7683 9.16638 17.0002 9.16638ZM17.0002 19.1664C16.3409 19.1664 15.6964 18.9709 15.1483 18.6046C14.6001 18.2383 14.1729 17.7177 13.9206 17.1087C13.6683 16.4996 13.6023 15.8293 13.7309 15.1827C13.8595 14.5361 14.177 13.9422 14.6431 13.476C15.1093 13.0098 15.7033 12.6924 16.3499 12.5638C16.9965 12.4351 17.6667 12.5012 18.2758 12.7534C18.8849 13.0057 19.4055 13.433 19.7717 13.9811C20.138 14.5293 20.3335 15.1738 20.3335 15.833C20.3335 16.7171 19.9823 17.5649 19.3572 18.1901C18.7321 18.8152 17.8842 19.1664 17.0002 19.1664Z" fill="white"/>
            </svg>
          </label>
          <input type="file" class="hidden" ref="img">
      </div>
      <div class="mt-4 flex">
        <div class="form__div w-full">
            <input type="email" class="form__input" placeholder=" ">
            <label class="text-gray-500 text-xs form__label">Email</label>
        </div>
        <div class="ml-4 flex items-center" style="color: #52B95E;font-size: 14px">
            <svg class="mr-3" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.8332 6.46407V7.00074C12.8325 8.25865 12.4251 9.48263 11.6719 10.4901C10.9188 11.4976 9.86009 12.2347 8.6538 12.5913C7.4475 12.948 6.15824 12.9052 4.97828 12.4692C3.79832 12.0333 2.79089 11.2276 2.10623 10.1724C1.42158 9.11709 1.09638 7.86877 1.17915 6.61359C1.26192 5.3584 1.74821 4.16359 2.5655 3.20736C3.38279 2.25113 4.4873 1.58471 5.71428 1.30749C6.94127 1.03027 8.22499 1.1571 9.37401 1.66907" stroke="#52B95E" stroke-width="1.07692" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.8333 2.33301L7 8.17217L5.25 6.42217" stroke="#52B95E" stroke-width="1.07692" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Verified
        </div>
      </div>
      <div class="mt-4 flex">
        <div class="form__div w-full">
            <input type="text" class="form__input" placeholder=" ">
            <label class="text-gray-500 text-xs form__label">Phone Number</label>
        </div>
        <div class="ml-4 flex items-center" style="color: #52B95E;font-size: 14px">
            <svg class="mr-3" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.8332 6.46407V7.00074C12.8325 8.25865 12.4251 9.48263 11.6719 10.4901C10.9188 11.4976 9.86009 12.2347 8.6538 12.5913C7.4475 12.948 6.15824 12.9052 4.97828 12.4692C3.79832 12.0333 2.79089 11.2276 2.10623 10.1724C1.42158 9.11709 1.09638 7.86877 1.17915 6.61359C1.26192 5.3584 1.74821 4.16359 2.5655 3.20736C3.38279 2.25113 4.4873 1.58471 5.71428 1.30749C6.94127 1.03027 8.22499 1.1571 9.37401 1.66907" stroke="#52B95E" stroke-width="1.07692" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.8333 2.33301L7 8.17217L5.25 6.42217" stroke="#52B95E" stroke-width="1.07692" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Verified
        </div>
      </div>
      <div class="mt-4 relative" style="min-height: 200px">
        <textarea class="form__input" placeholder="Share your professional experience, successful projects completed in the past and your years of expertise. Leave a convincing bio that will attract clients. "  cols="30" rows="10"></textarea>
        <!-- <label class="text-gray-500 text-xs form__label" >Service Description</label> -->
      </div>
      <button class="text-white p-3 w-full mt-6 mb-4" style="background: #52B95E;border-radius: 22px;">Continue</button>
    </form>
  </div>
</template>

<script>
export default {
  methods:{
    submit(){
      this.$router.push('/app/dashboard/services/create/2')
    }
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
@media only screen and (min-width: 1024px){
  form{
    max-width: 500px;
    position: relative;
    padding-bottom: 20px;
  }
  button{
    width: 200px;
    position: absolute;
    bottom: -60px;
    right: 0
  }
}
</style>