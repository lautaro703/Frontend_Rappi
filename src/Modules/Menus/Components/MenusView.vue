<script setup>
import SidebarComponent from '@/components/SidebarComponent.vue'
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import api from '@/api';
import { useAuthStore } from '@/store/auth';

const categorias = ref([]);
const cantidades = ref({})

onMounted(async () => {
  try{
    const respuesta = await api.get("/menus")
    categorias.value = respuesta.data

   categorias.value.forEach(cat => {
      cat.items.forEach(item => {
        cantidades.value[item.id] = 0
      })
    });
  }
  catch(error){
    console.log(error)
  }
})

async function suma(id) {
  cantidades.value[id]++
}
async function resta(id) {
  if (cantidades.value[id] > 0) {
    cantidades.value[id]--
  }
}

async function agregar(item) {
  alert(`Agregado al pedido: ${item.name}, Cantidad:${cantidades.value[item.id]}`)
  cantidades.value[item.id] = 0
}

const auth = useAuthStore()
const cargando = ref(false)

const eliminarMenuItem = async (categoriaId, itemId) => {
  if (!confirm('¿Estás seguro de eliminar este producto?')) return

  cargando.value = true

  try {

    await api.delete(`/menus/items/${itemId}`)


    auth.eliminarItem(categoriaId, itemId)

    alert('Producto eliminado correctamente')
  } catch (error) {
    console.error('Error al eliminar el menú:', error)
    const mensaje = error.response?.data?.message || 'No se pudo eliminar el producto'
    alert(mensaje)
  } finally {
    cargando.value = false
  }
}

</script>

<template>
<div class="flex">
  <SidebarComponent />
  <div class="w-screen h-screen overflow-auto pr-5">
    <div class="relative w-full h-[250px] mt-5 rounded-2xl">
      <div class="containerRestaurante">
        <div class="contenido">
          <h1 class="titulo">La Trattoria di Luc</h1>
          <p class="subtitulo">Sabores que iluminan el alma</p>
          <button class="volver"><RouterLink to="/restaurantes">◀</RouterLink></button>
        </div>
      </div>
    </div>
    <div class="relative w-full  m-auto mt-8 rounded-2xl">
      <div v-for="categoria in categorias" :key="categoria.id" class="mb-10">
        <h2 class="categoriaDiseño">{{ categoria.name }}</h2>
        <div class="flex flex-wrap w-full justify-between gap-[30px] mt-3">
          <div class="opcion" v-for="item in categoria.items" :key="item.id">
            <div class="w-full h-[135px] bg-[#2C2C34] rounded-2xl mb-4"></div>
            <div class="info">
              <h3><strong>{{ item.name }}</strong></h3>
              <p>{{ item.description }}</p>
              <div class="precio">
                <h2>${{ item.price }}</h2>
                <p>{{ item.calories }} cal</p>
                <span span class="disponible">{{ item.available }}</span>
              </div>
            </div>
            <div class="acciones">
              <button @click="resta(item.id)" class="flecha">◀</button>
              <span class="cantidad">{{ cantidades[item.id] }}</span>
              <button @click="suma(item.id)" class="flecha">▶</button>
              <button @click="agregar(item)" class="boton_agregar">AÑADIR</button>
            </div>
            <div v-if="auth.user?.role === 'CLIENT'" class="w-full flex justify-center mt-[20px] bg-red-500 rounded-md">
              <button @click="eliminarMenuItem(item.id)" class="px-[60px] py-[5px]">Eliminar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
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
  height: 250px;
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
