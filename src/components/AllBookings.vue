<template>
<div>
    <div class="overflow-x-auto lg:overflow-x-hidden tablecont">
        <div class="flex justify-between border-b border-solid" style="padding: 0 8px">
            <div class="flex gap-4 list">
                <p @click="selected = 'all'" :class="[selected == 'all' ? 'selected' : '']">All Bookings</p>
                <p @click="selected = 'pending'" :class="[selected == 'pending' ? 'selected' : '']">Pending Bookings</p>
                <p @click="selected = 'active'" :class="[selected == 'active' ? 'selected' : '']">In-progress</p>
                <p @click="selected = 'completed'" :class="[selected == 'completed' ? 'selected' : '']">Completed</p>
            </div>
            <div class="hidden lg:flex lg:items-center">
                <svg class="mr-3" width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.8332 0.75H1.1665L5.83317 6.26833V10.0833L8.16651 11.25V6.26833L12.8332 0.75Z" stroke="#111111" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p>Filter bookings</p>
            </div>
        </div>
      <table class="w-full mt-8 lg:mt-6">
          <tbody v-if="paginatedBookings.length > 0">
            <th>S/N</th>
            <th>Expert</th>
            <th>Service Type</th>
            <th>Amount</th>
            <th>Timeline</th>
            <th>Status</th>
            <th>Action</th>
          <tr v-for="(booking, index) in paginatedBookings" :key="index" class="">
            <td>{{index + 1}}</td>
              <td class="text-sm font-bold">
                {{booking.expert.firstname}} {{booking.expert.lastname}}
              </td>
              <td class="text-sm underline font-bold">
                {{booking.service.name}}
              </td>
              <td>{{booking.amount}}</td>
              <td>
                <button @click="showTimeline(booking)" style="min-width:80px" class="text-sm text-green-500 rounded-3xl px-2 py-2 border border-solid border-green-500 bg-white">View</button>
              </td>
              <td v-if="booking.status.id == 1">
                <div class="rounded px-2 py-1 text-sm" style="background-color: rgba(241, 186, 79, 0.1); color: #F1BA4F">
                    {{booking.status.name.toUpperCase()}}
                </div>
              </td>
              <td v-else-if="booking.status.id == 8">
                <div class="rounded px-2 py-1 text-sm" style="background-color: rgba(235, 87, 87, 0.1); color: #EB5757">
                    {{booking.status.name.toUpperCase()}}
                </div>
              </td>
              <td v-else-if="booking.status.id == 18">
                <div class="rounded px-2 py-1 text-sm" style="background-color: rgba(82, 185, 94, 0.1); color: #52B95E">
                    {{booking.status.name.toUpperCase()}}
                </div>
              </td>
              <td>
                <button @click="showBooking(booking)" style="min-width:80px" class="text-sm text-green-500 rounded-3xl px-2 py-2 border border-solid border-green-500 bg-white">View</button>
              </td>
          </tr>
          </tbody>
          <tbody v-else>
          <div class="text-center py-4">
              <svg class="block w-full" width="62" height="59" viewBox="0 0 62 59" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M53.2168 21.8901V45.03C53.2168 45.7334 52.8316 46.3803 52.2127 46.7156L31.7234 57.8172C31.1532 58.1258 30.4655 58.1258 29.8969 57.8172L9.40591 46.7156C8.78873 46.3804 8.40332 45.7334 8.40332 45.03V21.8901H53.2168Z" fill="#A8E7EF"/>
              <path d="M53.2169 26.0537V33.9268L41.3775 40.3414C40.9075 40.5952 40.3545 40.6422 39.8486 40.4714L30.8101 37.4106V26.0537H53.2169Z" fill="#70D9E6"/>
              <path d="M49.1658 21.8901V48.3663L52.2129 46.7152C52.8315 46.38 53.2169 45.733 53.2169 45.0295V21.8901H49.1658Z" fill="#70D9E6"/>
              <path d="M30.8102 21.8901V58.0504C30.4953 58.0504 30.182 57.9737 29.8953 57.8187L9.40591 46.7155C8.78873 46.3786 8.40332 45.7333 8.40332 45.0299V21.8901H30.8102Z" fill="#70D9E6"/>
              <path d="M30.8102 26.0537V37.4106L21.77 40.4714C21.2656 40.6422 20.711 40.5951 20.2427 40.3414L8.40332 33.9268V26.0537H30.8102Z" fill="#3AD1E0"/>
              <path d="M26.8357 21.8901V56.1596L29.8959 57.8178C30.1815 57.9731 30.4959 58.0499 30.8103 58.0499V21.8901H26.8357Z" fill="#3AD1E0"/>
              <path d="M30.8097 9.74951L8.40259 21.8902L30.8097 34.0307L53.2168 21.8902L30.8097 9.74951Z" fill="#756F6F"/>
              <path d="M48.6068 24.3886L30.8101 34.0302L13.0134 24.3886L24.671 18.0719C28.5006 15.9969 33.1194 15.9969 36.949 18.0719L48.6068 24.3886Z" fill="#5B5555"/>
              <path d="M60.3449 13.7122L53.2171 21.89L30.8098 9.74932L38.2199 1.24823C38.5148 0.910018 39.0047 0.821498 39.3993 1.03521L60.0789 12.2394C60.6187 12.5319 60.7483 13.2494 60.3449 13.7122Z" fill="#A8E7EF"/>
              <path d="M40.7087 4.27559C40.7087 5.94707 39.3535 7.30361 37.6822 7.30361C36.3243 7.30361 35.1757 6.4102 34.7925 5.18049L38.1837 1.29053C39.6172 1.52982 40.7087 2.77512 40.7087 4.27559Z" fill="#70D9E6"/>
              <path d="M1.27465 13.7122L8.40251 21.89L30.8097 9.74932L23.3996 1.24823C23.1048 0.910018 22.6149 0.821498 22.2203 1.03521L1.54076 12.2395C1.00088 12.5319 0.871312 13.2494 1.27465 13.7122Z" fill="#D4F2F6"/>
              <path d="M18.1152 5.93125C18.1152 8.03589 16.4081 9.74145 14.3035 9.74145C12.6662 9.74145 11.2698 8.70835 10.7312 7.25919L17.3671 3.66406C17.8373 4.29684 18.1152 5.08203 18.1152 5.93125Z" fill="#A8E7EF"/>
              <path d="M0.651296 24.5145L8.40263 21.8896L30.8097 34.0303L21.7705 37.0909C21.2652 37.2621 20.7115 37.2149 20.2423 36.9607L0.50203 26.2654C-0.233632 25.8668 -0.141281 24.7829 0.651296 24.5145Z" fill="#A8E7EF"/>
              <path d="M60.9683 24.5145L53.2169 21.8896L30.8098 34.0303L39.849 37.0909C40.3544 37.2621 40.9081 37.2149 41.3772 36.9607L61.1174 26.2654C61.8532 25.8668 61.7608 24.7829 60.9683 24.5145Z" fill="#D4F2F6"/>
              </svg>
              <p class="mt-4 font-bold text-xl">Nothing to see here yet</p>
              <p class="mt-4">You have no bookings yet</p>
              <router-link to="/" class="mt-10 mx-auto block p-2 px-4 text-center text-sm" style="width: 150px; border-radius: 22px; color: #fff; background: #52B95E">Find an Expert</router-link>
          </div>
          </tbody>
      </table>
      <Single v-if="view" :booking="booking" v-on:close="view = false" />
      <Timeline v-if="timeline" :booking="booking" v-on:close="timeline = false" />
  </div>
  <div class="my-8">
    <t-pagination
    :total-items="totalRows"
    :per-page="perPage"
    :limit="limit"
    :disabled="disabled"
    v-model="currentPage"
    @change="changePage"
  />
  </div>
