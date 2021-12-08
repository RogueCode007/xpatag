<template>
  <div class="overflow-x-auto lg:overflow-x-hidden tablecont">
    <div class="flex justify-between">
      <p class="font-bold text-lg">All Services</p>
       <router-link to="/app/dashboard/services/create" class="py-3 px-3 text-white text-sm" style="background: #52B95E;border-radius: 20px;">Add Service</router-link>
    </div>
    <div v-if="services.length > 0" class="box py-8">
      <div v-for="(service, index) in services" :key="index" class="item p-3" @click="viewService(service)">
        <div v-if="service.img" class="w-full imgbox" style="border-radius: 7.81px">
          <img :src="service.img" class="w-full h-full">
        </div>
        <div v-else class="w-full imgbox shadow" style="border-radius: 7.81px">
        </div>
        <div class="mt-2">
          <h1 class="font-bold text-lg">{{service.name}}</h1> 
          <h1 class="font-light mt-2 text-sm text-gray-400 ">{{service.category.toUpperCase()}}</h1> 
          <p class="mt-4 font-light  text-sm text-gray-400">{{service.description}}</p>  
        </div> 
      </div>
    </div>
    <div v-else class="text-center py-4">
      <svg class="block w-full" width="106" height="116" viewBox="0 0 106 116" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M90.8926 53.6475V93.0088C90.8926 94.2052 90.2372 95.3056 89.1846 95.876L54.3319 114.76C53.3619 115.285 52.1922 115.285 51.225 114.76L16.3695 95.876C15.3197 95.3058 14.6641 94.2052 14.6641 93.0088V53.6475H90.8926Z" fill="#A8E7EF"/>
          <path d="M90.8927 60.7305V74.1227L70.7537 85.0341C69.9543 85.4658 69.0136 85.5457 68.153 85.2552L52.7783 80.0487V60.7305H90.8927Z" fill="#70D9E6"/>
          <path d="M84.0015 53.6484V98.6848L89.1848 95.8763C90.2369 95.3061 90.8925 94.2055 90.8925 93.0088V53.6484H84.0015Z" fill="#70D9E6"/>
          <path d="M52.7784 53.6484V115.158C52.2429 115.158 51.71 115.027 51.2222 114.763L16.3695 95.8767C15.3197 95.3038 14.6641 94.206 14.6641 93.0095V53.6484H52.7784Z" fill="#70D9E6"/>
          <path d="M52.7784 60.7295V80.0477L37.401 85.2542C36.5429 85.5447 35.5997 85.4646 34.8031 85.0332L14.6641 74.1218V60.7295H52.7784Z" fill="#3AD1E0"/>
          <path d="M46.0181 53.6475V111.94L51.2235 114.761C51.7094 115.025 52.2442 115.156 52.779 115.156V53.6475H46.0181Z" fill="#3AD1E0"/>
          <path d="M52.7777 32.9971L14.6628 53.6486L52.7777 74.2998L90.8925 53.6486L52.7777 32.9971Z" fill="#756F6F"/>
          <path d="M83.0509 57.8979L52.7785 74.2984L22.5061 57.8979L42.3358 47.1532C48.8501 43.6234 56.7067 43.6234 63.221 47.1532L83.0509 57.8979Z" fill="#5B5555"/>
          <path d="M103.018 39.7373L90.8929 53.6478L52.7778 32.9963L65.3826 18.5358C65.8841 17.9605 66.7175 17.81 67.3887 18.1735L102.565 37.232C103.483 37.7295 103.704 38.9499 103.018 39.7373Z" fill="#A8E7EF"/>
          <path d="M69.6158 23.6841C69.6158 26.5273 67.3107 28.8348 64.4677 28.8348C62.1579 28.8348 60.2041 27.3151 59.5522 25.2233L65.3208 18.6064C67.7591 19.0135 69.6158 21.1318 69.6158 23.6841Z" fill="#70D9E6"/>
          <path d="M2.53804 39.7373L14.6626 53.6478L52.7777 32.9963L40.173 18.5358C39.6715 17.9605 38.8381 17.81 38.1669 18.1735L2.99069 37.2322C2.07235 37.7295 1.85196 38.9499 2.53804 39.7373Z" fill="#D4F2F6"/>
          <path d="M31.184 26.5001C31.184 30.0801 28.2803 32.9813 24.7003 32.9813C21.9152 32.9813 19.54 31.224 18.6238 28.7589L29.9115 22.6436C30.7114 23.7199 31.184 25.0555 31.184 26.5001Z" fill="#A8E7EF"/>
          <path d="M1.47774 58.1113L14.6629 53.6465L52.7777 74.298L37.4019 79.5041C36.5422 79.7952 35.6004 79.7149 34.8024 79.2825L1.22383 61.0898C-0.0275386 60.4116 0.129552 58.568 1.47774 58.1113Z" fill="#A8E7EF"/>
          <path d="M104.078 58.1113L90.8927 53.6465L52.7778 74.298L68.1536 79.5041C69.0133 79.7952 69.9552 79.7149 70.7532 79.2825L104.331 61.0898C105.583 60.4116 105.426 58.568 104.078 58.1113Z" fill="#D4F2F6"/>
          <path d="M62.9586 101.634C62.32 101.634 61.7017 101.293 61.3758 100.692C60.9029 99.8186 61.2271 98.7274 62.1003 98.2542L66.2252 96.0194C67.0991 95.546 68.1898 95.8706 68.663 96.7438C69.1359 97.617 68.8117 98.7083 67.9385 99.1814L63.8137 101.416C63.5414 101.564 63.2479 101.634 62.9586 101.634Z" fill="#31A7FB"/>
          <path d="M18.2178 20.0178C18.2178 16.4375 21.1201 13.5352 24.7004 13.5352C28.2807 13.5352 31.183 16.4375 31.183 20.0178C31.183 23.598 28.2807 26.5004 24.7004 26.5004C21.1201 26.5004 18.2178 23.598 18.2178 20.0178Z" fill="#BCEA73"/>
          <path d="M21.4124 25.6039C23.957 25.0174 25.853 22.7393 25.853 20.0168C25.853 17.2972 23.96 15.0162 21.4154 14.4298C22.3782 13.861 23.5008 13.5352 24.7008 13.5352C28.2794 13.5352 31.1825 16.4384 31.1825 20.0168C31.1825 23.5983 28.2792 26.5015 24.7008 26.5015C23.5008 26.5015 22.3751 26.1757 21.4124 25.6039Z" fill="#99D53B"/>
          <path d="M39.6592 1.29223C38.9569 0.590091 37.8186 0.590091 37.116 1.29223L35.6326 2.77563L34.1492 1.29223C33.4468 0.590091 32.3086 0.590091 31.6059 1.29223C30.9038 1.99436 30.9038 3.13286 31.6059 3.83523L33.0893 5.31863L31.6059 6.80203C30.9038 7.50417 30.9038 8.64267 31.6059 9.34504C31.9571 9.69623 32.4175 9.8717 32.8776 9.8717C33.3377 9.8717 33.798 9.69599 34.1492 9.34504L35.6326 7.86164L37.116 9.34504C37.4672 9.69623 37.9275 9.8717 38.3876 9.8717C38.8477 9.8717 39.308 9.69599 39.6592 9.34504C40.3614 8.6429 40.3614 7.5044 39.6592 6.80203L38.1758 5.31863L39.6592 3.83523C40.3614 3.13286 40.3614 1.99436 39.6592 1.29223Z" fill="#BCEA73"/>
          <path d="M91.41 17.0979L92.8934 15.6145C93.5955 14.9124 93.5955 13.7739 92.8934 13.0715C92.191 12.3694 91.0527 12.3694 90.3501 13.0715L88.8667 14.5549L87.3833 13.0715C86.681 12.3694 85.5427 12.3694 84.8401 13.0715C84.1379 13.7737 84.1379 14.9122 84.8401 15.6145L86.3235 17.0979L84.8401 18.5813C84.1379 19.2835 84.1379 20.422 84.8401 21.1243C85.1913 21.4755 85.6516 21.651 86.1117 21.651C86.5718 21.651 87.0321 21.4753 87.3833 21.1243L88.8667 19.6409L90.3501 21.1243C90.7013 21.4755 91.1616 21.651 91.6217 21.651C92.0818 21.651 92.5422 21.4753 92.8934 21.1243C93.5955 20.4222 93.5955 19.2837 92.8934 18.5813L91.41 17.0979Z" fill="#BCEA73"/>
          <path d="M64.4667 23.6849C67.3105 23.6849 69.6158 21.3796 69.6158 18.5358C69.6158 15.692 67.3105 13.3867 64.4667 13.3867C61.6229 13.3867 59.3176 15.692 59.3176 18.5358C59.3176 21.3796 61.6229 23.6849 64.4667 23.6849Z" fill="#64B9FC"/>
          <path d="M69.6155 18.5353C69.6155 21.3802 67.3094 23.6863 64.4669 23.6863C63.5139 23.6863 62.6197 23.4275 61.855 22.9732C63.8762 22.5073 65.3822 20.6978 65.3822 18.5353C65.3822 16.3752 63.8785 14.5634 61.8573 14.0975C62.6221 13.6457 63.5139 13.3867 64.4669 13.3867C67.3094 13.3867 69.6155 15.6928 69.6155 18.5353Z" fill="#31A7FB"/>
      </svg>
      <p class="mt-6 font-bold text-xl lg:text-3xl text-black">Nothing to See Here yet</p>
      <p class="mt-2 text-gray-500">You have not added a service</p>
      <div class="mt-6">
          <router-link to="/app/dashboard/services/create" class="p-2 text-white text-sm" style="background: #52B95E;border-radius: 22px;">Add new Service</router-link>
          <router-link to="/app/dashboard/profile" class="ml-3 p-2 text-green-500 border border-solid border-green-500 text-sm" style="border-radius: 22px;">Update Profile</router-link>
      </div>
    </div>
       
