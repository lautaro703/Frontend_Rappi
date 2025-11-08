<script setup></script>

<template>

  <div class="h-screen w-screen bg-gray-950 opacity-50 absolute z-1" />

  <div  class=" flex justify-center">

  <div class="carrito-container">
    <h1 class="title">Carrito</h1>

    <div class="item-card">
      <div class="item-header">
        <h3>La Trattoria di Luc</h3>
        <div class="quantity">
          <button class="qty-btn"></button>
          <span class="qty-number">1</span>
          <button class="qty-btn"></button>
        </div>
      </div>
      <p class="price">$10.800</p>
      <p class="dish">Spaghetti a la Bolognesa</p>
      <p class="dish">Tallarin con Salsa de Hongos</p>
      <button class="btn-delete">ELIMINAR</button>
    </div>

    <div class="item-card">
      <div class="item-header">
        <h3>La Trattoria di Luc</h3>
        <div class="quantity">
          <button class="qty-btn"></button>
          <span class="qty-number">1</span>
          <button class="qty-btn"></button>
        </div>
      </div>
      <p class="price">$10.800</p>
      <p class="dish">Spaghetti a la Bolognesa</p>
      <p class="dish">Tallarin con Salsa de Hongos</p>
      <button class="btn-delete">ELIMINAR</button>
    </div>

    <div class="form-section">
      <input type="text" placeholder="Código Descuento" class="input-field" />
      <div class="select-wrapper">
        <select class="select-field">
          <option>Método de Pago</option>
        </select>
      </div>
      <div class="select-wrapper">
        <select class="select-field">
          <option>Dirección</option>
        </select>
      </div>
    </div>

    <div class="footer-total">
      <p class="total">Total: <strong>$21.600</strong></p>
      <button class="btn-buy">COMPRAR</button>
    </div>
  </div>
  </div>

</template>

<style scoped>
.carrito-container {
  z-index: 2;
  position: absolute;
  width: 30%;
  background-color: #1a1a1a;
  color: #fff;
  top: 5%;
  max-height: 900px;
  padding: 1.5rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.title {
  text-align: center;
  font-size: 1.8rem;
  margin: 0 0 1rem 0;
  font-weight: 600;
}

.item-card {
  background-color: #252525;
  border-radius: 16px;
  padding: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.item-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.item-header h3 {
  font-size: 1rem;
  margin: 0;
  color: #fff;
}

.quantity {
  display: flex;
  align-items: center;
  background-color: #333;
  border-radius: 8px;
  overflow: hidden;
}

.qty-btn {
  background-color: #e0245e;
  color: white;
  border: none;
  width: 28px;
  height: 28px;
  font-size: 0.9rem;
  cursor: pointer;
}

.qty-number {
  background-color: #1a1a1a;
  color: white;
  padding: 0 12px;
  font-weight: bold;
  min-width: 36px;
  text-align: center;
  line-height: 28px;
}

.price {
  color: #4ade80;
  font-weight: bold;
  margin: 0.3rem 0;
  font-size: 1.1rem;
}

.dish {
  margin: 0.2rem 0;
  font-size: 0.9rem;
  color: #ccc;
}

.btn-delete {
  background-color: #e0245e;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.8rem;
  font-weight: bold;
  cursor: pointer;
  margin-top: 0.5rem;
  width: 100%;
}

.btn-delete:hover {
  background-color: #c51d4e;
}

.form-section {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-top: 1rem;
}

.input-field,
.select-field {
  background-color: #2c2c2c;
  border: 1px solid #444;
  color: #aaa;
  padding: 0.9rem 1rem;
  border-radius: 12px;
  font-size: 1rem;
}

.input-field::placeholder {
  color: #666;
}

.select-wrapper {
  position: relative;
}

.select-field {
  appearance: none;
  width: 100%;
}

.select-wrapper::after {
  content: '▼';
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #e0245e;
  pointer-events: none;
  font-size: 0.8rem;
}

.footer-total {
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.total {
  font-size: 1.3rem;
  margin: 0;
}

.total strong {
  color: #4ade80;
}

.btn-buy {
  background-color: #e0245e;
  color: white;
  border: none;
  padding: 0.9rem 2rem;
  border-radius: 2rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  min-width: 140px;
}

.btn-buy:hover {
  background-color: #c51d4e;
}
</style>
