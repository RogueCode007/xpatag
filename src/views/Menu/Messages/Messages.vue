<template>
  <div class="py-4 lg:py-6 px-3 lg:px-6">
    <div class="lg:hidden">
      <MobileList :list="list" v-if="!showChat" v-on:openChat="handleOpenChat"></MobileList>
      <ChatScreen v-else 
      :person="person" 
      :usertyping="usertyping"
      v-on:close="handleCloseChat" 
      v-on:newMessage="handleNewMessage"
      v-on:typing="typing"
      v-on:stopTyping="stopTyping"
      />
    </div>
    <div class="hidden lg:flex gap-6">
      <WebList :list="list" v-on:openChat="handleOpenChat" class="list"/>
      <ChatScreen 
      :person="person" 
      :usertyping="usertyping"
      v-on:newMessage="handleNewMessage"
      v-on:typing="typing"
      v-on:stopTyping="stopTyping"
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
      list: [{name: "Obiwan Pelosi", msg: "Lorem ipsum udeiwuwh wdhiuhd whdihwdihwwdh hwdhw", time: "12:54", messages: []},{name: "Ragnar Dothraki", msg: "Lorem ipsum udeiwuwh wdhiuhd whdihwdihwwdh hwdhw", time: "12:54", messages: []}, 
              {name: "Tulsi Gabbard", msg: "Lorem ipsum udeiwuwh wdhiuhd whdihwdihwwdh hwdhw", time: "12:54", messages: []}, {name: "Joe Biden", msg: "Lorem ipsum udeiwuwh wdhiuhd whdihwdihwwdh hwdhw", time: "12:54", messages: []}, 
              {name: "Bill De Blasio", msg: "Lorem ipsum udeiwuwh wdhiuhd whdihwdihwwdh hwdhw", time: "12:54", messages: []},
              {name: "Bill De Blasio", msg: "Lorem ipsum udeiwuwh wdhiuhd whdihwdihwwdh hwdhw", time: "12:54", messages: []},
              {name: "Bill De Blasio", msg: "Lorem ipsum udeiwuwh wdhiuhd whdihwdihwwdh hwdhw", time: "12:54", messages: []},
              {name: "Bill De Blasio", msg: "Lorem ipsum udeiwuwh wdhiuhd whdihwdihwwdh hwdhw", time: "12:54", messages: []},
              {name: "Bill De Blasio", msg: "Lorem ipsum udeiwuwh wdhiuhd whdihwdihwwdh hwdhw", time: "12:54", messages: []},
            ]
    }
  },
  methods:{
    // seeSocket(){
    //   this.socket.on('socketConnection', obj)
    // }
    handleOpenChat(obj){
      this.person = obj
      this.showChat = true
    },
    handleCloseChat(){
      this.person = null,
      this.showChat = false
    },
    handleNewMessage(msg){
      this.person.messages.push({msg: msg, type: 0})
      this.socket.emit('sendMessage', msg)
    },
    sendNewMessage(msg){
      this.person.messages.push({msg: msg, type: 1})
    },
    typing(){
      this.socket.emit('typing')
    },
    stopTyping(){
      this.socket.emit('stopTyping')
    },
  },
  created() {
    this.$store.commit('showMobileNav', false)
    this.socket = io("http://localhost:3000")
    this.socket.on('sendMessage', (msg)=>{
      this.sendNewMessage(msg)
    })
    this.socket.on('typing', ()=>{
      this.usertyping = true
    })
    this.socket.on('stopTyping', ()=>{
      this.usertyping = false
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