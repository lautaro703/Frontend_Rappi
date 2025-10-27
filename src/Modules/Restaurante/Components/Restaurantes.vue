<template>
 <div>
  <h1>Restaurante</h1></br>
   <label class="name">NOMBRE</label></br>
   <label class="description">Restaurante moderno y acogedor que ofrece una amplia variedad de platos elaborados con ingredientes frescos. Ideal para disfrutar en familia o con amigos, con un ambiente cálido, buena atención y sabores únicos que destacan en cada comida.</label></br>
   <label class="address">Av.General Savio 703</label></br>
   <label class="rating">Calificación: 4.5</label></br>
   <label class="isOpen">abierto</label></br>
 </div>
  <div class="carta">
    <h2>Carta</h2></br>
     <div class="opcion">
       <h3>Comidas</h3>
        <div class="seleccionar">  
         <label>Milanesa con pure</label></br>
         </br><label> puede ser de carne o pollo</label>
         <button @click="suma">+</button>
         <label>Cantidad:{{cantidad}}</label>
         <button @click="resta">-</button>
         <button @click="agregar">agregar</button>
        </div>
     </div>
    <div class="opcion">
      <h3>Bebidas</h3>
        <div class="seleccionar">  
         <label>Fernet</label>
        </div>
    </div>
    <div class="opcion">
       <h3>Postres</h3>
        <div class="seleccionar">  
         <label>Flan</label>
        </div>
    </div>
</div>
</template>

<script setup>
import { ref } from 'vue'

const cantidad = ref(0);

async function suma() {
    cantidad.value++
}
async function resta() {
    if(cantidad.value > 0)
    {
        cantidad.value--
    }
}

async function agregar() {
    alert(`Agregado al pedido ${cantidad.value}`)
    cantidad.value=0;
}

</script>

<style>
.opcion{
    background-color:rgb(255, 255, 255);
    margin: 10px;
    border-radius: 10px;
    height: auto;
    width: auto;
}
.carta{
    background-color: rgb(185, 185, 185);
    margin: 10px;
    border-radius: 10px;
    height: auto;
    width: auto;
}
.seleccionar{
    background-color: aqua;
    margin: 10px;
    border-radius: 10px;
    width: auto;
    height: 35px;
   
}
</style>