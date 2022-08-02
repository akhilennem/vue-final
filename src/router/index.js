import Vue from 'vue'
import VueRouter from 'vue-router'

//User
import UserAttend from '../views/UserAttend.vue';

//Admin

import Admin from '../views/Admin.vue';
import AdminAbout from '../views/Admin/AdminAbout';
import AdminAttend from '../views/AdminAttend.vue';
import AdminHome from '../views/AdminHome.vue';
import AdminProfile from '../views/AdminProfile.vue';
import AdminRegister from '../views/AdminRegister.vue';
import ForgetPassword from '../views/ForgetPassword.vue';
import IndividualAttend from '../views/IndividualAttend.vue';
import OtpEnter from '../views/OtpEnter.vue';
import ConfirmPassword from '../views/ConfirmPassword.vue';

Vue.use(VueRouter)

const routes = [
 
  {
    path: '/',
    redirect: 'Admin',
   
  },
  {
    path: '/userattend',
    name: 'userattend',
    component: UserAttend
  },

  //Admin
  {
    path: '/adminhome',
    name: 'adminhome',
    component: AdminHome
  },
  {
    path: '/adminprofile',
    name: "adminprofile",
    component: AdminProfile
  },
  {
    path: '/adminregister',
    name: 'adminregister',
    component: AdminRegister
  },
  {
    path: '/adminabout',
    name: 'adminabout',
    component: AdminAbout
  },
  {
    path: '/adminattend',
    name: 'adminattend',
    component: AdminAttend
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin
  },
  {
    path: '/confirmpassword',
    name: 'confirmpassword',
    component: ConfirmPassword
  },
  {
    path: '/forgetpassword',
    name: 'forgetpassword',
    component: ForgetPassword
  },
  {
    path: '/individualattend',
    name: 'individualattend',
    component: IndividualAttend
  },
  {
    path: '/otp',
    name: 'otp',
    component: OtpEnter
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
