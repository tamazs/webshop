import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Contact from '../views/Contact.vue'
import Admin from '../views/Admin.vue'
import Cart from '../views/Cart.vue'
import Shop from '../views/Shop.vue'
import Product from '../views/Product.vue'
import NewItems from '../views/NewItems.vue'
import Orders from '../views/Orders.vue'


import AdminGuard from '../shared/guards/AdminGuard'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop
  },
  {
    path: '/admin',
    name: 'Admin',
    meta: { adminOnly: true },
    beforeEnter: AdminGuard,
    component: Admin
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: Product
  },
  {
    path: '/newitems',
    name: 'NewItems',
    meta: { adminOnly: true },
    component: NewItems,
    beforeEnter: AdminGuard
  },
  {
    path: '/orders',
    name: 'Orders',
    meta: { adminOnly: true },
    component: Orders,
    beforeEnter: AdminGuard

  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
