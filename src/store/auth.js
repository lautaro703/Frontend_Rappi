import { defineStore } from 'pinia'
import api from '@/api' // ✅ ger: ahora sí va a funcionar (juli: El jura 💜)

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('token') || null,
    user: JSON.parse(localStorage.getItem('user')) || null,
  }),

  getters: {
    isAutheticated: (state) => !!state.token, // Retorna true si hay un token (usuario logueado)
    userRole: (state) => state.user?.role || null, // Retorna el rol del usuario o null si no hay usuario
  },                                            // es decir, todo, menos el amor de el.

  actions: {
    async login(email, password) {
      try {
        const { data } = await api.post('/auth/login', { email, password })
        this.token = data.access_token
        localStorage.setItem('token', this.token)

        const { data: userData } = await api.get(`/users/profile`)
        this.user = userData
        localStorage.setItem('user', JSON.stringify(userData))

      } catch (error) {
        throw new Error(error.response?.data?.message || 'Login Failed')
      }
    },

    logout() { //Limpia el store y también lo elimina del localStorage.
      this.token = null // digamos que se borra como tu ex.
      this.user = null
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      delete api.defaults.headers.common['Authorization']
    },
  },
})
