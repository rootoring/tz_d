import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CartView from '../views/CartView.vue'
const router = createRouter({
  routes: [{
    name: 'HomeView',
    path: '/',
    component: HomeView
  },
  {
    name: 'CartView',
    path: '/cart',
    component: CartView
  },
],
  history: createWebHistory()
})

export default router