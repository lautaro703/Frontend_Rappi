import { useAuthStore } from '@/store/auth'
import { jwtDecode } from 'jwt-decode'
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
      meta: { requiresAuth: true },
    },
    {
      path: '/pedidos',
      name: 'listapedidos',
      component: () => import('../Modules/Pedidos/Components/ListaPedidosView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/menus',
      name: 'menus',
      component: () => import('../Modules/Menus/Components/MenusView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/modificacionU',
      name: 'modificacion',
      component: () => import('../Modules/ModificacionUsuario/Components/UsuarioModificacionView.vue')
    },
    {
      path: '/cartaModificacion',
      name: 'modificar',
      component: () => import('../components/FormAddressComponent.vue')
    }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to) => {
  const auth = useAuthStore()
  const isAutheticated = auth.token || localStorage.getItem('token')

  if (to.meta.requiresAuth) {
    if (!isAutheticated) return { name: '' }

    const decoded = jwtDecode(isAutheticated)
    const isExpired = decoded.exp * 1000 < Date.now()

    if (isExpired) {
      auth.logout()
      return { name: '' }
    }
  }

  if (to.name === '' && isAutheticated) {
    return { name: 'restaurantes' }
  }
})

export default router
