import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Acceuil.vue'

const routes = [
  {
    path: '/',
    name: 'Acceuil',
    component: () => import(/* webpackChunkName: "acceuil" */ '../views/Acceuil.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/cryptos',
    name: 'Cryptos',
    component: () => import(/* webpackChunkName: "cryptos" */ '../views/Cryptos.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
