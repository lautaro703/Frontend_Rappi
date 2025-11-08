<script setup>
import { ref } from 'vue'
import api from '@/api'

// Estado del formulario
const nuevoMenu = ref({
  name: '',
  description: '',
  price: '',
  available: true,
  calories: '',
  category: ''
})

const categorias = [
  { value: 'desayuno', label: 'Desayuno' },
  { value: 'almuerzo', label: 'Almuerzo' },
  { value: 'cena', label: 'Cena' },
  { value: 'postre', label: 'Postre' },
  { value: 'bebida', label: 'Bebida' }
]


async function crearMenu() {
  try {
    if (!nuevoMenu.value.name || !nuevoMenu.value.description || !nuevoMenu.value.price) {
      alert('Por favor completa todos los campos obligatorios.')
      return
    }

    const response = await api.post('/menus', nuevoMenu.value)
    console.log('Nuevo menú:', response.data)

    nuevoMenu.value = {
      name: '',
      description: '',
      price: '',
      available: true,
      calories: '',
      category: ''
    }
  } catch (error) {
    console.error('Error al crear menú:', error)
    alert('Ocurrió un error al crear el menú.')
  }
}
</script>

<template>
  <div class="crear-menu-container p-8 bg-[#1c1c20] text-white rounded-xl shadow-md w-[500px] mx-auto mt-10">
    <h2 class="text-2xl font-bold mb-6 text-center">Crear Nuevo Menú</h2>

    <form @submit.prevent="crearMenu" class="flex flex-col gap-4">

      <div>
        <label class="block mb-1 text-gray-300">Nombre *</label>
        <input
          v-model="nuevoMenu.name"
          type="text"
          placeholder="Ej: Hamburguesa Clásica"
          class="input-field"
          required
        />
      </div>

      <div>
        <label class="block mb-1 text-gray-300">Descripción *</label>
        <textarea
          v-model="nuevoMenu.description"
          placeholder="Describe el plato..."
          class="input-field resize-none h-24"
          required
        ></textarea>
      </div>

      <div>
        <label class="block mb-1 text-gray-300">Precio *</label>
        <input
          v-model="nuevoMenu.price"
          type="number"
          placeholder="Ej: 1500"
          min="0"
          step="0.01"
          class="input-field"
          required
        />
      </div>

      <div>
        <label class="block mb-1 text-gray-300">Calorías</label>
        <input
          v-model="nuevoMenu.calories"
          type="number"
          placeholder="Ej: 350"
          class="input-field"
        />
      </div>

      <div>
        <label class="block mb-1 text-gray-300">Categoría *</label>
        <select
          v-model="nuevoMenu.category"
          class="input-field bg-gray-800 text-white"
          required
        >
          <option value="">Selecciona una categoría</option>
          <option
            v-for="cat in categorias"
            :key="cat.value"
            :value="cat.value"
          >
            {{ cat.label }}
          </option>
        </select>
      </div>

      <div class="flex items-center gap-2">
        <input
          v-model="nuevoMenu.available"
          type="checkbox"
          class="w-5 h-5 accent-green-500"
        />
        <label class="text-gray-300">Disponible</label>
      </div>

      <button
        type="submit"
        class="bg-green-600 hover:bg-green-700 transition-colors py-2 rounded-lg font-semibold mt-4"
      >
        Crear Menú
      </button>
    </form>
  </div>
</template>

<style scoped>
.crear-menu-container {
  border: 1px solid #2a2a2a;
}

.input-field {
  width: 100%;
  padding: 10px 14px;
  border-radius: 8px;
  border: none;
  outline: none;
  background-color: #2a2a2a;
  color: white;
  transition: background 0.2s ease, box-shadow 0.2s ease;
}

.input-field:focus {
  background-color: #333;
  box-shadow: 0 0 0 2px #4ade80;
}

.input-field::placeholder {
  color: #888;
}
</style>

