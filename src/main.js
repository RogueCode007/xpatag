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