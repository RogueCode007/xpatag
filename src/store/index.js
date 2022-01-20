import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from "../router/index"
import createPersistedState from "vuex-persistedstate";
import baseURL from "@/main"
import profile from "./modules/profile"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    showMobileNav: false,
    signupStep: 0,
    user : {},
    newUser : {},
    newService: {},
    service: {},
    services: [],
    banks: [],
    categories: {},
    activeModal : false,
    showError: false,
    showSuccess: false,
    successMsg : "",
    errorMsg: ""
    // signupComplete: false
  },
  mutations: {
    showMobileNav(state, val){
      state.showMobileNav = val
    },
    increaseSignup(state, payload){
      state.signupStep  = payload.val
    },
    // completeSignup(state){
    //   state.signupComplete = true
    // },
    startLoading(state){
      state.loading = true
    },
    endLoading(state){
      state.loading = false
    },
    setUser(state, obj){
      state.user = obj
    },
    setNewUser(state, obj){
      state.newUser = {...state.newUser, ...obj}
      console.log(state.newUser)
    },
    setActiveModal(state, val){
      state.activeModal = val
    },
    unsetUser(state){
      state.user = {}
    },
    unsetNewUser(state){
      state.newUser = {}
      state.signupStep = 0
    },
    setSuccess(state, payload){
      state.showSuccess = payload.status
      state.successMsg = payload.msg
      // console.log(state.successMsg)
    },
    setError(state, payload){
      state.showError = payload.status
      state.errorMsg = payload.msg
    },
    setNewService(state, payload){
      state.newService = payload
      console.log(state.newService)
    },
    setService(state, payload){
      state.service = payload
    },
    setCategories(state, val){
      state.categories = val
    },
    setServices(state, val){
      state.services = val
    },
    setBanks(state, val){
      state.banks = val
    }
  },
  actions: {
    registerUser({commit}, user){
      return new Promise((resolve, reject)=> {
        commit('startLoading')
        axios({url: `${baseURL}/signup`, data: user, method: 'POST'})
        .then((res)=> {
          commit('endLoading')
          resolve(res)
        })
        .catch((err)=>{
          commit('endLoading')
          reject(err.response)
        })
      })
    },
    loginUser({commit}, user){
      return new Promise((resolve, reject)=> {
        axios({url: `${baseURL}/login`, data: user, method: 'POST'})
        .then((res)=>{
          // commit('loginUser')
          commit('setUser', res.data.data)
          commit('unsetNewUser')
           //Store the token in localstorage
          const token = res.data.data.token
          localStorage.setItem('user-token', token) 
           //Set the authorization header for future API calls
          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
          resolve(res)
        })
        .catch((err)=>{
          commit('endLoading')
          reject(err.response)
        })
      })
    },
    logoutUser({commit}){
      return new Promise((resolve)=>{
        setTimeout(()=> {
          commit('unsetUser')
          localStorage.removeItem('user-token')
          // remove the axios default header
          delete axios.defaults.headers.common['Authorization']
          resolve()
        }, 2000)
      })
    },
    handleError({commit, dispatch}, err){
      // console.log(err.response.data.message)
      if(!err.response){
        commit('endLoading')
        commit('setError', {status: true, msg: "An error occured"})
        return
      }
      if(err.response.data.message == "Invalid or expired JWT"){
        commit('setError', {status: true, msg: 'Session expired'})
        commit('endLoading')
        dispatch('logoutUser')
        router.push('/login')
      }else if(err.response.data.message == "Email exists already"){
        commit('endLoading')
        commit('setError', {status: true, msg: err.response.data.message})
        router.push('/signup/1')
      }else if(err.response.data.message){
        commit('endLoading')
        commit('setError', {status: true, msg: err.response.data.message})
      }else{
        commit('endLoading')
        commit('setError', {status: true, msg: "An error occured"})
      }
    }
  },
  modules: {
    profile
  },
  plugins: [createPersistedState()]
})
