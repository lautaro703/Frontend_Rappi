<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const form = ref({
  name: '',
  email: '',
  password: '',
  role: 'CLIENT',
  phone: '',
})
const loading = ref(false)
const error = ref('')
const router = useRouter()


const EnviarUser = async () => {
  error.value = ''
  loading.value = true
  try {
    const {data} = await axios.post('http://localhost:3000/api/auth/register', form.value)
    if (data.access_token) {
      localStorage.setItem('token', data.access_token)
      router.push('/')
    } else {
      throw new Error('Registration failed')
    }

  } catch (err) {
    error.value = err.response?.data?.message || 'An error occurred during registration'
  } finally {
    loading.value = false
  }
}

</script>

<template>
  <body class="flex justify-center items-center w-screen h-screen">
    <div
      class="w-[762px] h-[772px] bg-[#1B1B22] drop-shadow-[0_10px_10px_rgba(44,44,52,100)] rounded-2xl absolute"
    />
    <div class="z-0 flex flex-col justify-center items-center gap-[60px]">
      <div class="flex justify-center flex-col items-center gap-[70px]">
        <h1 class="text-white font-lora font-bold text-[64px]">Sign Up</h1>
        <form @submit.prevent="EnviarUser"
        class=" flex flex-col items-center gap-12">
          <div class="flex flex-col gap-5">
            <input
              v-model="form.name"
              class="bg-[#2C2C34] rounded-md w-[600px] h-[70px] opacity-50 text-white pl-[30px] text-[30px] font-lora font-normal"
              placeholder="Username"
              type="text"
              required
            />

            <input
              v-model="form.password"
              class="bg-[#2C2C34] rounded-md w-[600px] h-[70px] opacity-50 text-white pl-[30px] text-[30px] font-lora font-normal"
              type="password"
              placeholder="Password"
              required
              minlength="6"
            />

            <input
              v-model="form.email"
              class="bg-[#2C2C34] rounded-md w-[600px] h-[70px] opacity-50 text-white pl-[30px] text-[30px] font-lora font-normal"
              placeholder="Email"
              type="email"
              required
            />

            <select
            v-model="form.role"
            required
            class="bg-[#2C2C34] rounded-md w-[600px] h-[70px] opacity-50 text-white pl-[30px] text-[30px] font-lora font-normal"
            >
              <option class="bg-[#2C2C34] rounded-md w-[600px] h-[70px] opacity-50 text-white pl-[30px] text-[30px] font-lora font-normal"
              value="CLIENT">Client</option>
              <option class="bg-[#2C2C34] rounded-md w-[600px] h-[70px] opacity-50 text-white pl-[30px] text-[30px] font-lora font-normal"
              value="VENDOR">Vendor</option>
              <option class="bg-[#2C2C34] rounded-md w-[600px] h-[70px] opacity-50 text-white pl-[30px] text-[30px] font-lora font-normal"
              value="DRIVER">Driver</option>
            </select>

            <input
              v-model="form.phone"
              class="bg-[#2C2C34] rounded-md w-[600px] h-[70px] opacity-50 text-white pl-[30px] text-[30px] font-lora font-normal"
              type="tel"
              placeholder="+54 9 11 1234-5478"
              pattern="^\+?\d{1,3}?[\s-]?\(?\d+\)?[\s-]?\d{3,4}[\s-]?\d{3,4}$"
              required
            />

          </div>
          <button class="bg-[#FF7043] w-[330px] h-20 rounded-xl" type="submit">
            <p class="font-lora text-[36px] text-white font-medium">Sign Up</p>
          </button>
        </form>
        </div>
        <div class="flex gap-1.5">
        <p class="text-[#A0A0A5] font-lora font-semibold text-lg opacity-50">
          Do you have a Account?
        </p>
        <a href="/" class="text-[#A0A0A5] font-lora font-semibold text-lg opacity-50 underline"
          >Log In Now!</a
        >
      </div>
    </div>
  </body>
</template>

<style>
body {
  background: linear-gradient(-45deg, #212128, #1b1b22, #0c0b14, #1c1c20);
  background-size: 400% 400%;
  -webkit-animation: gradient 15s ease infinite;
  animation: gradient 15s ease infinite;
}

@-webkit-keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
