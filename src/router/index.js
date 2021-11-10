import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import( /* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import( /* webpackChunkName: "signup" */ '../views/Signup.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import( /* webpackChunkName: "dashboard" */ '../views/Dashboard.vue')
  },
  {
    path: '/post/:id',
    name: 'post',
    component: () => import( /* webpackChunkName: "dashboard" */ '../views/Post.vue'),
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
