<script setup>
import MenuCarta from '@/components/MenuCarta.vue';

</script>
<template>

  <div class="pedidos">
    <h1>Pedidos</h1>
      <header class="header">
        <div class="">
          <div class=""></div>
          <span class="">Rappi</span>
        </div>
      </header>
  </div>

    <main class="main">
      <div class="rating">
        <h3>Puntuación</h3>
        <div class="stars">
          <span v-for="n in 5" :key="n" class="star">★</span>
          <span v-for="n in 5" :key="n + 5" class="star">★</span>
          <span v-for="n in 5" :key="n + 10" class="star">★</span>
          <span v-for="n in 5" :key="n + 15" class="star">★</span>
          <span v-for="n in 5" :key="n + 20" class="star">★</span>
        </div>
      </div>

      <div class="categories">
        <h3>Categoría</h3>
        <ul>
          <li>Entradas</li>
          <li>Cenas</li>
          <li>Postres</li>
          <li>Almuerzo</li>
        </ul>
      </div>

      <div class="order-card">
      <div class="order-header">
        <div class="col">Restaurante</div>
        <div class="col">Seguimiento</div>
        <div class="col">Precio</div>
        <div class="col">Estado</div>
      </div>
      <div class="order-row">
        <div class="col">La Trattoria di Luc</div>
        <div class="col tracking">34597862478</div>
        <div class="col price">$10.800</div>
        <div class="col status">
          <span class="status-text">En Camino</span>
          <button class="btn details">DETALLES</button>
          <button class="btn cancel">CANCELAR</button>
        </div>
      </div>
    </div>

    <footer class="footer">
      <button class="footer-btn active">
        <span class="icon">🟢</span> Yuver
      </button>
      <button class="footer-btn">
        <span class="icon">🍴</span>
      </button>
      <button class="footer-btn">
        <span class="icon">📞</span>
      </button>
    </footer>
    <MenuCarta />
</main>
</template>


<style scoped>

.app-container {
  background-color: #1a1a1a;
  color: #fff;
  min-height: 100vh;
  font-family: 'Segoe UI', sans-serif;
  display: flex;
  flex-direction: column;
}

.header {
  background: linear-gradient(to bottom, #2c2c2c, #1a1a1a);
  padding: 1rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #333;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo-icon {
  width: 32px;
  height: 32px;
  background-color: #e0245e;
  border-radius: 6px;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: bold;
}

.main {
  padding: 1.5rem;
  flex-grow: 1;
}

.rating h3,
.categories h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1rem;
  color: #ccc;
}

.stars {
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
  margin-bottom: 1.5rem;
}

.star {
  color: #f5c842;
  font-size: 1.3rem;
}

.categories ul {
  list-style: none;
  padding: 0;
  margin: 0;
  color: #aaa;
  font-size: 0.95rem;
}

.categories li {
  margin-bottom: 0.5rem;
}

.order-card {
  margin: 1rem;
  background-color: #252525;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.order-header,
.order-row {
  display: grid;
  grid-template-columns: 2fr 1.5fr 1fr 1.5fr;
  padding: 0.75rem 1rem;
  font-size: 0.9rem;
  align-items: center;
}

.order-header {
  background-color: #2c2c2c;
  color: #aaa;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.8rem;
}

.order-row {
  background-color: #1f1f1f;
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
  gap: 0.5rem;
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

.footer {
  display: flex;
  justify-content: space-around;
  padding: 1rem;
  background-color: #1a1a1a;
  border-top: 1px solid #333;
}

.footer-btn {
  background: none;
  border: none;
  color: #666;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
}

.footer-btn.active {
  color: #4ade80;
}

.icon {
  font-size: 1.2rem;
}

</style>
