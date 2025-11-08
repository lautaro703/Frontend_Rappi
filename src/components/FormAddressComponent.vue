<script setup>
import { ref } from 'vue'
import api from '@/api'


const userAddress = ref({
  street: '',
  city: '',
  state: '',
  postalCode: '',
  isDefault: false
})


async function saveAddress() {
  try {
    if (!userAddress.value.street || !userAddress.value.city || !userAddress.value.state || !userAddress.value.postalCode) {
      alert('Por favor completa todos los campos obligatorios.')
      return
    }

    const response = await api.post('/user/address', userAddress.value)
    console.log('Dirección guardada:', response.data)
    alert('Dirección guardada correctamente.')


    userAddress.value = {
      street: '',
      city: '',
      state: '',
      postalCode: '',
      isDefault: false
    }
  } catch (error) {
    console.error('Error al guardar dirección:', error)
    alert('Ocurrió un error al guardar la dirección.')
  }
}
</script>

<template>
  <div class="form-address-container p-8 bg-[#1c1c20] text-white rounded-xl shadow-md w-[500px] mx-auto mt-10">
    <h2 class="text-2xl font-bold mb-6 text-center">Agregar Dirección</h2>

    <form @submit.prevent="saveAddress" class="flex flex-col gap-4">

      <div>
        <label class="block mb-1 text-gray-300">Calle *</label>
        <input
          v-model="userAddress.street"
          type="text"
          placeholder="Ej: Av. Siempre Viva 742"
          class="input-field"
          required
        />
      </div>

      <div>
        <label class="block mb-1 text-gray-300">Ciudad *</label>
        <input
          v-model="userAddress.city"
          type="text"
          placeholder="Ej: Springfield"
          class="input-field"
          required
        />
      </div>

      <div>
        <label class="block mb-1 text-gray-300">Provincia / Estado *</label>
        <input
          v-model="userAddress.state"
          type="text"
          placeholder="Ej: Buenos Aires"
          class="input-field"
          required
        />
      </div>

      <div>
        <label class="block mb-1 text-gray-300">Código Postal *</label>
        <input
          v-model="userAddress.postalCode"
          type="text"
          placeholder="Ej: 1234"
          class="input-field"
          required
        />
      </div>

      <div class="flex items-center gap-2 mt-2">
        <input
          v-model="userAddress.isDefault"
          type="checkbox"
          class="w-5 h-5 accent-green-500"
        />
        <label class="text-gray-300">Dirección Predeterminada</label>
      </div>

      <button
        type="submit"
        class="bg-blue-600 hover:bg-blue-700 transition-colors py-2 rounded-lg font-semibold mt-4"
      >
        Guardar Dirección
      </button>
    </form>
  </div>
</template>

<style scoped>
.form-address-container {
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
  box-shadow: 0 0 0 2px #3b82f6;
}


.input-field::placeholder {
  color: #888;
}
</style>
