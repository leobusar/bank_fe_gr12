import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login';
import SignUp from '../components/SignUp'
import Home from '../components/Home'

const routes = [
  {
    path: '/',
    name: 'root',
    component: Home
  },
  {
    path: '/user/login',
    name: 'login',
    component: Login
  },
  {
    path: '/user/signup',
    name: 'signup',
    component: SignUp
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
