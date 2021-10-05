<template>
  <div class="cont mx-auto">
    <div class="progress" :style="{width: step + '%'}"></div>  
  </div>
</template>

<script>
import {mapState} from "vuex"
export default {
 computed:{
  ...mapState({
    step : state => state.signupStep          
  })
 }, 
 mounted(){
    console.log(this.step)
 }
}
</script>

<style scoped>
    div.cont{
        width: 100px;
        height: 4px;
        background-color: #EAEAEA;
        border-radius: 2px
    }
    div.progress{
        height: 100%;
        background-color: #52B95E;
        border-radius: 2px
    }
    @media only screen and (min-width: 1024px){
        div.cont{
            width: 200px
        }
    }
</style>