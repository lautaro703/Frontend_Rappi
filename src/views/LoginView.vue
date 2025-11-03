<script></script>

<template>
  <body class="flex justify-center items-center w-screen h-screen">
    <div
      class="w-[762px] h-[610px] bg-[#1B1B22] drop-shadow-[0_10px_10px_rgba(44,44,52,100)] rounded-2xl absolute"
    />
    <div class="z-0 flex flex-col justify-center items-center gap-[60px]">
      <div class="flex justify-center flex-col items-center gap-[70px]">
        <h1 class="text-white font-lora font-bold text-[64px]">Log In</h1>
        <div class="flex flex-col gap-5">
          <input
            class="bg-[#2C2C34] rounded-md w-[600px] h-[70px] opacity-50 text-white pl-[30px] text-[30px] font-lora font-normal"
            placeholder="Email"
          />
          <input
            class="bg-[#2C2C34] rounded-md w-[600px] h-[70px] opacity-50 text-white pl-[30px] text-[30px] font-lora font-normal"
            type="password"
            placeholder="Password"
          />
        </div>
      </div>
      <button class="bg-[#FF7043] w-[330px] h-20 rounded-xl">
        <p class="font-lora text-[36px] text-white font-medium">Log In</p>
      </button>
      <div class="flex gap-1.5">
        <p class="text-[#A0A0A5] font-lora font-semibold text-lg opacity-50">
          Do you not have a Account?
        </p>
        <a
          href="register"
          class="text-[#A0A0A5] font-lora font-semibold text-lg opacity-50 underline"
          >Register Now!</a
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
