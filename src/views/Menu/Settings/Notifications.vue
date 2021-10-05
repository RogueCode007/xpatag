<template>
  <div class="px-3 lg:px-6 py-10">
      <h1 class="text-lg lg:text-xl">MAIL NOTIFICATIONS</h1>
      <div class="cont py-6 relative">
        <div class="mt-4 flex justify-between">
          <p class="text-black font-bold">Inbox Messages</p>
          <label class="switch">
            <input type="checkbox">
            <span class="slider round"></span>
          </label>
        </div>
        <hr class="mt-4">
        <div class="mt-4 flex justify-between">
          <p class="text-black font-bold">Service Request Messages</p>
          <label class="switch">
            <input type="checkbox">
            <span class="slider round"></span>
          </label>
        </div>
        <hr class="mt-4">
        <div class="mt-4 flex justify-between">
          <p class="text-black font-bold">Request Updates</p>
          <label class="switch">
            <input type="checkbox">
            <span class="slider round"></span>
          </label>
        </div>
        <hr class="mt-4">
        <div class="mt-4 flex justify-between">
          <p class="text-black font-bold">Notifications from XpatAg</p>
          <label class="switch">
            <input type="checkbox">
            <span class="slider round"></span>
          </label>
        </div>
        <hr class="mt-4">
        <button class="text-white p-3 w-full mt-10 mb-4" style="background: #52B95E;border-radius: 22px;">Update Settings</button>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 55px;
  height: 33px;
}

.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  left: 2px;
  bottom: 6px;
  background-color: #fff;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #fff;
  border: 1px solid #eee
}

input:focus + .slider {
  box-shadow: 0 0 1px #fff;
}

input:checked + .slider:before {
  -webkit-transform: translateX(28px);
  -ms-transform: translateX(28px);
  transform: translateX(28px);
  background-color: #52B95E;
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
@media only screen and (min-width: 1024px){
  .cont{
    max-width: 500px
  }
   button{
    width: 200px;
    position: absolute;
    bottom: -90px;
    right: 0
  }
  
}

</style>