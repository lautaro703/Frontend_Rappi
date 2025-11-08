<script setup>


import { useAuthStore } from '@/store/auth'
import { useRouter } from 'vue-router'
import CartComponent from './CartComponent.vue'
import { ref } from 'vue'

const cartAppared = ref(false)

const auth = useAuthStore()
const router = useRouter()

const logout = () => {
  auth.logout()
  router.push('/')
}


</script>

<template>
  <CartComponent v-if="cartAppared"/>
  <main class="sidebar">
    <div class="sidebar-content flex items-start">
      <div class="flex gap-[25px] justify-center items-center">
        <img src="/public/Logo.jpeg" class="w-16 h-16 bg-[#8B0000] rounded-md" />
        <p class="font-lora font-bold text-5xl text-white">Rappi</p>
      </div>

      <div class="rating">
        <h2 class="text-white font-lora font-bold text-2xl">Puntuacion</h2>
        <div class="star-rating" id="starRating">
          <span class="star" data-value="1">★</span>
          <span class="star" data-value="2">★</span>
          <span class="star" data-value="3">★</span>
          <span class="star" data-value="4">★</span>
          <span class="star" data-value="5">★</span>

        </div>
        <p id="ratingValue" class="rating-value font-lora">Selecciona una puntuación</p>
      </div>

      <div class="category text-white">
        <h3 class="font-lora">Vistas</h3>
          <div class="w-full h-auto flex flex-wrap gap-4">
            <a class="font-lora w-full bg-[#2c2c34] text-[16px] h-10 text-center rounded-md" href="/pedidos">Pedidos</a>
            <a class="font-lora w-full bg-[#2c2c34] text-[16px] h-10 text-center rounded-md" href="/restaurantes">Restaurantes</a>
            <a class="font-lora w-full bg-[#2c2c34] text-[16px] h-10 text-center rounded-md" href="/menus">Menus</a>
          </div>
      </div>
    </div>

    <div class="profile">
      <div class="status"></div>
      <div class="info">
        <div class="name">{{ auth.user?.name }}</div>
      </div>
      <div class="flex gap-3">
          <img class="w-6 h-6" @click="cartAppared = !cartAppared" src="/public/cart.png" />
          <img class="w-6 h-6" @click="logout" src="/public//LogOut.png" />
      </div>
    </div>
  </main>
</template>

<style>
.sidebar {
  width: 400px;
  background-color: #1b1b22;
  border-radius: 15px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  z-index: 0;
  top: 0;
  bottom: 0;
}

.sidebar-content {
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 15px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 26px;
  font-weight: bold;
}

.logo .icon {
  width: 35px;
  height: 35px;
  background-color: #c00;
  border-radius: 8px;
}

h2 {
  display: block;
  font-size: 25px;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  unicode-bidi: isolate;
}
.rating {
  margin-top: -10px;
  text-align: left;
}

.rating h3 {
  margin-bottom: 8px;
}

.star-rating {
  display: flex;
  flex-direction: row;
  gap: 5px;
  cursor: pointer;
}

.star-rating .star {
  font-size: 30px;
  color: #fad921;
  transition:
    color 0.2s,
    transform 0.1s;
}

.star-rating .star:hover {
  transform: scale(1.2);
}

.star-rating .star.active,
.star-rating .star.hovered {
  color: gold;
}

.rating-value {
  margin-top: 8px;
  font-size: 14px;
  color: #bbb;
  font-style: italic;
}

.category h3 {
  font-size: 25px;
  margin-bottom: 10px;
}

.category li {
  color: #aaa;
  font-size: 17px;
  margin: 6px 0;
  cursor: pointer;
  transition: color 0.2s;
}

.category li:hover {
  color: #fff;
}

.profile {
  background-color: #2c2c34;
  padding: 12px 15px;
  margin: 25px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.profile .status {
  width: 18px;
  height: 18px;
  background-color: #00ff00;
  border-radius: 50%;
}

.profile .info {
  flex: 1;
  margin-left: 10px;
}

.profile .name {
  font-size: 14px;
  color: #fff;
}

.profile .role {
  font-size: 12px;
  color: #aaa;
}

.profile .cart {
  font-size: 18px;
  color: #e13;
}
</style>