</div>
</template>

<script>
import placeholder from "@/assets/img/Signup/person.png"
import axios from "axios"
import baseURL from "@/main"
import {mapState} from "vuex"
export default {
  data(){
    return {
      placeholder: placeholder,
      datas: [
        
      ],
      // bookings: []
    }
  },
  computed:{
    ...mapState({
      services : state => state.services
    })
  },
  methods:{
    viewService(obj){
      console.log(obj)
      this.$store.commit('setService', obj)
      this.$router.push('/app/dashboard/services/view')
    },
    getServices(){
      this.$store.commit('startLoading')
      axios.get(`${baseURL}/service`)
      .then(res=>{
        this.$store.commit('endLoading')
        this.$store.commit('setServices', res.data.data)
        // console.log(res.data.data)

      })
      .catch(err=>{
        this.$store.dispatch('handleError', err)
      })
    }
  },
  mounted(){
    if(Object.keys(this.services).length == 0){
      this.getServices()
    }
  }

}

</script>

<style scoped>
.box{
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;
    flex-wrap: nowrap;
    
}
.box::-webkit-scrollbar
{
  height: 0px;
	background-color: #F5F5F5;
}
.item{
    max-width: 260px;
    height: 426px;
    flex: 0 0 auto;
    margin-right: 40px;
    cursor: pointer;
    border-radius: 17px;
    border: 0.976378px solid #E8E8E8;
}
.imgbox{
  height: 170px
}
.imgbox img{
  border-radius: 7.81px
}

@media only screen and (min-width: 768px){
    .box{
        flex-wrap: wrap;
        overflow: hidden;
        justify-content: space-between;
    }
    .item{
        flex: 0 0 auto;
        margin: 0 0 20px 0;
    }
}
@media only screen and (min-width: 1024px){
    .box{
        /* column-gap: 10px; */
        row-gap: 20px;
        justify-content: flex-start;
    }
    .item{
        flex: 1 1 24%;
        /* max-width: none; */
        margin: 0 0.5%;
        
    }

    .imgbox{
      height: 170px;
    }
}
@media only screen and (min-width: 1280px){
    .box{
        max-width: 1500px;
        margin-left: auto;
        margin-right: auto;
        /* justify-content: space-between; */
    }
    .item{
      flex: 1 1 20%;
      /* margin: 0 2.5%; */
      max-width: 280px
    }
}
</style>