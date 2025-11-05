<script setup>
import SidebarComponent from '@/components/SidebarComponent.vue'
import { ref } from 'vue';
import axios from 'axios'

const datosRestaurantes = ref([])

async function CargarRestaurantes() {
  try{
   const response = await axios.get('http://localhost:3000/api/restaurant');
   datosRestaurantes.value = response.data
  }
  catch (error){
    console.log('error al cargar los datos ', error)
  }
  
}
 CargarRestaurantes();

</script>

<template>
  <main class="flex">
    <SidebarComponent />

    <div class="h-screen w-screen overflow-auto bg-gray-900 text-white">
      <!-- Búsqueda -->
      <div class="search-bar p-4 relative">
        <span class="absolute left-8 top-1/2 transform -translate-y-1/2 text-gray-400">Search</span>
        <input
          v-model="busqueda"
          type="text"
          placeholder="Buscar restaurante..."
          class="w-full p-3 pl-12 bg-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <!-- Filtro de categoría -->
      <div class="px-4 mb-6">
        <h2 class="text-xl font-bold mb-3">Tipo de comida</h2>
        <select
          v-model="categoriaSeleccionada"
          class="w-full p-3 bg-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Todos</option>
          <option value="entradas">Entradas</option>
          <option value="desayuno">Desayuno</option>
          <option value="almuerzo">Almuerzo</option>
          <option value="cena">Cena</option>
          <option value="postres">Postres</option>
        </select>
      </div>

      <div class="grid grid-cols-3 gap-y-8 justify-center">
        <div class="card" v-for="restaurante in datosRestaurantes" :key="restaurante.id" >
          <div class="card-content">
            <RouterLink to="/menus">
            <h3>{{restaurante.name}}</h3>
            <p>{{ restaurante.description }}</p>
            <div class="stars">{{ restaurante.rating }}</div>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
/* Opcional: mejorar el icono */
.search-bar input::placeholder {
  color: #9ca3af;
}
</style>
<style>
.search-bar {
  background-color: #1e1e1e;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 20px;
  margin-top: 20px;
  width: 100%;
  height: 60px;
}

.search-bar input {
  background: none;
  border: none;
  outline: none;
  color: #fff;
  flex: 1;
  font-size: 15px;
}

.search-bar .icon {
  margin-right: 10px;
  font-size: 18px;
}

h2 {
  display: block;
  font-size: 25px;
  margin-block-start: -10px;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  unicode-bidi: isolate;
}

.info {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-left: 10px;
}

.actions {
  display: flex;
  gap: 8px;
}

.search-bar {
  display: flex;
  align-items: center;
  background-color: #1c1c20;
  padding: 8px 15px;
  border-radius: 10px;
  margin-bottom: 25px;
}
.search-bar input {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: #fff;
  font-size: 16px;
}

.card {
  background-color: #1a1a1a;
  max-width: 420px;
  color: white;
  border-radius: 10px;
  overflow: hidden;
  width: auto;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  cursor: pointer;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 6px 14px rgba(150, 137, 137, 0.08);
}

.card:hover img {
  opacity: 1;
}

.card-content {
  padding: 15px;
}

.card-content h3 {
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 5px;
}

.card-content p {
  color: #ffffff;
  font-size: 14px;
  margin-bottom: 10px;
}

.stars {
  color: #ffcc00;
  font-size: 20px;
}

.stars {
  color: #ffcc00;
  font-size: 25px;
  margin-left: 0px;
}

.btn-pedidos {
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  background: #ff4f4f;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
  transition: 0.2s;
}

.btn-pedidos:hover {
  background: #ff6b6b;
}

.sidebar-select {
    width: 100%;
    padding: 10px;
    margin-top: 10px;
    border-radius: 10px;
    border: none;
    background: #1f1f1f;
    color: white;
    font-size: 17px;
    cursor: pointer;
}

.sidebar-select:focus {
    outline: none;
    background: #2a2a2a;
}

</style>
