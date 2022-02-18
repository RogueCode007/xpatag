import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './index.css'
import VueWow from 'vue-wow' 
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faArrowLeft, faTimes, faTrash, faSearch, faCheckCircle, faQuestionCircle, faDownload, faTimesCircle, faMapMarker, faBriefcase, faPlayCircle, faAngleDown, faAngleUp, faCircle, faArrowRight, faCalendar, faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faInstagram, faTwitter, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueTailwind from 'vue-tailwind'
import TPagination from 'vue-tailwind/dist/t-pagination'
import VueTelInput from 'vue-tel-input';
import 'vue-tel-input/dist/vue-tel-input.css';

Vue.use(VueTelInput);
const settings = {
  't-pagination': {
    component: TPagination,
    props: {
      classes: {
        wrapper: 'table border-collapse text-center bg-white mx-auto shadow-sm',
        element: 'w-8 h-8 border border-gray-200 table-cell hover:border-blue-100',
        activeElement: 'w-8 h-8 border border-gray-200 border-blue-500 table-cell hover:border-blue-600',
        disabledElement: 'w-8 h-8 border border-gray-200 table-cell',
        ellipsisElement: 'w-8 h-8 border border-gray-200 hidden md:table-cell',
        activeButton: 'bg-blue-500 w-full h-full text-white hover:bg-blue-600 transition duration-100 ease-in-out focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50',
        disabledButton: 'opacity-25 w-full h-full cursor-not-allowed transition duration-100 ease-in-out',
        button: 'hover:bg-blue-100 w-full h-full transition duration-100 ease-in-out focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50',
        ellipsis: ''
      },
      variants: {
        rounded: {
          wrapper: 'bg-white mx-auto text-center flex space-x-2',
          element: 'w-8 h-8 rounded-full',
          activeElement: 'w-8 h-8 rounded-full',
          disabledElement: 'w-8 h-8 rounded-full',
          ellipsisElement: 'w-8 h-8 rounded-full hidden md:inline',
          activeButton: 'border border-blue-500 bg-blue-500 w-full h-full rounded-full text-white hover:bg-blue-600 transition duration-100 ease-in-out focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50',
          disabledButton: 'border border-gray-200  opacity-25 w-full h-full rounded-full cursor-not-allowed transition duration-100 ease-in-out',
          button: 'border border-gray-200 hover:bg-blue-100 hover:border-blue-100 rounded-full w-full h-full transition duration-100 ease-in-out focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50',
          ellipsis: ''
        }
      }
    }
  }
}

Vue.use(VueTailwind, settings)
library.add(faFacebookSquare, faInstagram, faTrash, faTwitter, faLinkedin, faEye, faEyeSlash, faBars, faArrowLeft, faTimes, faSearch, faCheckCircle, faQuestionCircle,faDownload, faTimesCircle, faAngleUp, faBriefcase,faMapMarker, faPlayCircle, faAngleDown, faCircle, faArrowRight, faCalendar)

Vue.use(VueWow)
Vue.component('font-awesome-icon', FontAwesomeIcon)

//set baseURL
const baseURL = "https://api.xpatag.com/v1"

//After login, on page refresh, set authorization header
const token = localStorage.getItem('user-token')
if(token){
  store.state.userState = 'logged in'
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
}


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

export default baseURL