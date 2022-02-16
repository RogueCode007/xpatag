import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Home/Login.vue'
import Home from '../views/Home/Home.vue'
import approutes from './approutes'
Vue.use(VueRouter)

const baseRoutes = [
  {
    path: '/',
    redirect: '/login',
    component: Home,
    children : [
      {
        path: '/login',
        name: 'Login',
        component: Login
      },
      {
        path: '/forgotpassword',
        name: 'Forgot',
        component: () => import('../views/Home/ForgotPassword'),
      },
      {
        path: '/resetpassword',
        name: 'Reset',
        component: () => import('../views/Home/Resetpassword'),
      },
      {
        path: '/signup',
        name: 'Signup',
        redirect: '/signup/expert/step1',
        component: () => import('../views/Home/Signup/Signup'),
        children: [
          {
            path: '/signup/expert/step1',
            component: () => import('../views/Home/Signup/Step1')
          },
          {
            path: '/signup/expert/step2',
            component: () => import('../views/Home/Signup/Step2')
          },
          {
            path: '/signup/expert/step3',
            component: () => import('../views/Home/Signup/Step3')
          },
          // {
          //   path: '/signup/4',
          //   component: () => import('../views/Home/Signup/Step4')
          // },
          {
            path: '/signup/verifyotp',
            component: () => import('../views/Home/Signup/Verify')
          },
          {
            path: '/signup/5',
            component: () => import('../views/Home/Signup/Complete')
          },
        ]
      },
    ]
  },
  
  
]
const routes = baseRoutes.concat(approutes);
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
