<template>
  <div class="py-4 lg:py-6 px-3 lg:px-6">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  components: {},
  created(){
    this.$store.commit('showMobileNav', false)
  }
}
</script>

<style>

</style>