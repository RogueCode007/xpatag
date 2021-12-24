
<template>
<div>
    <div v-if="!person" class="border rounded pt-4 relative cont">
      <div class="px-2 lg:px-6">
          <button class="focus:outline-none flex items-center lg:hidden" @click="$emit('close')">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.83 11L11.41 7.41L10 6L4 12L10 18L11.41 16.59L7.83 13H20V11H7.83Z" fill="#2E3A59"></path>
            </svg>
            <p class="ml-2">Back</p>
            </button>
            <div class="flex justify-between items-end border-b py-4">
                <div>
                    <p>...</p>
                    <p class="mt-2 text-xs text-gray-600">{{strTime}}</p>
                </div>
                <!-- <button @click="show = true" style="width: 150px; background: #52B95E;" class="text-sm rounded-3xl px-2 py-2 text-white oultine-none focus:outline-none">Send Contract</button> -->
            </div>
      </div>
      
      <form @submit.prevent="sendMessage" class="absolute bottom-2 w-full chatbox flex items-center px-2 rounded bg-white border gap-2">
          <input type="text" class="focus:outline-none py-2 bg-white w-full" placeholder="Send a message" v-model="message">
          <button class="focus:outline-none bg-white" style="color: #52B95E">Send</button>
      </form>
    </div>
    <div v-else class="border rounded pt-4 relative cont">
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
                    <p class="mt-2 text-xs text-gray-600">{{strTime}}</p>
                </div>
                <button @click="show = true" style="width: 150px; background: #52B95E;" class="text-sm rounded-3xl px-2 py-2 text-white oultine-none focus:outline-none">Send Contract</button>
            </div>
      </div>
      <div class="messages px-2 lg:px-6 " ref="messagesContainer">
          <div v-for="(message, index) in messages" :key="index">
                <p v-if="!message.contract" class="border p-2 rounded my-2 message" :class="[message.sender.id == user.user_id ? 'greenbg' : 'whitebg']">{{message.messages}}</p>
                <div v-else class="border flex items-center justify-between p-2 rounded my-2 message text-white bggrad" :class="[message.sender.id == user.user_id ? 'contract' : '']">
                    <div class="flex items-center">
                        <svg class="mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 22H6C4.89543 22 4 21.1046 4 20V3.99999C4 2.89542 4.89543 1.99999 6 1.99999H13C13.009 1.99882 13.018 1.99882 13.027 1.99999H13.033C13.0424 2.00294 13.0522 2.00495 13.062 2.00599C13.1502 2.01164 13.2373 2.02878 13.321 2.05699H13.336H13.351H13.363C13.3815 2.06991 13.3988 2.08429 13.415 2.09999C13.5239 2.14841 13.6232 2.21617 13.708 2.29999L19.708 8.29999C19.7918 8.38477 19.8596 8.48404 19.908 8.59299C19.917 8.61499 19.924 8.63599 19.931 8.65899L19.941 8.68699C19.9689 8.77038 19.9854 8.85717 19.99 8.94499C19.9909 8.95495 19.9932 8.96472 19.997 8.97399V8.97999C19.9986 8.98654 19.9996 8.99324 20 8.99999V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22ZM13 3.99999V8.99999H18L13 3.99999Z" fill="#fff"></path>
                        </svg>
                        <p>Contract Sent</p>
                    </div>
                    <button class="focus:outline-none text-white" @click="showContract(message.contract_detail)">View</button>
                </div>
          </div>
      </div>
      <form @submit.prevent="sendMessage" class="absolute bottom-2 w-full chatbox flex items-center px-2 rounded bg-white border gap-2">
          <input type="text" class="focus:outline-none py-2 bg-white w-full" placeholder="Send a message" v-model="message">
          <button class="focus:outline-none bg-white" style="color: #52B95E">Send</button>
      </form>
      <SendContract v-if="show" v-on:close="show = false" v-on:sendContract="sendContract" />
      <ViewContract :contract="contract" v-if="show2" v-on:close="show2 = false"/>
  </div>
</div>
  
</template>

<script>
import {mapState} from 'vuex'
import ViewContract from "./ViewContract"
import SendContract from "./SendContract"
export default {
    components:{ViewContract, SendContract},
    props: ['person', 'messages'],
    data(){
        return {
            message: null,
            show: false,
            show2: false,
            contract: {},
            strTime: ''
        }
    },
    computed:{
        ...mapState({
            user : state => state.user
        })
    },
    watch:{
        messages(){
           this.scrollToEnd()
        },
    },
    methods:{
        sendMessage(){
            if(this.message && this.message.length > 0){
                this.$emit('newMessage', this.message)
                this.message = null
            }
        },
        getTime(){
            var date = new Date()
            var hours = date.getHours();
            var minutes = date.getMinutes();
            var ampm = hours >= 12 ? 'pm' : 'am';
            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'
            minutes = minutes < 10 ? '0'+minutes : minutes;
            this.strTime = hours + ':' + minutes + ' ' + ampm;
        },
        sendContract(obj){
            // console.log(obj)
            this.$emit('sendContract', obj)
        },
        showContract(obj){
            this.show2 = true
            this.contract = obj
        },
        scrollToEnd: function () {
            var content = this.$refs.messagesContainer;
            content.scrollTop = content.scrollHeight
            // alert("scroll height is " + content.scrollHeight + " scroll Top is " +  content.scrollTop);
        },
    },
    mounted(){
       this.getTime()
       this.scrollToEnd()
    },
    updated(){
        this.scrollToEnd()
    }
}
</script>

<style scoped>
.greenbg{
    background:  rgba(82, 185, 94, 0.12);
    border: none;
    margin-left: 40%;
}
.contract{
    margin-left: 40%;
}
.bggrad{
    background: linear-gradient(114.28deg, #2EA05B -9.79%, #CCCD34 104.57%)
}
.messages{
    min-height: 400px;
    max-height: 50vh;
    overflow-y: scroll;
    margin-bottom: 50px
}
.message{
    width: 60%;
    font-size: 0.8em
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