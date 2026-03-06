import { createRouter, createWebHistory } from 'vue-router'
import home from '../pages/home.vue'
import store from '../pages/store.vue'
import contact from '../pages/contact.vue'

const routes = [
  {path: '/', component: home},
  {path: '/store', component: store},
  {path: '/contact', component: contact},
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
