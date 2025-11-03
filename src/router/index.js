import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue'),
    },
    {
      path: '/restaurantes',
      name: 'restaurantes',
      component: () => import('../Modules/Restaurante/Components/RestaurantesView.vue'),
    },
    {
      path: '/pedidos',
      name: 'listapedidos',
      component: () => import('../Modules/Pedidos/Components/ListaPedidosView.vue'),
    },
    {
      path: '/menus',
      name: 'menus',
      component: () => import('../Modules/Menus/Components/MenusView.vue'),
    },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
