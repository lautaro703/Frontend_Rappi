<script setup>
import SidebarComponent from '@/components/SidebarComponent.vue'
</script>

<template>
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
            <button class="btn cancel">CANCELAR</button>
          </div>
        </div>
      </div>
    </div>
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
</style>
