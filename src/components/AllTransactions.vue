<template>
  <div class="overflow-x-auto lg:overflow-x-hidden tablecont">
        <div v-if="paginatedTransactions.length > 0" class="" style="padding: 15px 8px">
          <div class="flex lg:items-center">
              <svg class="mr-3" width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.8332 0.75H1.1665L5.83317 6.26833V10.0833L8.16651 11.25V6.26833L12.8332 0.75Z" stroke="#111111" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <p>Filter transactions</p>
          </div>
          <div class="mt-4 relative rounded border border-solid searchbox">
                <svg class="absolute" style="top: 10px; left: 2px" width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.4733 13.0266L10.9999 10.5733C11.96 9.37621 12.4249 7.8568 12.2991 6.32747C12.1733 4.79814 11.4664 3.37512 10.3236 2.35103C9.18085 1.32694 7.68914 0.77961 6.15522 0.821583C4.62129 0.863557 3.16175 1.49164 2.0767 2.5767C0.991644 3.66175 0.363557 5.12129 0.321583 6.65522C0.27961 8.18914 0.82694 9.68085 1.85103 10.8236C2.87512 11.9664 4.29814 12.6733 5.82747 12.7991C7.3568 12.9249 8.87621 12.46 10.0733 11.4999L12.5266 13.9533C12.5886 14.0158 12.6623 14.0654 12.7436 14.0992C12.8248 14.133 12.9119 14.1505 12.9999 14.1505C13.0879 14.1505 13.1751 14.133 13.2563 14.0992C13.3376 14.0654 13.4113 14.0158 13.4733 13.9533C13.5934 13.829 13.6606 13.6628 13.6606 13.4899C13.6606 13.317 13.5934 13.1509 13.4733 13.0266ZM6.33327 11.4999C5.41029 11.4999 4.50804 11.2262 3.74061 10.7135C2.97318 10.2007 2.37504 9.47185 2.02183 8.61913C1.66862 7.7664 1.57621 6.82809 1.75627 5.92285C1.93634 5.0176 2.38079 4.18608 3.03344 3.53344C3.68608 2.88079 4.5176 2.43634 5.42285 2.25627C6.32809 2.07621 7.2664 2.16862 8.11913 2.52183C8.97185 2.87504 9.70068 3.47318 10.2135 4.24061C10.7262 5.00804 10.9999 5.91029 10.9999 6.83327C10.9999 8.07095 10.5083 9.25793 9.6331 10.1331C8.75793 11.0083 7.57095 11.4999 6.33327 11.4999Z" fill="#999999"/>
                </svg>
                <input type="text" class="w-full  rounded focus:outline-none focus:ring focus:ring-blue-200 outline-none py-2 px-6" placeholder="Search">
          </div>
        </div>
    <table v-if="paginatedTransactions.length > 0" class="w-full mt-8 lg:mt-6">
        <thead>
            <tr class="py-2">
              <th class="font-semibold">S/N</th>
              <th class="font-semibold">DATE</th>
              <th class="font-semibold">REFERENCE</th>
              <th class="font-semibold">AMOUNT</th>
              <th class="font-semibold">DESCRIPTION</th>
              <th class="font-semibold">STATUS</th>
              <th class="font-semibold">ACTION</th>
            </tr>
        </thead>
        <tbody >
        <tr v-for="(transaction, index) in paginatedTransactions" :key="index" class="">
            <td>{{index+1}}</td>
            <td class="">
                {{transaction.timestamp | timeConverter}}
            </td>
            <td>
            {{transaction.reference}}
            </td>
            <td>{{transaction.amount}}</td>
            <td>
            {{transaction.description}}
            </td>
            <td v-if="transaction.status.id == 5">
              <div class="rounded px-2 py-1 text-sm text-center" style="background-color: rgba(82, 185, 94, 0.1); color: #52B95E">
                  {{transaction.status.name.toUpperCase()}}
              </div>
            </td>
            <td v-else>
              <div class="rounded px-2 py-1 text-sm text-center" style="background-color: rgba(235, 87, 87, 0.1); color: #EB5757">
                  {{transaction.status.name.toUpperCase()}}
              </div>
            </td>
            <td>
            <button @click="showTransaction(transaction)" style="min-width:80px" class="text-sm text-green-500 rounded-3xl px-2 py-2 border border-solid border-green-500 bg-white">View</button>
            </td>
        </tr>
        </tbody>
        </table>
        <div v-else class="text-center pt-24">
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
            <p class="mt-4">No Transactions yet(#0)</p>
        </div>
    <div v-if="paginatedTransactions.length > 0" class="my-8">
    <t-pagination
    :total-items="totalRows"
    :per-page="perPage"
    :limit="limit"
    :disabled="disabled"
    v-model="currentPage"
    @change="changePage"
  />
  </div>
    <Single v-if="view" :transaction="transaction" v-on:close="view = false" />
</div>
</template>

<script>
import Single from "@/components/SingleTransaction"
import TPagination from 'vue-tailwind/dist/t-pagination'
import axios from 'axios'
import baseURL from "@/main"
export default {
    components:{
        Single, TPagination
    },
  data(){
    return {
      view: false,
      transaction: {},
      transactions: [],
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
    transactions(){
      this.setPages()
    }
  },
  computed:{
    paginatedTransactions(){
      return this.paginate(this.transactions)
    }
  },
  methods: {
    showTransaction(val){
      this.transaction = val
      this.view = true
    },
    changePage(num){
      this.currentPage = num
      this.page = num
    },
    getAllTransactions(){
      this.$store.commit('startLoading')
      axios.get(`${baseURL}/transactions`)
      .then((res)=>{
        this.$store.commit('endLoading')
        this.transactions = res.data.data
        this.totalRows = res.data.data.length
      })
      .catch((err)=>{
        this.$store.dispatch('handleError', err)
      })
    },
    setPages () {
      let numberOfPages = Math.ceil(this.transactions.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
         this.pages.push(index);
      }
    },
    paginate (transactions) {
      let page = this.page;
      let perPage = this.perPage;
      let from = (page * perPage) - perPage;
      let to = (page * perPage);
      return  transactions.slice(from, to);
    },
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
  },
  mounted(){
    this.getAllTransactions()
  }
}

</script>


<style scoped>
th, td {
  text-align: left;
  padding: 8px;
  /* min-width: 150px */
}
td:nth-child(1){
  min-width: 50px
}
td:nth-child(2){
  min-width: 180px
}
td:nth-child(3){
  min-width: 180px
}
td:nth-child(4){
  min-width: 100px
}
td:nth-child(5){
  min-width: 200px
}
td:nth-child(6){
  min-width: 100px
}
td:nth-child(7){
  min-width: 100px
}
thead tr{
    background-color: #f2f2f2;
}
table tr:nth-child(even){
    background-color: #f2f2f2;
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
@media only screen and (min-width: 768px){
  .imgcont{
    width: 50px;
    height: 50px
  }
}

@media only screen and (min-width: 1024px) {
  td:nth-child(1){
    width: 5%
  }
  td:nth-child(2){
    width: 20%
  }
  td:nth-child(3){
    width: 20%
  }
  td:nth-child(4){
    width: 20%
  }
  td:nth-child(5){
    width: 20%
  }
  td:nth-child(6){
    width: 10%
  }
  td:nth-child(7){
    width: 5%
  }
 .tablecont{
    min-height: 250px
 }
 .searchbox{
     max-width: 250px
 }   
}
</style>