import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    component: () => import('@/components/layout/main.vue'),
    children:[
      {
        path:'/',
        name:'maps',
        component: () => import('@/views/maps/maps.vue'),
      },
      {
        path:'/orderList',
        name:'orderList',
        component: () => import('@/views/orderList/orderList.vue'),

      },
      {
        path:'/storage',
        name:'storage',
        component: () => import('@/views/storage/storage.vue'),

      },
      {
        path:'/menu',
        name:'menu',
        component: () => import('@/views/menu/menu.vue'),
      }
    ]
  },
  {
    path:'/orderDetail',
    name:'orderDetail',
    component:() => import('@/views/orderDetail/orderDetail.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
