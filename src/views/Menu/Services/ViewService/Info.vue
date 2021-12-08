<template>
  <div class="px-3 pt-5">
      <div class="lg:flex ">
          <div class="w-full imgbox" style="border-radius: 7.81px">
                <img :src="service.image" class="w-full h-full">
          </div>
          <div class="mt-4 lg:mt-0 lg:ml-8 lg:pr-8 lg:w-full">
              <h1 class="font-bold text-xl text-black">{{service.name}}</h1>
              <p class="mt-1 text-sm text-green-500 lg:text-base tracking-widest">{{service.category.toUpperCase()}}</p>
              <p class="mt-3 text-base text-gray-500">{{service.description}}</p>
          </div>
      </div>
  </div>
</template>

<script>
import {mapState} from "vuex"
export default {
    computed:{
        ...mapState({
            service : state => state.service
        })
    },
    // mounted(){
    //     console.log(this.service)
    // }
}
</script>

<style scoped>
.imgbox{
    height: 200px
}
.imgbox img{
    border-radius: 7.81px
}
@media screen and (min-width: 1024px){
    .imgbox{
        max-width: 400px
    }
}
</style>