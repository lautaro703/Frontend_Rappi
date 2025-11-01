<template>
 <div class="PagPrincipal">
 <div class="contenedorArriba">
  <img src="../assets/WhatsApp Image 2025-10-31 at 9.37.54 PM.jpeg" alt="Rappi Logo" class="logo"/>
  <label class="titulo">Bienvenido a Rappi</label>
  <br/>
  <input type="text" placeholder="¿Que estas pensando en buscar?" class="buscador"/>
  <select class="filtros">
    <option value="restaurantes">Restaurantes</option>
    <option value="comidas">comidas</option>
    <option value="categorias">Categorías</option>
  </select>
 </div>
 <router-link to="/pedidos">
 <button>
  Pedidos
 </button>
 </router-link>
  <div class="contenedores" v-for="value in 1">
      <router-link to="/restaurantes">
      <button class="Boton">
       <img src="../assets/WhatsApp Image 2025-10-31 at 9.37.54 PM.jpeg" alt="Logo del restaurante" class="imagenDeOpcion"/><br/>
        <label>Nombre</label><br/>
        <label>Dirección</label><br/>
        <label>Clasificación</label><br/>
      </button>
     </router-link>
    </div>
   </div>
</template>

<style>
.PagPrincipal{
    background-color: rgb(255, 255, 255);
}
.imagenDeOpcion{
    border-radius: 10px;
    width: 200px;
    height: 100px;
}
.OpcionBoton{
    width: 300px;
    height: 300px;
    border-radius: 10px;
    text-align: center;
 }
.Boton{
    width: 300px;
    height: 200px;
    background-color: rgb(255, 234, 234);
    position: center;
    margin: 30px;
    border-radius: 20px;
 }
.contenedorArriba{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom:100px;
 }
.titulo{
    font-size: 50px;
    font-weight: bold;
    color: gray;
 }
.buscador{
    width: 300px;
    height: 30px;
    border-radius: 5px;
    margin: 15px;
    font-weight: center;
 }
.filtros{
    width: 150px;
    height: 35px;
    border-radius: 5px;
    margin: 15px;
 }
 .options{
    width: 100px;
    height: 100px;
 }
 .logo{
    width: 200px;
    height: 200px;
    margin: 15px;
    border-radius: 50px;
 }
 .contenedores{
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
 }
 .OpcionesDeRestaurantes{
    align-items: center;
 }
</style>
