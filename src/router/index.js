import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/components/LandingPage'
import HomeUser from '@/components/HomeUser'
import RegisterUser from '@/components/RegisterUser'
// import ViewPage from '@/components/ViewPage'
import firebase from 'firebase'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage,
    },
    {
      path: '/home',
      name: 'HomeUser',
      component: HomeUser,
      // meta : {
      //   requiresAuth: true
      // }
    },
    {
      path: '/register-user',
      name: 'RegisterUser',
      component: RegisterUser,
    }
  ]
})

export default router;