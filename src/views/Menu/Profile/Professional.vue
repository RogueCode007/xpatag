<template>
  <div>
      <input type="checkbox" v-model="state" value="1">
      <Complete v-if="complete" />
      <Incomplete v-else />
  </div>
</template>

<script>
import Complete from "@/components/Professional/Complete"
import Incomplete from "@/components/Professional/Incomplete"
export default {
    components:{
        Complete, Incomplete
    },
    data(){
        return{
            complete: true,
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