</div>
</template>

<script>
import placeholder from "@/assets/img/Signup/person.png"
import Single from "@/components/SingleBooking"
import Timeline from "@/components/BookingTimeline"
import TPagination from 'vue-tailwind/dist/t-pagination'
import axios from 'axios'
import baseURL from "@/main"
export default {
  components:{
    Single, Timeline, TPagination
  },
  data(){
    return {
      selected: 'all',
      placeholder: placeholder,
      booking: {},
      view: false,
      timeline: false,
      bookings: [
      ],
      totalRows: 0,
      perPage: 10,
      pages: [],
      page : 1,
      disabled: false,
      limit: 5,
      currentPage: 1,
    }
  },
  watch:{
    selected(){
      if(this.selected == 'pending'){
        this.getPendingBookings()
      }else if(this.selected == 'active'){
        this.getActiveBookings()
      }else if(this.selected == 'completed'){
        this.getCompletedBookings()
      }else if(this.selected == 'all'){
        this.getAllBookings()
      }
    },
    bookings(){
      this.setPages()
    }
  },
  computed:{
    paginatedBookings(){
      return this.paginate(this.bookings)
    }
  },
  methods: {
    showBooking(val){
      this.booking = val
      this.view = true
    },
    showTimeline(val){
      // this.booking = val
      axios.get(`${baseURL}/booking/${val.booking_id}`)
      .then((res)=>{
        this.booking = res.data.data
        this.timeline = true
      })
      .catch((err)=>{
        this.$store.dispatch('handleError', err)
      })
    },
    changePage(num){
      this.currentPage = num
      this.page = num
    },
    getAllBookings(){
      this.$store.commit('startLoading')
      axios.get(`${baseURL}/bookings`)
      .then((res)=>{
        this.$store.commit('endLoading')
        this.bookings = res.data.data.bookings
        console.log(this.bookings)
        this.totalRows = res.data.data.bookings.length
      })
      .catch((err)=>{
        if(err.response.data.message == 'no record found'){
          this.$store.commit('endLoading')
          this.bookings = []
        }else{
          this.$store.dispatch('handleError', err)
        }
      })
    },
    getPendingBookings(){
      this.$store.commit('startLoading')
      axios.get(`${baseURL}/bookings/filter/8`)
      .then((res)=>{
        this.$store.commit('endLoading')
        this.bookings = res.data.data.bookings
        this.totalRows = res.data.data.bookings.length
        // console.log(this.bookings)
      })
      .catch((err)=>{
        if(err.response.data.message == 'no record found'){
          this.$store.commit('endLoading')
          this.bookings = []
        }else{
          this.$store.dispatch('handleError', err)
        }
      })
    },
    getActiveBookings(){
      this.$store.commit('startLoading')
      axios.get(`${baseURL}/bookings/filter/1`)
      .then((res)=>{
        this.$store.commit('endLoading')
        this.bookings = res.data.data.bookings
        this.totalRows = res.data.data.bookings.length
        // console.log(this.bookings)
      })
      .catch((err)=>{
        if(err.response.data.message == 'no record found'){
          this.$store.commit('endLoading')
          this.bookings = []
        }else{
          this.$store.dispatch('handleError', err)
        }
      })
    },
    getCompletedBookings(){
      this.$store.commit('startLoading')
      axios.get(`${baseURL}/bookings/filter/18`)
      .then((res)=>{
        this.$store.commit('endLoading')
        this.bookings = res.data.data.bookings
        this.totalRows = res.data.data.bookings.length
        // console.log(this.bookings)
      })
      .catch((err)=>{
        if(err.response.data.message == 'no record found'){
          this.$store.commit('endLoading')
          this.bookings = []
        }else{
          this.$store.dispatch('handleError', err)
        }
      })
    },
    setPages () {
      let numberOfPages = Math.ceil(this.bookings.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
         this.pages.push(index);
      }
    },
    paginate (bookings) {
        let page = this.page;
        let perPage = this.perPage;
        let from = (page * perPage) - perPage;
        let to = (page * perPage);
        return  bookings.slice(from, to);
    },
  },
  mounted(){
    this.getAllBookings()
  }
}

