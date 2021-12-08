<template>
  <div class="lg:flex catcont px-3">
    <div  class="category">
      <div class="flex">
          <div class="cat mr-2">
            <img :src="img1" alt="">
          </div>
          <div>
          <p class="font-bold">Bronze</p>
          <p class="mt-1 text-xl font-bold">{{service.packages.bronze_range}}</p>
          </div>
      </div>
      <ul>
          <li class="flex items-center gap-2 mt-4 light">
          <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.0933 1.55713L4.37269 8.18616L1.31787 5.17296" stroke="#9A9A9A" stroke-width="1.20528" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <p>{{service.packages.bronze_description}}</p>
          </li>
      </ul>
    </div>
    <div  class="category">
      <div class="flex">
          <div class="cat mr-2">
            <img :src="img2" alt="">
          </div>
          <div>
          <p class="font-bold">Silver</p>
          <p class="mt-1 text-xl font-bold">{{service.packages.silver_range}}</p>
          </div>
      </div>
      <ul>
          <li class="flex items-center gap-2 mt-4 light">
          <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.0933 1.55713L4.37269 8.18616L1.31787 5.17296" stroke="#9A9A9A" stroke-width="1.20528" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <p>{{service.packages.silver_description}}</p>
          </li>
      </ul>
    </div>
    <div  class="category">
      <div class="flex">
          <div class="cat mr-2">
            <img :src="img1" alt="">
          </div>
          <div>
          <p class="font-bold">Gold</p>
          <p class="mt-1 text-xl font-bold">{{service.packages.gold_range}}</p>
          </div>
      </div>
      <ul>
          <li class="flex items-center gap-2 mt-4 light">
          <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.0933 1.55713L4.37269 8.18616L1.31787 5.17296" stroke="#9A9A9A" stroke-width="1.20528" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <p>{{service.packages.gold_description}}</p>
          </li>
      </ul>
    </div>
 </div>
</template>

<script>
import img1 from "@/assets/img/services/Mask Group.png"
import img2 from "@/assets/img/services/Mask Group (1).png"
import img3 from "@/assets/img/services/Mask Group (2).png"
import {mapState} from "vuex"
export default {
  data(){
    return {
      img1: img1,
      img2: img2,
      img3: img3,
      
    }
  },
  computed:{
    ...mapState({
      service : state => state.service
    })
  }

}
</script>

<style scoped>
.link{
  max-width: 200px
}
.cat{
  width: 50px;
  height: 50px;
  border-radius: 7px;
}
.category{
  box-shadow: 0px 5.09328px 9.45895px rgba(0, 0, 0, 0.08);
  margin-bottom: 20px;
  padding: 35px 20px
}
.category{
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 7px;
}
@media only screen and (min-width: 1024px){
  .category{
    width: 30%;
    margin: 0 1.67%;
  }
  .catcont{
    margin-top: 40px
  }
}
</style>