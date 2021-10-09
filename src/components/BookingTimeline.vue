<template>
   <div class="l-modal">
      <div class="loading-modal w-full">
          <div class="loader bg-white mx-auto py-10 px-4">
              <p class="text-base text-black font-bold">Project timeline</p>
                <ul class="sessions">
                    <li v-for="(event, index) in booking.timeline" :key="index">
                        <div class="time">{{event.date}}</div>
                        <p>{{event.event}}</p>
                    </li>
                    <li>
                        <div class="time">Feb 10</div>
                        <p>Few more minutes of sleep won't do anyone any harm 🤷..</p>
                    </li>
                    <li>
                        <div class="time">Feb 10</div>
                        <p>Get up 🙄</p>
                    </li>
                    <li>
                        <div class="time">Feb 10</div>
                        <p>How can I feel sleepy again?😵</p>
                    </li>
                    <li>
                        <div class="time">Feb 10</div>
                        <p>Lunch time after which sleep just doesn't want to let go of me. 🤝</p>
                    </li>
                    <li>
                        <div class="time">Feb 10</div>
                        <p>Drink the magical chai, it will ward off sleep they said. 🤷‍</p>
                    </li>
                    <li>
                        <div class="time">Feb 10</div>
                        <p>The only time I don't feel sleepy cause it's work out time. I mean walking time. 😹</p>
                    </li>
                </ul>
                <button @click="close" class="text-center block w-1/2 mx-auto mt-10 p-2 bg-white text-sm rounded" style="border: 1px solid #52B95E; color: #52B95E;border-radius: 22px;">Close</button>
          </div>
      </div>
    </div>
</template>

<script>

export default {
    props: ["booking"],
    methods:{
        close(){
            this.$emit('close')
        }
    }
}
</script>

<style lang="scss" scoped>
@mixin tablet-and-up {
    @media screen and (min-width: 769px) { @content; }
}
@mixin mobile-and-up {
    @media screen and (min-width: 601px) { @content; }
}
@mixin tablet-and-down  {
    @media screen and (max-width: 768px) { @content; }
}
@mixin mobile-only {
    @media screen and (max-width: 600px) { @content; }
}
.loader{
  position: relative;
  top: 50px;
  width: 80%;
  border-radius: 16px;
}
.times{
  top: -50px
}
.status{
    width: 50%;
}
ul, li{
  list-style: none;
  padding: 0;
}
ul{
    max-height: 300px;
    overflow-y: auto;
}
.sessions{
  margin-top: 2rem;
  border-radius: 12px;
  position: relative;
}
li{
  padding-bottom: 1.5rem;
  border-left: 1px solid #abaaed;
  position: relative;
  padding-left: 20px;
  margin-left: 10px;
  &:last-child{
    border: 0px;
    padding-bottom: 0;
  }
  &:before{
    content: '';
    width: 15px;
    height: 15px;
    background: white;
    border: 1px solid #4e5ed3;
    box-shadow: 3px 3px 0px #bab5f8;
    box-shadow: 3px 3px 0px #bab5f8;
    border-radius: 50%;
    position: absolute;
    left: -10px;
    top: 0px;
  }
}
.time{
  color: #2a2839;
  @include mobile-and-up{
    font-size: .9rem;
  }
  @include mobile-only{
    margin-bottom: .3rem;
    font-size: 0.85rem;
  }

}
p{
  color: #4f4f4f;
  line-height: 1.5;
  margin-top:0.4rem;
  @include mobile-only{
    font-size: .9rem;
  }
}
@media only screen and (min-width: 1024px){
  .loader{
    width: 30%;
    max-width: 450px
  }
}
</style>