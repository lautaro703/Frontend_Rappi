import { defineStore } from 'pinia'
import api from '@/api'
import axios from 'axios'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('token') || null,
    user: JSON.parse(localStorage.getItem('user')) || null,
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

        const { data: userData } = await api.get(`/users/profile`)
        this.user = userData
        localStorage.setItem('user', JSON.stringify(userData))

      } catch (error) {
        throw new Error(error.response?.data?.message || 'Login Failed')
      }
    },

    logout() {
      useAuthStore.token = null
      useAuthStore.user = null
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      axios.defaults.headers.common['Authorization'] = null
    },
  },
})
