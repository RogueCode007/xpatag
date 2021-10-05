<template>
  <div id="app" :class="[$store.state.showSuccess || $store.state.showError ? 'overflow-y-hidden overflow-x-hidden': '']">
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
    <Loading v-if="$store.state.loading"/>
    <Success v-if="$store.state.showSuccess" />
    <Error v-if="$store.state.showError" />
  </div>
</template>

<script>
import Loading from "@/components/Loading"
import Success from '@/components/SuccessModal'
import Error from '@/components/FailureModal'
export default {
  components: {Loading, Success, Error}
}
</script>
<style lang="scss">
#app {
  font-family: 'Cera Pro', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
@font-face {
  font-family: "Cera Pro";
  src: local("Cera Pro"),
   url("./fonts/cera pro font/Cera Pro Medium.ttf") format("truetype");
}

.l-modal{
  display: block;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgba(0,0,0, 0.3);
}
.loading-modal{
  min-height: 350px; 
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
