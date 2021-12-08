<template>
  <div class="border rounded pt-4 relative cont">
      <div class="px-2 lg:px-6">
          <button class="focus:outline-none flex items-center lg:hidden" @click="$emit('close')">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.83 11L11.41 7.41L10 6L4 12L10 18L11.41 16.59L7.83 13H20V11H7.83Z" fill="#2E3A59"></path>
            </svg>
            <p class="ml-2">Back</p>
            </button>
            <div class="flex justify-between items-end border-b py-4">
                <div>
                    <p>{{person.name}}</p>
                    <p class="mt-2 text-xs text-gray-600">June 22, 5:30am</p>
                </div>
                <button style="width: 150px; background: #52B95E;" class="text-sm rounded-3xl px-2 py-2 text-white oultine-none focus:outline-none">Send Contract</button>
            </div>
      </div>
      <div class="messages px-2 lg:px-6 " id="unique">
          <p v-for="(message, index) in person.messages" :key="index" class="border p-2 rounded my-2">{{message.msg}}</p>
          <p class="text-xs " v-if="usertyping">Typing....</p>
      </div>
      <form @submit.prevent="sendMessage" class="absolute bottom-2 w-full chatbox flex items-center px-2 rounded bg-white border gap-2">
          <input type="text" class="focus:outline-none py-2 bg-white w-full" placeholder="Send a message" v-model="message">
          <button class="focus:outline-none bg-white" style="color: #52B95E">Send</button>
      </form>
  </div>
</template>

<script>
export default {
    props: ['person', 'usertyping'],
    data(){
        return {
            message: null
        }
    },
    computed:{
        messages(){
            return this.person.messages
        }
    },
    watch:{
        messages(){
            let messageBox  = document.getElementById('unique')
            console.log(messageBox.scrollHeight)
            messageBox.scrollTop += messageBox.scrollHeight
        },
        message(value){
            value ? this.$emit('typing') : this.$emit('stopTyping')
        }
    },
    methods:{
        sendMessage(){
            if(this.message && this.message.length > 0){
                this.$emit('newMessage', this.message)
                this.message = null
            }
        }
    },
    mounted(){
       
    }
}
</script>

<style scoped>
.messages{
    min-height: 400px;
    overflow-y: scroll;
    margin-bottom: 50px
}


@media only screen and (min-width: 1024px){
    .cont{
        min-height: 80vh
    }
    .messages{
        max-height: 500px;
        overflow-y: scroll
    }
    .chatbox{
        width: 93%;
        left: 50%;
        transform: translateX(-50%);
    }
}


</style>