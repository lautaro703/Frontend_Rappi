
<script setup>
import { ref, watch } from 'vue'
import api from '@/api'
import { useAuthStore } from '@/store/auth'

const auth = useAuthStore()

const props = defineProps({
  address: { type: Object, default: null },
  mode: { type: String, default: 'add' },
})
const emit = defineEmits(['close', 'saved'])


const userAddress = ref({
  id: '',
  addresses: {
    label: '',
    street: '',
    city: '',
    state: '',
    postalCode: '',
    isDefault: false,
  },
})


watch(
  () => props.address,
  (newVal) => {
    if (newVal) {
      userAddress.value.id = newVal.id || ''
      userAddress.value.addresses = {
        label: newVal.label || '',
        street: newVal.street || '',
        city: newVal.city || '',
        state: newVal.state || '',
        postalCode: newVal.postalCode || '',
        isDefault: newVal.isDefault ?? false,
      }
    } else {
      userAddress.value = {
        id: '',
        addresses: {
          label: '',
          street: '',
          city: '',
          state: '',
          postalCode: '',
          isDefault: false,
        },
      }
    }
  },
  { immediate: true }
)


async function saveAddress() {
  try {
    const payload = {
      label: userAddress.value.addresses.label,
      street: userAddress.value.addresses.street,
      city: userAddress.value.addresses.city,
      state: userAddress.value.addresses.state,
      postalCode: userAddress.value.addresses.postalCode,
      isDefault: userAddress.value.addresses.isDefault,
      userId: auth.user.id,
    }

    const endpoint =
      props.mode === 'edit'
        ? `/users/address/${userAddress.value.id}`
        : `/users/address`

    const method = props.mode === 'edit' ? 'put' : 'post'
    const res = await api[method](endpoint, payload)

    console.log('Dirección guardada:', res.data)
    emit('saved')
    emit('close')
  } catch (err) {
    console.error('Error al guardar dirección:', err)
  }
}

</script>

<template>
  <div class="w-full h-full bg-black absolute z-1 opacity-70"/>
  <div class="h-screem w-screen absolute z-1">
    <div class="h-screen w-screen flex justify-center items-center">
      <div class="form-address-container p-8 bg-[#1c1c20] text-white rounded-xl shadow-md w-[500px] mx-auto">
        <h2 class="text-2xl font-bold mb-6 text-center">
          {{ mode === 'edit' ? 'Editar Direccion' : 'Añadir Direccion' }}
        </h2>

        <form @submit.prevent="saveAddress" class="flex flex-col gap-4">

          <div>
            <label class="block mb-1 text-gray-300">Nombre *</label>
            <input
              v-model="userAddress.addresses.label"
              type="text"
              placeholder="Ej: Casa"
              class="input-field"
              required
            />
          </div>

          <div>
            <label class="block mb-1 text-gray-300">Calle *</label>
            <input
              v-model="userAddress.addresses.street"
              type="text"
              placeholder="Ej: Av. Siempre Viva 742"
              class="input-field"
              required
            />
          </div>

          <div>
            <label class="block mb-1 text-gray-300">Ciudad *</label>
            <input
              v-model="userAddress.addresses.city"
              type="text"
              placeholder="Ej: Springfield"
              class="input-field"
              required
            />
          </div>

          <div>
            <label class="block mb-1 text-gray-300">Provincia / Estado *</label>
            <input
              v-model="userAddress.addresses.state"
              type="text"
              placeholder="Ej: Buenos Aires"
              class="input-field"
              required
            />
          </div>

          <div>
            <label class="block mb-1 text-gray-300">Código Postal *</label>
            <input
              v-model="userAddress.addresses.postalCode"
              type="text"
              placeholder="Ej: 1234"
              class="input-field"
              required
            />
          </div>

          <div class="flex items-center gap-2 mt-2">
            <input
              v-model="userAddress.addresses.isDefault"
              type="checkbox"
              class="w-5 h-5 accent-green-500"
            />
            <label class="text-gray-300">Dirección Predeterminada</label>
          </div>

          <button
            type="submit"
            @click="emit('close')"
            class="bg-blue-600 hover:bg-blue-700 transition-colors py-2 rounded-lg font-semibold mt-4"
          >Cancelar</button>
          <button
            type="submit"
            class="bg-blue-600 hover:bg-blue-700 transition-colors py-2 rounded-lg font-semibold mt-4"
          >
            {{ mode === 'edit' ? 'Guardar Cambios' : 'Crear' }}
          </button>
          </form>
      </div>
    </div>
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
