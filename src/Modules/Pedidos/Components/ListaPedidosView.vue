<script setup>
//import CartComponent from '@/components/CartComponent.vue';
import SidebarComponent from '@/components/SidebarComponent.vue'

//document.addEventListener("DOMContentLoaded", () => {
//  const estado = document.getElementById("estado").textContent.trim();
//  const tieneResenaTexto = document.getElementById("resena").textContent.trim();
//
//  // Detectar si ya tiene reseña (puede decir "Sí", "Sí (4 estrellas)", etc.)
//  const tieneResena = tieneResenaTexto !== "No";
//
//  const seccionCalificacion = document.getElementById("seccion-calificacion");
//
//  // Mostrar solo si está "Entregado" y NO tiene reseña
//  if (estado === "Entregado" && !tieneResena) {
//    seccionCalificacion.classList.remove("hidden");
//  } else {
//    seccionCalificacion.classList.add("hidden");
//  }
//
//  // === Sistema de estrellas ===
//  const stars = document.querySelectorAll(".star");
//  const calificacionTexto = document.getElementById("calificacion-texto");
//  let calificacionSeleccionada = 0;
//
//  stars.forEach(star => {
//    star.addEventListener("mouseover", () => {
//      const value = parseInt(star.dataset.value);
//      resaltarEstrellas(value);
//    });
//
//    star.addEventListener("click", () => {
//      calificacionSeleccionada = parseInt(star.dataset.value);
//      calificacionTexto.textContent = calificacionSeleccionada;
//      resaltarEstrellas(calificacionSeleccionada, true);
//    });
//
//    star.addEventListener("mouseout", () => {
//      resaltarEstrellas(calificacionSeleccionada, true);
//    });
//  });
//
//  function resaltarEstrellas(hasta, permanente = false) {
//    stars.forEach(s => {
//      const value = parseInt(s.dataset.value);
//      if (permanente) {
//        s.classList.toggle("selected", value <= hasta);
//      } else {
//        s.classList.toggle("hovered", value <= hasta);
//      }
//    });
//  }
//
//  // === Enviar calificación ===
//  document.getElementById("enviar-calificacion").addEventListener("click", () => {
//    if (calificacionSeleccionada === 0) {
//      alert("Por favor, selecciona una calificación con las estrellas.");
//      return;
//    }
//
//    const comentario = document.getElementById("comentario").value.trim();
//
//    // Simular envío
//    console.log("Calificación enviada:", {
//      estrellas: calificacionSeleccionada,
//      comentario: comentario || "Sin comentario"
//    });
//
//    // Actualizar UI para indicar que ya tiene reseña
//    document.getElementById("resena").textContent = `Sí (${calificacionSeleccionada} estrellas)`;
//
//    // Ocultar formulario y mostrar éxito
//    seccionCalificacion.classList.add("hidden");
//    document.getElementById("mensaje-exito").classList.remove("hidden");
//  });
//});

</script>

<template>
  <!-- <CartComponent /> -->
  <main class="bg-[#131318] h-screen w-screen flex">
    <SidebarComponent class="" />
    <div class="order-card">
      <div class="order-header">
        <div class="col">Restaurante</div>
        <div class="col">Seguimiento</div>
        <div class="col">Precio</div>
        <div class="col">Estado</div>
      </div>
      <div class="order-row">
        <p class="col">La Trattoria di Luc</p>
        <p class="col tracking">34597862478</p>
        <p class="col price">$10.800</p>
        <div class="col status">
          <span class="status-text">En Camino</span>
          <div class="flex gap-4">
            <button class="btn details">DETALLES</button>
            <title>Sistema de Calificación</title>

            <button class="btn cancel">CANCELAR</button>
          </div>
        </div>
      </div>
    </div>

  <!--<div class="container-pedido">
    <h1>Estado del Pedido</h1>
    <span id="estado">Pendiente</span>


     Simulación de datos del pedido
    <div id="pedido-info">
      <p><strong>ID:</strong> <span id="pedido-id">12345</span></p>
      <p><strong>Estado:</strong> <span id="estado">Entregado</span></p>

      <span id="resena">Sí</span>

       Sección de calificación (se muestra solo si cumple condiciones)
      <div id="seccion-calificacion" class="hidden">
        <h2>¡Califica tu experiencia!</h2>

        <div class="ratingdetails">
          <span class="star" data-value="5">★</span>
          <span class="star" data-value="4">★</span>
          <span class="star" data-value="3">★</span>
          <span class="star" data-value="2">★</span>
          <span class="star" data-value="1">★</span>
        </div>
        <p>Calificación: <span id="calificacion-texto">0</span> estrellas</p>

        <textarea id="comentario" placeholder="Escribe tu comentario (opcional)" rows="4"></textarea>
        <button id="enviar-calificacion">Enviar Calificación</button>
      </div>

      <div id="mensaje-exito" class="hidden success">
        ¡Gracias por tu calificación!
      </div>
    </div>
  </div>-->
  </main>
</template>



<style>
.order-card {
  width: 100%;
  margin: 1rem;
  background-color: #1b1b22;
  border-radius: 12px;
  overflow: auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.order-header,
.order-row {
  display: grid;
  grid-template-columns: 1fr 0.5fr 1fr 1fr;
  padding: 0.75rem 1rem;
  font-size: 0.9rem;
  align-items: center;
}

.order-header {
  background-color: #1b1b22;
  color: #aaa;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.8rem;
}

.order-row {
  background-color: #1b1b22;
  color: #fff;
}

.tracking {
  font-family: monospace;
  font-size: 0.85rem;
}

.price {
  color: #4ade80;
  font-weight: bold;
}

.status {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.status-text {
  background-color: #4ade80;
  color: #000;
  padding: 0.2rem 0.5rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: bold;
}

.btn {
  background-color: #e0245e;
  color: white;
  border: none;
  padding: 0.4rem 0.8rem;
  border-radius: 1.5rem;
  font-size: 0.75rem;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s;
}

.btn:hover {
  background-color: #c51d4e;
}

.btn.cancel {
  background-color: #333;
}

.btn.cancel:hover {
  background-color: #444;
}

.container-pedido {
  max-width: 600px;
  margin: 40px auto;
  top: 30%;
  left:50%;
  position:absolute;
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  color: #2c3e50;
}

#pedido-info {
  background: #ecf0f1;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 25px;
  font-size: 1.1em;
}

.ratingdetails {
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 20px 0;
}

.star {
  font-size: 2.5rem;
  color: #ddd;
  cursor: pointer;
  transition: color 0.2s, transform 0.1s;
}

.star:hover,
.star.selected,
.star.hovered {
  color: #f1c40f;
  transform: scale(1.1);
}

textarea {
  width: 100%;
  padding: 12px;
  margin: 15px 0;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1em;
  resize: vertical;
}

button {
  background: #3498db;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 1.1em;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;
}

button:hover {
  background: #2980b9;
}

.hidden {
  display: none;
}

.success {
  margin-top: 20px;
  padding: 15px;
  background: #d5f5e3;
  color: #27ae60;
  border-radius: 8px;
  text-align: center;
  font-weight: bold;
}
</style>
