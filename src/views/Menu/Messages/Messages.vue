<template>
  <div class="py-4 lg:py-6 px-3 lg:px-6">
    <div class="lg:hidden">
      <MobileList :list="list" v-if="!showChat" v-on:openChat="handleOpenChat"></MobileList>
      <ChatScreen v-else 
      :person="person" 
      :messages="messages"
      v-on:sendContract="handleNewContract"
      v-on:close="handleCloseChat" 
      v-on:newMessage="handleNewMessage"
      />
    </div>
    <div class="hidden lg:flex gap-6">
      <WebList :list="list" v-on:openChat="handleOpenChat" class="list"/>
      <ChatScreen 
      :person="person" 
      v-on:sendContract="handleNewContract"
      :messages="messages"
      v-on:newMessage="handleNewMessage"
      class="chat"
      />
    </div>
  </div>
</template>

<script>
// import io from "socket.io-client"
import MobileList from "./MobileList"
import WebList from "./WebList"
import ChatScreen from './ChatScreen'
import {mapState} from 'vuex'
import axios from 'axios'
import baseURL from '@/main'
export default {
  components:{
    MobileList, 
    WebList,
    ChatScreen
  },
  data() {
    return {
      showChat : false,
      person: null,
      data: {},
      usertyping: false,
      socket: {},
      connection: {},
      list: [],
      messages: [],
      room_id: null
    }
  },
  computed:{
    ...mapState({
      userId: state => state.user.user_id
    })
  },
  methods:{
    // getLink(){
    //   this.$store.commit('startLoading')
    //   axios({url: `${baseURL}/service/book`, data: {service_id: parseInt(this.expertId)}, method: 'POST'})
    //   .then((res)=>{
    //     this.$store.commit('endLoading')
    //     this.data = res.data.data
    //     console.log(this.data)
    //     this.connect()
    //   })
    //   .catch((err)=>{
    //     this.$store.dispatch('handleError', err)
    //   })
    // },
    connect(url){
      this.connection = new WebSocket(`${url}`)
      let vm = this
      this.connection.onmessage =  function(event){
        let data = JSON.parse(event.data)
        if(vm.room_id == data.chat_room_id){
          if(data.contract == 'false'){ 
            vm.messages.push({sender:{id: data.user_id}, messages: data.message, contract: false})
          }else if(data.contract == 'true'){
            vm.messages.push({sender:{id: data.user_id}, contract_detail: data.contract_detail, contract: true})
          }
        }
      }
    },
    handleOpenChat(obj){
      this.getChatThread(obj.chat_room_id)
      this.room_id = obj.chat_room_id
      this.person = obj
      this.showChat = true
      this.connection.onmessage = undefined
      this.connect(obj.url)
    },
    handleCloseChat(){
      this.person = null,
      this.showChat = false
    },
    handleNewMessage(msg){
      let todayDate = new Date().toISOString().slice(0, 10);
      this.connection.send(JSON.stringify({user_id: this.userId, chat_room_id: this.room_id,  message: msg, contract: 'false', created_at: todayDate, contract_details: {}}))
    },
    handleNewContract(obj){
      let todayDate = new Date().toISOString().slice(0, 10);
      this.connection.send(JSON.stringify({user_id: this.userId, chat_room_id: this.room_id,  message: '', contract: 'true', created_at: todayDate, 
      contract_detail: {amount: obj.amount ,start: obj.start, end: obj.end, description: obj.description}
      }))
    },
    getChats(){
      this.$store.commit('startLoading')
      axios.get(`${baseURL}/chat/list`)
      .then((res)=>{
        this.$store.commit('endLoading')
        this.list = res.data.data
        console.log(this.list)
      })
      .catch((err)=>{
        this.$store.dispatch('handleError', err)
      })
    },
    getChatThread(id){
      this.$store.commit('startLoading')
      axios.get(`${baseURL}/chats/${id}`)
      .then((res)=>{
        this.$store.commit('endLoading')
        this.messages = res.data.data
        console.log(this.messages)
      })
      .catch((err)=>{
        this.$store.dispatch('handleError', err)
      })
    }
  },
  created() {
    this.$store.commit('showMobileNav', false)
    this.getChats()
    this.connection.onmessage = function(event){
      console.log(event)
    }
    this.connection.onopen = function(event){
      console.log(event)
      console.log("Successfully connected to the echo websocket server...")
    }
  },
  destroyed(){
    this.connection = {}
  }
}
</script>

<style scoped>
.cardbg{
  background-color: #27293d;
  color:  #9a9a9a
}
.inputbox{
  background-color: #27293d;
  border-color: #2b3553;
  border-width: 1px
}
input, select, textarea{
  background-color: #27293d;
}
input::placeholder{
  color: #344675;
}
input:focus, textarea:focus{
  background-color: #1d253b;
  color: white
}
button{
  background-image: linear-gradient(to bottom left,#e14eca,#ba54f5,#e14eca);
  background-color: #e14eca;
  color: white;
  bottom: 20px;
  right: 20px
}
@media only screen and (min-width: 1024px){
  .list{
    max-width: 300px;
    flex: 0 0 30%
  }
  .chat{
    max-width: 697px;
    flex: 0 0 65%
  }
}
</style>