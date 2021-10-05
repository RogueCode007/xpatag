<template>
  <div class="overflow-x-auto lg:overflow-x-hidden tablecont">
      <div class="flex justify-between border-b border-solid" style="padding: 15px 8px">
          <div class="flex gap-4">
              <p>All Bookings</p>
              <p>Pending Bookings</p>
              <p>In-progress</p>
              <p>Completed</p>
          </div>
          <div class="hidden lg:flex lg:items-center">
              <svg class="mr-3" width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.8332 0.75H1.1665L5.83317 6.26833V10.0833L8.16651 11.25V6.26833L12.8332 0.75Z" stroke="#111111" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <p>Filter bookings</p>
          </div>
      </div>
    <table class="w-full mt-8 lg:mt-6">
        <tbody v-if="bookings.length > 0">
        <tr v-for="booking in bookings" :key="booking.id" class="">
            <td class="">
            <div class="flex items-center">
                <div class="mr-3 imgcont">
                <img :src="placeholder" alt="" class="w-full" style="border-radius: 50%; height: 100%">
                </div>
                <div class="flex flex-col justify-between">
                <p class="text-sm font-bold">{{booking.name}}</p>
                <p class="text-sm">{{booking.time}}</p>
                </div>
            </div>
            </td>
            <td>
            <div class="flex flex-col justify-between">
                <p class="text-sm underline font-bold">{{booking.service}}</p>
                <p class="text-sm">{{booking.date}}</p>
            </div>
            </td>
            <td>{{booking.amount}}</td>
            <td>
            <div class="flex items-center">
                <svg class="mr-3" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.8624 1.1447C14.5758 0.852624 14.2125 0.647615 13.8143 0.553383C13.4161 0.45915 12.9994 0.479543 12.6124 0.612202L1.99985 4.1597C1.57184 4.2998 1.19787 4.56931 0.929569 4.93103C0.661267 5.29274 0.511866 5.72883 0.501988 6.17908C0.492111 6.62933 0.622244 7.07155 0.874425 7.44468C1.1266 7.81781 1.4884 8.10347 1.90985 8.2622L5.83985 9.7622C5.92934 9.79642 6.01082 9.84871 6.07921 9.91581C6.1476 9.98291 6.20143 10.0634 6.23735 10.1522L7.73735 14.0897C7.89004 14.5052 8.16712 14.8635 8.53083 15.1158C8.89454 15.3681 9.3272 15.5022 9.76985 15.4997H9.82235C10.2731 15.4915 10.71 15.3425 11.0718 15.0735C11.4336 14.8045 11.7022 14.429 11.8399 13.9997L15.3874 3.3722C15.5164 2.98891 15.5356 2.57716 15.4428 2.18352C15.35 1.78987 15.149 1.43004 14.8624 1.1447ZM13.9999 2.8997L10.4149 13.5347C10.3732 13.6693 10.2896 13.7871 10.1763 13.8707C10.0629 13.9544 9.92575 13.9996 9.78485 13.9997C9.64479 14.002 9.50735 13.9616 9.3908 13.8839C9.27425 13.8062 9.1841 13.6949 9.13235 13.5647L7.63235 9.6272C7.52361 9.3411 7.3559 9.08106 7.14011 8.86399C6.92433 8.64691 6.66531 8.47765 6.37985 8.3672L2.44235 6.8672C2.30952 6.81853 2.19534 6.72935 2.11594 6.61227C2.03654 6.49519 1.99593 6.35611 1.99985 6.2147C1.99997 6.07381 2.04517 5.93665 2.12883 5.8233C2.2125 5.70994 2.33025 5.62633 2.46485 5.5847L13.0999 2.0372C13.222 1.98744 13.3559 1.97411 13.4854 1.99882C13.6149 2.02354 13.7345 2.08524 13.8297 2.17647C13.9249 2.2677 13.9916 2.38455 14.0218 2.5129C14.052 2.64125 14.0444 2.77559 13.9999 2.8997Z" fill="#454545"/>
                </svg>
                <p>{{booking.location}}</p>
            </div>
            </td>
            <td v-if="booking.status == 'pending'">
            <div class="rounded px-2 py-1 text-sm" style="background-color: rgba(241, 186, 79, 0.1); color: #F1BA4F">
                PENDING
            </div>
            </td>
            <td v-else-if="booking.status == 'completed'">
            <div class="rounded px-2 py-1 text-sm" style="background-color: rgba(82, 185, 94, 0.1); color: #52B95E">
                COMPLETED
            </div>
            </td>
            <td v-else>
            <div class="rounded px-2 py-1 text-sm" style="background-color: rgba(235, 87, 87, 0.1); color: #EB5757">
                DECLINED
            </div>
            </td>
            <td>
            <button style="min-width:80px" class="text-sm text-green-500 rounded-3xl px-2 py-2 border border-solid border-green-500 bg-white">View</button>
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
            <p class="mt-4">No Bookings yet(#0)</p>
        </div>
        </tbody>
    </table>
</div>
</template>

<script>
import placeholder from "@/assets/img/Signup/person.png"
export default {
  data(){
    return {
      placeholder: placeholder,
      bookings: [
        {id: 1, name: "Obiwan, Pelosi", time: '2hrs ago', service: 'Maize Disease Services', date: '2nd, February, 1998', amount: '#50,000', location: 'Abule Ijesha, Lagos', status: 'pending'},
        {id: 2, name: "Obiwan, Pelosi", time: '2hrs ago', service: 'Maize Disease Services', date: '2nd, February, 1998', amount: '#50,000', location: 'Abule Ijesha, Lagos', status: 'pending'},
        {id: 3, name: "Obiwan, Pelosi", time: '2hrs ago', service: 'Maize Disease Services', date: '2nd, February, 1998', amount: '#50,000', location: 'Abule Ijesha, Lagos', status: 'pending'},
        {id: 4, name: "Obiwan, Pelosi", time: '2hrs ago', service: 'Maize Disease Services', date: '2nd, February, 1998', amount: '#50,000', location: 'Abule Ijesha, Lagos', status: 'completed'},
        {id: 5, name: "Obiwan, Pelosi", time: '2hrs ago', service: 'Maize Disease Services', date: '2nd, February, 1998', amount: '#50,000', location: 'Abule Ijesha, Lagos', status: 'pending'},
        {id: 6, name: "Obiwan, Pelosi", time: '2hrs ago', service: 'Maize Disease Services', date: '2nd, February, 1998', amount: '#50,000', location: 'Abule Ijesha, Lagos', status: 'completed'},
        {id: 7, name: "Obiwan, Pelosi", time: '2hrs ago', service: 'Maize Disease Services', date: '2nd, February, 1998', amount: '#50,000', location: 'Abule Ijesha, Lagos', status: 'pending'},
        {id: 8, name: "Obiwan, Pelosi", time: '2hrs ago', service: 'Maize Disease Services', date: '2nd, February, 1998', amount: '#50,000', location: 'Abule Ijesha, Lagos', status: 'declined'},
        {id: 9, name: "Obiwan, Pelosi", time: '2hrs ago', service: 'Maize Disease Services', date: '2nd, February, 1998', amount: '#50,000', location: 'Abule Ijesha, Lagos', status: 'declined'},
        {id: 10, name: "Obiwan, Pelosi", time: '2hrs ago', service: 'Maize Disease Services', date: '2nd, February, 1998', amount: '#50,000', location: 'Abule Ijesha, Lagos', status: 'pending'},
      ],
    //   bookings: []
    }
  },
}

</script>

<style scoped>
th, td {
  text-align: left;
  padding: 8px;
  min-width: 150px
}
td:nth-child(1){
  min-width: 180px
}
td:nth-child(2){
  min-width: 180px
}
td:nth-child(3){
  min-width: 100px
}
td:nth-child(4){
  min-width: 200px
}
td:nth-child(5){
  min-width: 100px
}
td:nth-child(6){
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
  td:nth-child(1){
    width: 20%
  }
  td:nth-child(2){
    width: 20%
  }
  td:nth-child(3){
    width: 10%
  }
  td:nth-child(4){
    width: 30%
  }
  td:nth-child(5){
    width: 10%
  }
  td:nth-child(6){
    width: 10%
  }
    .tablecont{
        min-height: 250px
    }
}
</style>