import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AboutCourse from '../views/AboutCourse'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      layout: "main",
    },
  },
  {
    path: '/about-course',
    name: 'AboutCourse',
    component: AboutCourse,
    meta: {
      layout: "main",
    },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
