
import { defineStore } from 'pinia';
import api from '@/api';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('token') || null,
    user: null,
  }),
    actions: { async login(name, password) {
        try {
            const {data} = await api.post('/login', {name, password});
            this.token = data.access_token;
            localStorage.setItem('token', this.token);
        }
        catch (error) {
            throw new Error(error.response?.data?.message || 'Login failed');
        }
    },
    logout() {
        this.token = null;
        this.user = null;
        localStorage.removeItem('token');
    }
},
});
