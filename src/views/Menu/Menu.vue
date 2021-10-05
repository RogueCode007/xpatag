<template>
  <div :class="[$store.state.activeModal ? 'overflow-y-hidden overflow-x-hidden' : 'overflow-auto']">
    <Header />
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition> 
  </div>
</template>

<script>

import Header from "@/components/Header"
export default {
  components:{Header},
 
  methods:{
    submit(){
      alert("clicked!!")
    }
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>