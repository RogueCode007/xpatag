<template>
   <div class="l-modal">
      <div class="loading-modal w-full">
          <div class="loader relative bg-white mx-auto py-10 px-4">
            <svg @click="close" class="cursor-pointer times absolute" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C9.34711 22.0024 6.80218 20.9496 4.9263 19.0737C3.05042 17.1978 1.99762 14.6529 2 12V11.8C2.08179 7.79223 4.5478 4.22016 8.26637 2.72307C11.9849 1.22597 16.2381 2.0929 19.074 4.92601C21.9365 7.78609 22.7932 12.0893 21.2443 15.8276C19.6955 19.5659 16.0465 22.0024 12 22ZM12 13.41L14.59 16L16 14.59L13.41 12L16 9.41001L14.59 8.00001L12 10.59L9.41001 8.00001L8.00001 9.41001L10.59 12L8.00001 14.59L9.41001 16L12 13.411V13.41Z" fill="#EE4B2B"></path>
            </svg>
              <p class="text-base text-black font-bold">Project timeline</p>
                <ul class="sessions" v-if="booking.timeline">
                    <li v-for="(event, index) in booking.timeline" :key="index">
                        <div class="time">{{event.timestamp | timeConverter}}</div>
                        <p>{{event.note}}</p>
                    </li>
                </ul>
                <p v-else class="py-16 text-center"> No activity yet</p>
                <form v-if="showAdd" @submit.prevent="addActivity" class=" add flex gap-4 items-center justify-between">
                  <div class="w-full" >
                    <input type="text" v-model="note" class="w-full border rounded py-2 px-2 focus:outline-none" placeholder="E.g Contract Accepted"/>
                  </div>
                  <button class="border rounded px-2 py-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.124 12.1136L5.12669 12.1264C5.50897 13.9413 6.73214 15.4995 8.46323 16.2864L12 17.894V16H14C16.7614 16 19 13.7614 19 11V10C19 7.23858 16.7614 5 14 5H10C7.23858 5 5 7.23858 5 10V11C5 11.3804 5.04211 11.7485 5.12115 12.1009L5.124 12.1136ZM14 21L7.63562 18.1071C5.31787 17.0536 3.68127 14.9677 3.16963 12.5386C3.05859 12.0435 3 11.5286 3 11V10C3 6.13401 6.13401 3 10 3H14C17.866 3 21 6.13401 21 10V11C21 14.866 17.866 18 14 18V21Z" fill="#2E3A59"></path>
                    </svg>
                  </button>
                </form>
                <button v-else class="icon flex items-center gap-2" @click="showAdd = true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM4 12.172C4.04732 16.5732 7.64111 20.1095 12.0425 20.086C16.444 20.0622 19.9995 16.4875 19.9995 12.086C19.9995 7.68451 16.444 4.10977 12.0425 4.086C7.64111 4.06246 4.04732 7.59876 4 12V12.172ZM13 17H11V13H7V11H11V7H13V11H17V13H13V17Z" fill="#2E3A59"></path>
                  </svg>
                  <p class="text-sm">Add activity</p>
                </button>
          </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
import baseURL from '@/main'
export default {
    props: ["booking"],
    data(){
      return {
        showAdd : false,
        note: '',
      }
    },
    methods:{
      close(){
        this.$emit('close')
      },
      addActivity(){
        this.$store.commit('startLoading')
        axios({url: `${baseURL}/booking/update`, data: {booking_id: this.booking.booking_id, note: this.note}, method: 'POST'})
        .then((res)=>{
          this.$store.commit('endLoading')
          this.$store.commit('setSuccess', {status: true, msg: res.data.message})
          this.close()
        })
        .catch((err)=>{
          this.$store.dispatch('handleError', err)
        })
      }
    },
    filters:{
      timeConverter(val){
        let words = val.split('-')
        let slice = words[words.length - 1].slice(0, 2)
        let newwords = []
        newwords.push(words[0])
        newwords.push(words[1])
        newwords.push(slice)
        let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        let num = parseInt(newwords[1]) - 1
        return `${months[num]} ${newwords[newwords.length - 1]} ${newwords[0]}`;
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
  min-height: 450px
}
.icon{
  bottom: 10px;
  position: absolute;
}
.add{
  bottom: 10px;
  position: absolute;
  width: 90%
}

.times{
  top: 5px;
  right: 5px
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
ul::-webkit-scrollbar{
  width: 5px
}
.sessions{
  margin-top: 2rem;
  border-radius: 12px;
  position: relative;
}
li{
  padding-bottom: 1.5rem;
  border-left: 1px solid #52B95E;
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
    border: 1px solid rgb(16, 185, 129);
    box-shadow: 3px 3px 0px rgba(16, 185, 129, 0.3);
    // box-shadow: 3px 3px 0px #bab5f8;
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