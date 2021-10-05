<template>
  <div>
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
            complete: false
        }
    }
}
</script>

<style>

</style>