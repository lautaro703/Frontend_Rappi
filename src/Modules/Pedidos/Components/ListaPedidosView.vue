<script setup>
import api from '@/api';
import SidebarComponent from '@/components/SidebarComponent.vue'
import { useAuthStore } from '@/store/auth';
import { onMounted, ref } from 'vue';



const auth = useAuthStore()
const orders = ref([])
const loading = ref(true)
const error = ref(null)

if (auth.user?.role === 'CLIENT') {
  onMounted(async () => {
    try {
      const { data } = await api.get(`/order/me`)
      orders.value = data
    } catch (err) {
      console.error('Error obteniendo ordenes:', err)
      error.value = 'No se pudieron cargar tus pedidos.'
    } finally {
      loading.value = false
    }
  })
} else if (auth.user?.role === 'DRIVER') {
  onMounted(async () => {
    try {
      const { data } = await api.get(`/order`)
      orders.value = data
    } catch (err) {
      console.error('Error obteniendo ordenes:', err)
      error.value = 'No se pudieron cargar tus pedidos.'
    } finally {
      loading.value = false
    }
  })
}

</script>

<template>
  <main class="bg-[#131318] h-screen w-screen flex">
    <SidebarComponent class="" />
    <div class="w-full flex items-center flex-col gap-5 bg-[#1b1b22] rounded-2xl m-[25px]">
      <table class="w-full overflow-auto m-[25px]">
        <thead class="h-10">
          <tr class="">
            <th class="text-[#a0a0a5]">Restaurante</th>
            <th class="text-[#a0a0a5]">Seguimiento</th>
            <th class="text-[#a0a0a5]">Precio</th>
            <th class="text-[#a0a0a5]">Estado</th>
            <th class="text-[#a0a0a5]">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr class="h-10" v-for="order in orders" :key="order.id">
            <td class="font-lora text-[#e8e8e8] text-center">{{ order.restaurantName }}</td>
            <td class="font-lora text-[#e8e8e8] text-center">{{ order.id }}</td>
            <td class="font-lora text-[#e8e8e8] text-center">{{ order.total }}</td>
            <td class="w-[150px] text-center text-white font-lora">
              <p class="bg-[#FF7043] my-2 px-7 rounded-xl">{{ order.status }}</p></td>
            <td class="text-center gap-5 flex my-2 justify-center items-center">
              <button class="bg-[#fa4c16] font-lora text-white px-5 rounded-2xl">Detalles</button>
              <button v-if="auth.user?.role === 'DRIVER'" class="bg-[#0c8129] font-lora text-white px-5 rounded-2xl">Aceptar</button>
              <button class="bg-[#ba1414] font-lora text-white px-5 rounded-2xl">Cancelar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>



<style>
</style>
