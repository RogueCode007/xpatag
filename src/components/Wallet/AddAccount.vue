<template>
  <form @submit.prevent="$emit('add', data.account_number)" class="mt-6 px-8">
      <div>
          <p>Account Name</p>
          <p class="rounded p-2 border text-gray-500 text-sm">{{data.account_name}}</p>
      </div>
      <div class="mt-4">
          <p>Account Number</p>
          <p class="rounded p-2 border text-gray-500 text-sm">{{data.account_number}}</p>
      </div>
      <button class="text-center block w-3/4 mx-auto mt-10 p-2 text-white text-sm" style="background: #52B95E;border-radius: 22px;">Add Account</button>
  </form>
</template>

<script>
export default {
    props: ['data']
}
</script>

<style>

</style>