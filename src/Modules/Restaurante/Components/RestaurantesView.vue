<script setup>
import { ref, computed } from 'vue'
import SidebarComponent from '@/components/SidebarComponent.vue'

// === REACTIVIDAD ===
const busqueda = ref('')
const categoriaSeleccionada = ref('')

// === DATOS ===
const restaurantes = ref([
])

// === FILTRO ===
const restaurantesFiltrados = computed(() => {
  return restaurantes.value.filter(r => {
    const coincideBusqueda = r.nombre.toLowerCase().includes(busqueda.value.toLowerCase()) ||
                            r.descripcion.toLowerCase().includes(busqueda.value.toLowerCase())
    const coincideCategoria = !categoriaSeleccionada.value || r.categoria === categoriaSeleccionada.value
    return coincideBusqueda && coincideCategoria
  })
})

// === CLASES DINÁMICAS ===
const getTagClass = (categoria) => {
  const clases = {
    entradas: 'bg-purple-600',
    desayuno: 'bg-orange-600',
    almuerzo: 'bg-yellow-600',
    cena: 'bg-blue-600',
    postres: 'bg-pink-600'
  }
  return clases[categoria] || 'bg-gray-600'
}

const formatearCategoria = (cat) => {
  return cat.charAt(0).toUpperCase() + cat.slice(1)
}
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

      <!-- Grid de restaurantes -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 pb-8">
        <div
          v-for="restaurante in restaurantesFiltrados"
          :key="restaurante.id"
          class="card bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform duration-300 hover:-translate-y-1"
        >
          <img
            :src="restaurante.imagen"
            :alt="restaurante.nombre"
            class="w-full h-48 object-cover"
          />
          <div class="p-4">
            <h3 class="text-lg font-bold">{{ restaurante.nombre }}</h3>
            <p class="text-gray-400 text-sm">{{ restaurante.descripcion }}</p>
            <div class="flex items-center mt-2">
              <span class="text-yellow-400 text-lg">{{ restaurante.estrellas }}</span>
            </div>
            <span
              class="tag inline-block mt-2 px-3 py-1 text-xs rounded-full text-white font-medium"
              :class="getTagClass(restaurante.categoria)"
            >
              {{ formatearCategoria(restaurante.categoria) }}
            </span>
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
