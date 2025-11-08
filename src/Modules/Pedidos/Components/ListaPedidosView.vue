<script setup>
import api from '@/api';
import SidebarComponent from '@/components/SidebarComponent.vue'
import { onMounted, ref } from 'vue';

const orders = ref([])
const loading = ref(true)
const error = ref(null)


const fetchUserOrders = async () => {
  try {
    const { data } = await api.get(`/order/me`)
    orders.value = data
  } catch (err) {
    console.error('Error obteniendo ordenes:', err)
    error.value = 'No se pudieron cargar tus pedidos.'
  } finally {
    loading.value = false
  }
}

onMounted(fetchUserOrders)
</script>

<template>
  <main class="bg-[#131318] h-screen w-screen flex">
    <SidebarComponent class="" />
    <div class="order-card">
      <div class="order-header">
        <div class="col">Restaurante</div>
        <div class="col">Seguimiento</div>
        <div class="col">Precio</div>
        <div class="col">Estado</div>
      </div>
      <div class="order-row" v-for="order in orders" :key="order.id">
        <p class="col">{{ order.restaurantName }}</p>
        <p class="col tracking">{{ order.id }}</p>
        <p class="col price">{{ order.total }}</p>
        <div class="col status">
          <span class="status-text">{{ order.status }}</span>
          <div class="flex gap-4">
            <div v-if="auth.user?.role === 'CLIENT'">
             <button class="btn details"@click="DetallesPedido" >DETALLES</button>
             <title>Sistema de Calificación</title>
             <button class="btn cancel" @click="CancelarPedidoCliente">CANCELAR</button>
            </div>
            <div v-else-if="auth.user?.role === 'DRIVER'">
             <div class="btn details" @click="AceptarPedido">ACEPTAR</div>button>
             <title>Sistema de Calificación</title>
             <button class="btn cancel" @click="CancelarPedido">CANCELAR</button>
            </div>
          </div>
          </div>
          </div>
      </div>
    </div>
  </main>
</template>



<style>
.order-card {
  width: 100%;
  margin: 1rem;
  background-color: #1b1b22;
  border-radius: 12px;
  overflow: auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.order-header,
.order-row {
  display: grid;
  grid-template-columns: 1fr 0.5fr 1fr 1fr;
  padding: 0.75rem 1rem;
  font-size: 0.9rem;
  align-items: center;
}

.order-header {
  background-color: #1b1b22;
  color: #aaa;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.8rem;
}

.order-row {
  background-color: #1b1b22;
  color: #fff;
}

.tracking {
  font-family: monospace;
  font-size: 0.85rem;
}

.price {
  color: #4ade80;
  font-weight: bold;
}

.status {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.status-text {
  background-color: #4ade80;
  color: #000;
  padding: 0.2rem 0.5rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: bold;
}

.btn {
  background-color: #e0245e;
  color: white;
  border: none;
  padding: 0.4rem 0.8rem;
  border-radius: 1.5rem;
  font-size: 0.75rem;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s;
}

.btn:hover {
  background-color: #c51d4e;
}

.btn.cancel {
  background-color: #333;
}

.btn.cancel:hover {
  background-color: #444;
}

.container-pedido {
  max-width: 600px;
  margin: 40px auto;
  top: 30%;
  left:50%;
  position:absolute;
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  color: #2c3e50;
}

#pedido-info {
  background: #ecf0f1;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 25px;
  font-size: 1.1em;
}

.ratingdetails {
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 20px 0;
}

.star {
  font-size: 2.5rem;
  color: #ddd;
  cursor: pointer;
  transition: color 0.2s, transform 0.1s;
}

.star:hover,
.star.selected,
.star.hovered {
  color: #f1c40f;
  transform: scale(1.1);
}

textarea {
  width: 100%;
  padding: 12px;
  margin: 15px 0;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1em;
  resize: vertical;
}

button {
  background: #3498db;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 1.1em;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;
}

button:hover {
  background: #2980b9;
}

.hidden {
  display: none;
}

.success {
  margin-top: 20px;
  padding: 15px;
  background: #d5f5e3;
  color: #27ae60;
  border-radius: 8px;
  text-align: center;
  font-weight: bold;
}
</style>
