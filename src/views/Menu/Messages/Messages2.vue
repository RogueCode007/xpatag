<template>
  <div class="py-4 lg:py-6 px-3 lg:px-6">
    <div class="lg:hidden">
      <MobileList :list="list" v-if="!showChat" v-on:openChat="handleOpenChat"></MobileList>
      <ChatScreen v-else 
      :person="person" 
      :sender="sender"
      :receiver="receiver"
      v-on:close="handleCloseChat" 
      v-on:newMessage="handleNewMessage"
      v-on:sendContract="sendContract"
      />
    </div>
    <div class="hidden lg:flex gap-6">
      <WebList :list="list" v-on:openChat="handleOpenChat" class="list"/>
      <ChatScreen 
      :person="person" 
      :sender="sender"
      :receiver="receiver"
      v-on:newMessage="handleNewMessage"
      v-on:sendContract="sendContract"
      class="chat"
      />
    </div>
  </div>
</template>

<script>
import io from "socket.io-client"
import MobileList from "./MobileList"
import WebList from "./WebList"
import ChatScreen from './ChatScreen'
import {mapState} from 'vuex'
export default {
  components:{
    MobileList, 
    WebList,
    ChatScreen
  },
  data() {
    return {
      showChat : false,
      connection: null,
      person: null,
      usertyping: false,
      socket: {},
      receiver: '',
      sender: '',
      list: 
        [
            {   id: 9,
                name: 'Ghost',
                messages: [
                    // {id: 1, type: 'text', text: 'Hello', contract: {}, senderId: 3, receiverId: 9, time:'22:45'},
                    // {id: 2, type: 'contract', text: '', contract:{amount: '3000', start: '', end:'', description: ''}, senderId: 3, receiverId: 9, time:'08:34'}
                ]
            },
            // {id: 5, name: "Ragnar Dothraki", msg: "Lorem ipsum udeiwuwh wdhiuhd whdihwdihwwdh hwdhw", time: "12:54", messages: []}, 
            // {id: 6, name: "Tulsi Gabbard", msg: "Lorem ipsum udeiwuwh wdhiuhd whdihwdihwwdh hwdhw", time: "12:54", messages: []}, {id: 7, name: "Joe Biden", msg: "Lorem ipsum udeiwuwh wdhiuhd whdihwdihwwdh hwdhw", time: "12:54", messages: []}, 
            // {id: 8, name: "Bill De Blasio", msg: "Lorem ipsum udeiwuwh wdhiuhd whdihwdihwwdh hwdhw", time: "12:54", messages: []},
        ]
    }
  },
  computed:{
    ...mapState({
        user : state => state.user
    })
  },
  methods:{
    // seeSocket(){
    //   this.socket.on('socketConnection', obj)
    // }
    handleOpenChat(obj){
      this.person = obj
      this.receiver = obj.id
      this.showChat = true
      //FETCH MESSAGES FROM DB
    },
    handleCloseChat(){
      this.person = null,
      this.showChat = false
    },
    handleNewMessage(msg){
      this.person.messages.push({type: 'text', text: msg, senderId: this.sender, receiverId: this.receiver, time: '20:00'})
      this.socket.emit('send_message', {
        sender: this.sender,
        receiver: this.receiver,
        type: 'text',
        text: msg
      })
    },
    sendNewMessage(msg){
      this.person.messages.push({msg: msg, type: 1})
    },
    sendContract(obj){
        console.log(obj)
        this.person.messages.push({type: 'contract', contract: {amount: obj.amount, description: obj.description, start: obj.start, end: obj.end}, senderId: this.sender, receiverId: this.receiver, time: '20:00'})
        this.socket.emit('send_contract', {
            sender: this.sender,
            receiver: this.receiver,
            type: 'contract',
            contract: obj
        })
    }
  },
  created() {
    this.$store.commit('showMobileNav', false)
    this.socket = io("http://localhost:3000")
    this.sender = `${this.user.user_id}`
    this.socket.emit('user_connected', `${this.user.user_id}`)
    this.socket.on('new_message', (data)=>{
        this.person.messages.push({type: 'text', senderId: data.sender, receiverId: data.receiver, text: data.text, time: data.time, contract: null})
    })
    this.socket.on('new_contract', (data)=>{
        this.person.messages.push({type: 'contract', senderId: data.sender, receiverId: data.receiver, contract: data.contract, time: data.time, text: null})
    })
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