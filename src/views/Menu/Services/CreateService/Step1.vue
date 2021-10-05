<template>
  <div class="px-3 pt-5 lg:flex lg:pr-10">
    <div class="lg:w-2/5">
      <h1 class="text-black font-bold text-2xl">Service Information</h1>
      <p class="text-gray-500 mt-4">Please let's know your various professions and services</p>
    </div>
    <form @submit.prevent="submit" class="mt-8 lg:w-full">
      <div class="form__div">
        <input type="text" class="form__input" placeholder=" ">
        <label class="text-gray-500 text-xs form__label">Service Title</label>
      </div>
      <div class="mt-4">
        <select class="focus:outline-none w-full" style="color: #80868B">
          <option value="" selected disabled>Service Category</option>
          <option value="rre">fewkwef</option>
        </select>
      </div>
      <div class="mt-4 py-6" style="border: 1px solid #ECECEC;border-radius: .5rem;">
        <label for="img">
          <svg class="block w-full" width="34" height="26" viewBox="0 0 34 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.7782 11.043C16.7505 11.0077 16.7152 10.9792 16.6749 10.9595C16.6346 10.9399 16.5903 10.9297 16.5455 10.9297C16.5007 10.9297 16.4564 10.9399 16.4161 10.9595C16.3758 10.9792 16.3405 11.0077 16.3128 11.043L12.1765 16.2763C12.1424 16.3199 12.1212 16.3721 12.1154 16.4271C12.1096 16.4821 12.1194 16.5377 12.1437 16.5874C12.1679 16.637 12.2057 16.6789 12.2526 16.7082C12.2996 16.7374 12.3538 16.7529 12.4091 16.7527H15.1384V25.705C15.1384 25.8675 15.2713 26.0005 15.4339 26.0005H17.6498C17.8123 26.0005 17.9452 25.8675 17.9452 25.705V16.7564H20.6819C20.9293 16.7564 21.066 16.4721 20.9146 16.28L16.7782 11.043Z" fill="#52B95E"/>
            <path d="M27.603 7.63384C25.9115 3.17246 21.6015 0 16.5529 0C11.5043 0 7.19435 3.16876 5.50287 7.63015C2.3378 8.46112 0 11.3455 0 14.7728C0 18.8538 3.30541 22.1592 7.3827 22.1592H8.86368C9.02618 22.1592 9.15913 22.0262 9.15913 21.8637V19.6478C9.15913 19.4853 9.02618 19.3524 8.86368 19.3524H7.3827C6.1381 19.3524 4.96735 18.8575 4.09576 17.96C3.22786 17.0663 2.76621 15.8623 2.80683 14.614C2.84007 13.639 3.17246 12.7231 3.77445 11.9512C4.39121 11.1645 5.25542 10.5921 6.21565 10.3373L7.61538 9.97164L8.12873 8.61992C8.44635 7.77788 8.88953 6.99122 9.4472 6.27844C9.99775 5.57196 10.6499 4.95092 11.3824 4.43553C12.9003 3.3682 14.6879 2.80314 16.5529 2.80314C18.418 2.80314 20.2055 3.3682 21.7234 4.43553C22.4583 4.95258 23.1083 5.57304 23.6586 6.27844C24.2163 6.99122 24.6595 7.78157 24.9771 8.61992L25.4868 9.96794L26.8828 10.3373C28.8845 10.8765 30.2842 12.6972 30.2842 14.7728C30.2842 15.9952 29.8078 17.1475 28.9436 18.0117C28.5198 18.438 28.0156 18.776 27.4603 19.0061C26.9049 19.2363 26.3095 19.3539 25.7084 19.3524H24.2274C24.0649 19.3524 23.9319 19.4853 23.9319 19.6478V21.8637C23.9319 22.0262 24.0649 22.1592 24.2274 22.1592H25.7084C29.7856 22.1592 33.0911 18.8538 33.0911 14.7728C33.0911 11.3492 30.7607 8.4685 27.603 7.63384Z" fill="#52B95E"/>
          </svg>
          <p class="text-xs mt-2 text-center">Upload Service banner image</p>
        </label>
        <input type="file" id="img" class="hidden">
      </div>
      <div class="mt-4 relative" style="min-height: 200px">
        <textarea class="form__input" placeholder=" "  cols="30" rows="10"></textarea>
        <label class="text-gray-500 text-xs form__label" >Service Description</label>
      </div>
      <button class="text-white p-3 w-full mt-6 mb-4" style="background: #52B95E;border-radius: 22px;">Save & Continue</button>
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
.inputdiv{
  border: 1px solid ;
  border-radius: 4px;
  padding: 5px;
}
.inputdiv input:focus{
  border: 1px solid red
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