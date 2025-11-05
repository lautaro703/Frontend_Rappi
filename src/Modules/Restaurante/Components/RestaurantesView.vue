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
    <div class="h-screen w-screen overflow-auto">
      <div class="search-bar">
        <span class="icon">🔍</span>
        <input id="search-input" type="text" placeholder="Buscar restaurante..." />
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
</style>
