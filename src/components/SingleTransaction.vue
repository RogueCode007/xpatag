<template>
   <div class="l-modal">
      <div class="loading-modal w-full">
          <div class="loader bg-white mx-auto py-10 px-4">
            <p class="text-lg text-black font-bold">Transaction <span class="text-xs">{{transaction.ref}}</span></p>
            <p class="text-3xl text-black font-bold text-center pt-6 pb-3">{{transaction.amount}}</p>
            <p class="mt-2 w-3/4 mx-auto text-center" style=" color: #454545;">{{transaction.desc}}</p>
            <p v-if="transaction.status == 'PENDING'" class="mx-auto mt-2 text-center rounded px-2 py-1 text-sm status" style="background-color: rgba(241, 186, 79, 0.1); color: #F1BA4F">
                {{transaction.status}}
            </p>
            <p v-else-if="transaction.status == 'SUCCESSFUL'" class="mx-auto mt-2 text-center rounded px-2 py-1 text-sm status" style="background-color: rgba(82, 185, 94, 0.1); color: #52B95E">
                {{transaction.status}}
            </p>
            <p v-else class="rounded px-2 py-1 text-sm text-center mt-2 mx-auto status" style="background-color: rgba(235, 87, 87, 0.1); color: #EB5757">
                {{transaction.status}}
            </p>
            <button @click="close" class="text-center block w-1/2 mx-auto mt-10 p-2 bg-white text-sm rounded" style="border: 1px solid #52B95E; color: #52B95E;border-radius: 22px;">Close</button>
          </div>
      </div>
    </div>
</template>

<script>

export default {
    props: ["transaction"],
    methods:{
        close(){
            this.$emit('close')
        }
    }
}
</script>

<style scoped>
.loader{
  position: relative;
  top: 50px;
  width: 80%;
  border-radius: 16px;
}
.times{
  top: -50px
}
.status{
    width: 50%;
}
@media only screen and (min-width: 1024px){
  .loader{
    width: 30%;
    max-width: 450px
  }
}
</style>