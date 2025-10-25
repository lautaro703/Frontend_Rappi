import { createRouter, createWebHistory } from 'vue-router'
import Siderbar from '../components/Siderbar.vue'
import Pedidos from '../Modules/Pedidos/Components/Pedidos.vue';
import Restaurantes from '@/Modules/Restaurante/Components/Restaurantes.vue';

const routes = [
  {
    path: '/',
    name: 'Siderbar',
    component: Siderbar
    },
    {
     path: '/pedidos',
     name: 'Pedidos',
     component: Pedidos
    },
    {
      path: '/restaurantes',
      name: 'Restaurantes',
      component: Restaurantes
    }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
