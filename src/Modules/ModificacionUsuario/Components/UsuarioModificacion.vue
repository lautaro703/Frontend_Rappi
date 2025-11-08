<template>
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
         <div class="opcion">
          <div></div>
           <div class="info">
            <h1><strong>{{ usuario.name }}</strong></h1>
             <h2>{{ usuario.email }}</h2>
             <h2>{{ usuario.phone }}</h2><br/>
             <h3>{{ usuario.addresses }}</h3>
               <div>
                <button class="boton" @click="abrir=!abrir">Agregar Direccion</button>
               </div>
              </div>
             </div>
            </div>
            <Vistamodificar v-if="abrir">  </Vistamodificar>
           </div>
         </div>
        </div>
      </div>
  
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router'; 
import axios from 'axios';
import SidebarComponent from '@/components/SidebarComponent.vue';
import Vistamodificar from '@/components/Vistamodificar.vue';

const usuario = ref({})
const abrir= ref((false))

onMounted(async () => {
  try{
   const respuesta = await api.get(`/users/${id}`)

   usuario.value = respuesta.data
  }
  catch(error){
   console.log(error)
  }
})



</script>

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
