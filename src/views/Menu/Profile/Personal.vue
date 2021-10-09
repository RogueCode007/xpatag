<template>
  <div>
      <input type="checkbox" v-model="state" value="1">
      <Complete v-if="complete" />
      <Incomplete v-else />
  </div>
</template>

<script>
import Complete from "@/components/Personal/Complete"
import Incomplete from "@/components/Personal/Incomplete"
export default {
    components:{
        Complete, Incomplete
    },
    data(){
        return{
            complete: false,
            state: []
        }
    },
    watch:{
        state(){
            if(this.state.length > 0){
                this.complete = true
            }else{
                this.complete = false
            }
        }
    }
}
</script>

<style>

</style>