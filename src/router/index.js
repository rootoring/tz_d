import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProfileView from '../views/ProfileView.vue'

const router = createRouter({
  routes: [{
    name: 'Vechicles',
    path: '/',
    component: HomeView
  },
  {
    name: 'Profile',
    path: '/profile',
    component: ProfileView
  },

],
  history: createWebHistory()
})

export default router