</script>

<style scoped>
.selected{
  color: #52B95E;
  border-bottom: 1px solid #52B95E;
}
.list p{
  padding-top: 12px;
  padding-bottom: 12px;
  cursor: pointer;
}
th, td {
  text-align: left;
  padding: 8px;
}
th:nth-child(1){
  min-width: 100px
}
th:nth-child(2){
  min-width: 180px
}
th:nth-child(3){
  min-width: 150px
}
th:nth-child(4){
  min-width: 120px
}
th:nth-child(5){
  min-width: 100px
}
th:nth-child(6){
  min-width: 100px
}
th:nth-child(7){
  min-width: 100px
}
.tablecont::-webkit-scrollbar-track{
  box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  border-radius: 10px;
  background-color: #F5F5F5;
}

.tablecont::-webkit-scrollbar
{
  margin-top: 20px;
  height: 2px;
  background-color: #F5F5F5;
}

.tablecont::-webkit-scrollbar-thumb
{
  margin-top: 20px;
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(0,0,0,.3);
  background-color:#14801B;
}
.imgcont{
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.tablecont{
  border: 1px solid #DCDCDC;
  box-sizing: border-box;
  border-radius: 10px;
  color: #454545
}
@media only screen and (min-width: 768px){
  .imgcont{
    width: 50px;
    height: 50px
  }
}

@media only screen and (min-width: 1024px) {
  th:nth-child(1){
    width: 5%
  }
  th:nth-child(2){
    width: 20%
  }
  th:nth-child(3){
    width: 15%
  }
  th:nth-child(4){
    width: 15%
  }
  th:nth-child(5){
    width: 15%
  }
  th:nth-child(6){
    width: 15%
  }
  th:nth-child(7){
    width: 15%
  }
    .tablecont{
        min-height: 250px
    }
}
</style>