<script setup>
  import { RouterLink } from 'vue-router';
  import { ref, onMounted } from 'vue';
  import api from '@/api';
  import SidebarComponent from '@/components/SidebarComponent.vue';
  import FormAddressComponent from '@/Modules/ModificacionUsuario/Components/FormAddressComponent.vue';

  const addresses = ref([])
  const showForm = ref(false)
  const selectAddress = ref(null)
  const formMode = ref('add')
  const loading = ref(true)
  const error = ref(null)

  const openForm = (mode, address = null) => {
    formMode.value = mode
    selectAddress.value = address
    showForm.value = true
  }

  const closeform = () => {
    showForm.value = false
    selectAddress.value = null
  }

  onMounted(async () => {
    try{
      const { data } = await api.get(`/users/profile`)
      addresses.value = data.addresses || []
    }
    catch(err) {
      console.error('Error cargando direcciones ', err)
      error.value = 'No se pudieron cargar las direccioens.'
    } finally {
      loading.value = false
    }
  })

  const deleteAddress = async (id) => {
    if (!confirm('¿Esta seguro de eliminar esta direccion?')) return

    try {
      await api.delete(`/users/address/${id}`)
      addresses.value = addresses.value.filter(addr => addr.id !== id)
    } catch (err) {
      console.error('Error eliminando direccion: ', err)
      alert('No se pudo eliminar la direccion')
    }
  }
</script>


<template>
  <FormAddressComponent
    v-if="showForm"
    :address="selectAddress"
    :mode="formMode"
    @close="closeform"
    @saved="fetchAddresses"
  />
  <div class="flex">
    <SidebarComponent />
    <div class="w-screen h-screen overflow-auto pr-5">
      <div class="relative w-full h-[250px] mt-2 rounded-2xl">
        <div class="containerRestaurante">
          <div class="contenido">
            <h1 class="titulo">Datos del usuario</h1>
            <button class="volver"><RouterLink to="/restaurantes">◀</RouterLink></button>
          </div>
        </div>
      </div>
      <div class="relative w-full  m-auto mt-2 rounded-2xl">
        <div class="mb-10">
          <h2 class="categoriaDiseño"></h2>
          <div class="flex flex-wrap w-full justify-between gap-[30px] mt-3">
            <div>
              <button class="boton" @click="openForm('add')">Agregar Direccion</button>
            </div>
            <table v-if="!loading && addresses.length" class="w-full overflow-auto m-[25px]">
              <thead class="h-10">
                <tr class="">
                  <th class="text-[#a0a0a5]">Lugar</th>
                  <th class="text-[#a0a0a5]">Calle</th>
                  <th class="text-[#a0a0a5]">Provincia</th>
                  <th class="text-[#a0a0a5]">Ciudad</th>
                  <th class="text-[#a0a0a5]">Codigo Postal</th>
                  <th class="text-[#a0a0a5]">Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr class="h-10" v-for="addr in addresses" :key="addr.id">
                  <td class="font-lora text-[#e8e8e8] text-center">{{ addr.label }}</td>
                  <td class="font-lora text-[#e8e8e8] text-center">{{ addr.street }}</td>
                  <td class="font-lora text-[#e8e8e8] text-center">{{ addr.city }}</td>
                  <td class="font-lora text-[#e8e8e8] text-center">{{ addr.state }}</td>
                  <td class="font-lora text-[#e8e8e8] text-center">{{ addr.postalCode }}</td>
                  <td class="text-center gap-5 flex my-2 justify-center items-center">
                    <button @click="openForm('edit', addr)" class="bg-[#fa4c16] font-lora text-white px-5 rounded-2xl">Modificar</button>
                    <button @click="deleteAddress(addr.id)" class="bg-[#0c8129] font-lora text-white px-5 rounded-2xl">Eliminar</button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div v-else-if="!loading & !addresses.length" class="font-lora text-[#e8e8e8] text-center">
              No tienes direcciones guardadas
            </div>
            <div v-if="error" class="font-lora text-[#e8e8e8] text-center">
              {{ error }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>


<style scoped>
.boton {
  background-color: #ff6b2b;
  border: none;
  color: white;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s;
  display: flex;
  text-align: center;
}
.categoriaDiseño{
  color: #ffffff;
}
.volver{
  background-color: #767676;
  position: left;
  border-radius: 50%;
  width: 30px;
  height: 30px;
}
.containerRestaurante {
  position: absolute;
  width: 100%;
  height: 80%;
  background-color: #1b1b22;
  border-radius: 16px;
  opacity: 70%;
}

.contenido {
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin: 25px;
  color: white;
  z-index: 1;
}

.titulo {
  font-family: lora;
  font-size: 48px;
  font-weight: bold;
}

.subtitulo {
  font-family: lora;
  font-size: 24px;
  font-weight: 400;
  color: #a0a0a5;
}

.categoria {
  font-family: lora;
  font-size: 16pxpx;
  font-weight: 400;
  color: #a0a0a5;
}

.opcion {
  background-color: #141414;
  color: white;
  border-radius: 12px;
  padding: 16px;
  width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
  font-family: 'Poppins', sans-serif;
}

.logo_del_plato {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 10px;
}

.info {
  text-align: left;
  width: 100%;
}

.info h3 {
  font-size: 16px;
  margin-bottom: 4px;
  color: white;
}

.info p {
  font-size: 13px;
  color: #cfcfcf;
  margin-bottom: 8px;
}

.precio {
  margin-top: 10px;
}

.precio h2 {
  font-size: 20px;
  margin: 0;
}

.precio span {
  display: inline-block;
  margin-right: 10px;
  font-size: 13px;
}

.disponible {
  color: #2ecc71;
}

.acciones {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin-top: 15px;
}

.flecha {
  background: none;
  color: orange;
  border: none;
  font-size: 18px;
  cursor: pointer;
}

.cantidad {
  font-size: 16px;
  font-weight: bold;
}

.boton_agregar {
  background-color: #ff6b2b;
  border: none;
  color: white;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: 0.3s;
}

.boton_agregar:hover {
  background-color: #ff8c52;
}
</style>
