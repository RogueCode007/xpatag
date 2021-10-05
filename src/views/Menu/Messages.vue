<template>
  <div class="py-4 lg:py-6 px-3 lg:px-6">
    Messages Page
  </div>
</template>

<script>
export default {
  data() {
    return {
      connection: null
    }
  },
  created() {
    this.$store.commit('showMobileNav', false)
    console.log("Starting connection to WebSocket Server")
    this.connection = new WebSocket("wss://echo.websocket.org")

    this.connection.onmessage = function(event) {
      console.log(event);
    }

    this.connection.onopen = function(event) {
      console.log(event)
      console.log("Successfully connected to the echo websocket server...")
    }

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
</style>