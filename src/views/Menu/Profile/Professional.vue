<template>
  <div>
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
            complete: true
        }
    }
}
</script>

<style>

</style>