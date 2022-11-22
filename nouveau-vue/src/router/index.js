import { createRouter, createWebHistory } from 'vue-router'
//import Accueil from '../views/Accueil.vue'

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: () => import(/* webpackChunkName: "acceuil" */ '../views/Accueil.vue')
  },
  {
    path: '/nouscontacter',
    name: 'Nouscontacter',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Nouscontacter.vue')
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
