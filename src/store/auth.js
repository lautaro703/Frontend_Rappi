import { defineStore } from 'pinia'
import api from '@/api' // ✅ ahora sí va a funcionar

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('token') || null,
    user: null,
  }),

  getters: {
    isAutheticated: (state) => !!state.token,
    userRole: (state) => state.user?.role || null,
  },

  actions: {
    async login(email, password) {
      try {
        const { data } = await api.post('/auth/login', { email, password })
        this.token = data.access_token
        localStorage.setItem('token', this.token)

        const decoded = JSON.parse(atob(this.token.split('.')[1]))
        const id = decoded.sub

        const { data: userData } = await api.get(`/users/${id}`)
        this.user = userData
      } catch (error) {
        throw new Error(error.response?.data?.message || 'Login Failed')
      }
    },

    logout() {
      this.token = null
      this.user = null
      localStorage.removeItem('token')
    },
  },
})
