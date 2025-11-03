<script setup>
import SidebarComponent from '@/components/SidebarComponent.vue'
import { ref } from 'vue'

const cantidad = ref(0)

async function suma() {
  cantidad.value++
}
async function resta() {
  if (cantidad.value > 0) {
    cantidad.value--
  }
}

async function agregar() {
  alert(`Agregado al pedido ${cantidad.value}`)
  cantidad.value = 0
}
</script>

<template>
  <div class="flex">
    <SidebarComponent />
    <div class="w-screen h-screen overflow-auto">
      <div class="relative w-full max-w-[1460px] h-[250px] mt-5 rounded-2xl">
        <div class="containerRestaurante">
          <div class="contenido">
            <h1 class="titulo">La Trattoria di Luc</h1>
            <p class="subtitulo">Sabores que iluminan el alma</p>
            <p class="categoria">Categoría: Cocina Italiana Tradicional</p>
          </div>
        </div>
      </div>

      <div class="flex flex-wrap w-full justify-between gap-[30px] max-w-[1460px] mt-8">
        <div class="opcion" v-for="contador in 1" :key="contador">
          <div class="w-full h-[135px] bg-[#2C2C34] rounded-2xl mb-4" />

          <div class="info">
            <h3>Spaghetti a la Bolognesa</h3>
            <p>
              Clásica pasta italiana con salsa de carne cocida lentamente en tomate, cebolla y
              especias.
            </p>

            <h3>Tallarines con Salsa de Hongos</h3>
            <p>Tallarines al huevo con salsa de champiñones salteados en manteca y vino blanco.</p>

            <div class="precio">
              <h2>$10.800</h2>
              <span>1120 kcal</span>
              <span class="disponible">Available</span>
            </div>
          </div>

          <div class="acciones">
            <button @click="resta" class="flecha">◀</button>
            <span class="cantidad">{{ cantidad }}</span>
            <button @click="suma" class="flecha">▶</button>
            <button @click="agregar" class="boton_agregar">AÑADIR</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.containerRestaurante {
  position: absolute;
  width: 100%;
  max-width: 1460px;
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
