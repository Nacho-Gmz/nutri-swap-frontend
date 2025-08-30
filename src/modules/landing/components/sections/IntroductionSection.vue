<script setup lang="ts">
import SimpleCard from "@/modules/common/components/SimpleCard.vue";
import router from "@/router";
</script>

<template>
  <section>
    <div class="relative flex h-screen flex-col items-center justify-center gap-8">
      <div class="inline-block w-fit transition duration-500 ease-in-out hover:scale-105">
        <span class="block rounded-xl">
          <h1 class="glow glow-green text-6xl font-bold text-green-100 md:text-8xl">NutriSwap</h1>
        </span>
      </div>
      <simple-card class="mx-2 hover:scale-105 md:mx-0">
        <h1 class="text-2xl font-bold text-green-700 dark:text-green-300">
          ¡Intercambiar porciones se volvió divertido y eficaz!
        </h1>
      </simple-card>
      <div class="flex items-center justify-center gap-4">
        <button
          class="button w-40 duration-300 ease-in-out hover:scale-105 md:w-50"
          @click="router.push('/login')"
        >
          Ingresa
        </button>
        <button
          class="button w-40 duration-300 ease-in-out hover:scale-105 md:w-50"
          @click="router.push('/register')"
        >
          Regístrate
        </button>
      </div>
      <div class="absolute bottom-0 animate-bounce">
        <i class="bx bx-chevron-down text-8xl text-green-700 dark:text-green-300"></i>
      </div>
    </div>
  </section>
</template>
