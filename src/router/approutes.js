import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default [
    {
        path: '/app',
        redirect: '/app/dashboard',
        component: () => import('../views/Dashboard'),
        beforeEnter: (to, from, next)=>{
          const token = localStorage.getItem('user-token')
          if (to.name !== 'Login'  && !token) next({ name: 'Login' })
          else next()
        },
        children: [
          {
            path: '/app/dashboard',
            redirect: '/app/dashboard/home',
            beforeEnter: (to, from, next)=>{
              const token = localStorage.getItem('user-token')
              if (to.name !== 'Login'  && !token) next({ name: 'Login' })
              else next()
            },
            component: () => import('../views/Menu/Menu'),
            children: [
              {
                path: '/app/dashboard/home',
                name: 'Overview',
                beforeEnter: (to, from, next)=>{
                    const token = localStorage.getItem('user-token')
                    if (to.name !== 'Login'  && !token) next({ name: 'Login' })
                    else next()
                },
                component: () => import('../views/Menu/Home')
              },
              {
                path: '/app/dashboard/messages',
                name: 'Messages',
                component: () => import('../views/Menu/Messages')
              },
              {
                path: '/app/dashboard/services',
                redirect: '/app/dashboard/services/all',
                name: 'Services',
                component: () => import('../views/Menu/Services/Services'),
                children: [
                  {
                    path: '/app/dashboard/services/all',
                    name: 'AllServices',
                    component: () => import('../views/Menu/Services/AllServices')
                  },
                  {
                    path: '/app/dashboard/services/create',
                    redirect: '/app/dashboard/services/create/1',
                    name: 'NewService',
                    component: () => import('../views/Menu/Services/CreateService/CreateService'),
                    children : [
                      {
                        path: '/app/dashboard/services/create/1',
                        component : () => import('../views/Menu/Services/CreateService/Step1')
                      },
                      {
                        path: '/app/dashboard/services/create/2',
                        component : () => import('../views/Menu/Services/CreateService/Step2')
                      },
                    ]
                  },
                ]
              },
              {
                path: '/app/dashboard/profile',
                redirect: '/app/dashboard/profile/personal',
                component : () => import('../views/Menu/Profile/Profile'),
                children : [
                  {
                    path: '/app/dashboard/profile/personal',
                    name: 'Profile',
                    component : ()=> import('../views/Menu/Profile/Personal')
                  },
                  {
                    path: '/app/dashboard/profile/professional',
                    name: 'Professional',
                    component : ()=> import('../views/Menu/Profile/Professional')
                  },
                  {
                    path: '/app/dashboard/profile/ratings',
                    name: 'Ratings',
                    component : ()=> import('../views/Menu/Profile/Ratings')
                  },
                ]
              },
              {
                path: '/app/dashboard/wallet',
                redirect: '/app/dashboard/wallet/payment',
                component : () => import('../views/Menu/Wallet/Wallet'),
                children : [
                  {
                    path: '/app/dashboard/wallet/payment',
                    name: 'Wallet',
                    component : () => import('../views/Menu/Wallet/Payment')
                  },
                  {
                    path: '/app/dashboard/wallet/Transactions',
                    name: 'Transactions',
                    component : () => import('../views/Menu/Wallet/Transactions')
                  },
                ]
              },
              {
                path: '/app/dashboard/settings',
                redirect: '/app/dashboard/settings/account',
                component : () => import('../views/Menu/Settings/Settings'),
                children : [
                  {
                    path: '/app/dashboard/settings/account',
                    component : () => import('../views/Menu/Settings/Account')
                  },
                  {
                    path: '/app/dashboard/settings/security',
                    component : () => import('../views/Menu/Settings/Security')
                  },
                  // {
                  //   path: '/app/dashboard/settings/notifications',
                  //   component : ()=> import('../views/Menu/Settings/Notifications')
                  // },
                  // {
                  //   path: '/app/dashboard/settings/password',
                  //   component : ()=> import('../views/Menu/Settings/Password')
                  // },
                  // {
                  //   path: '/app/dashboard/settings/help',
                  //   component : ()=> import('../views/Menu/Settings/Help')
                  // },
                  
                ]
              },
              {
                path: '/app/dashboard/bookings',
                name: 'Bookings',
                component: () => import('../views/Menu/Bookings')
              },
              
            ]
          }
        ]
    },
]
