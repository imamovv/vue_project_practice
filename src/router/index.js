import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'
import BasketPage from '../views/BasketPage.vue'
import ProductPage from '../views/ProductPage.vue'
import AuthPage from '@/views/AuthPage.vue'
const routes = [{
  path: '/',
  name: 'home',
  component: MainPage,
  meta: { requiresAuth: true }
},
{
  path: '/basket',
  name: 'basket',
  component: BasketPage,
  meta: { requiresAuth: true }
},
{
  path: '/good/:id',
  name: 'product',
  component: ProductPage,
  meta: { requiresAuth: true }
},
{
  path: '/auth',
  name: 'auth',
  component: AuthPage,
  meta: { notAuthOnly: true }
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('authorizedUserLogin')

  if (
    to.matched.some((record) => record.meta.requiresAuth) &&
    !isAuthenticated
  ) {
    next('/auth')
  } else if (
    to.matched.some((record) => record.meta.notAuthOnly) &&
    isAuthenticated
  ) {
    next('/')
  } else {
    next()
  }
})

export default router
