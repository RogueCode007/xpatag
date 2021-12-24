<template>
   <div class="l-modal">
      <div class="loading-modal w-full">
          <div class="loader bg-white mx-auto px-4 pt-4 pb-8">
                <div class="flex items-center justify-between">
                    <p class="text-xl text-black font-bold">View Contract</p>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" @click="$emit('close')" class="cursor-pointer">
                        <path d="M17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41L17.59 5Z" fill="#2E3A59"></path>
                    </svg>
                </div>
                <div class="mt-8 lg:flex lg:items-center lg:justify-between pb-4 border-b">
                    <p>Amount</p>
                    <p class="mt-2 font-bold">{{contract.amount}}</p>
                </div>
                <div class="mt-4 lg:flex lg:items-center lg:justify-between pb-4 border-b">
                    <p>Timeline</p>
                    <p class="mt-2 font-bold">{{contract.start | timeConverter}} - {{contract.end | timeConverter}}</p>
                </div>
                <div class="mt-4 lg:items-center lg:justify-between pb-4">
                    <p>Contract Description</p>
                    <p class="mt-2 font-bold">{{contract.description}}</p>
                </div>
          </div>
      </div>
    </div>
</template>

<script>

export default {
    props: ['contract'],
    data(){
        return {
            
        }
    },
    filters:{
      timeConverter(val){
        let arr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        let start = val.split('-')
        let last = start[start.length - 1].split('')
        let str = last[0] + last[1]
        let dateString = start[0] + start[1] + str
        let year = dateString.substring(0,4);
        let month = dateString.substring(4,6);
        let day= dateString.substring(6,8);
        let date = new Date(year, month-1, day)
        return date.getDate() + ' ' + arr[date.getMonth()] +' ' + date.getFullYear()
      }

    },
    methods:{
   
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
@media only screen and (min-width: 1024px){
  .loader{
    width: 30%;
    max-width: 450px
  }
}
</style>