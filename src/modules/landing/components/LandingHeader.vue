<script setup lang="ts">
import ThemeToggler from "@/modules/common/components/ThemeToggler.vue";
</script>

<template>
  <header
    class="sticky top-0 z-99999 flex w-full border-b border-gray-200 bg-white/50 backdrop-blur-3xl lg:border-b dark:border-gray-600/50 dark:bg-gray-900/10"
  >
    <div class="flex grow flex-col items-center justify-between lg:flex-row lg:px-6">
      <div
        class="flex w-full items-center justify-between gap-2 border-b border-gray-200 px-3 py-3 sm:gap-4 lg:justify-normal lg:border-b-0 lg:px-0 lg:py-4 dark:border-gray-800"
      >
        <h1 class="block text-lg font-bold text-sky-600 dark:text-sky-300">NutriSwap</h1>
      </div>

      <div
        class="flex w-full items-center justify-between gap-4 px-5 py-4 shadow-md lg:justify-end lg:px-0 lg:shadow-none"
      >
        <div class="flex gap-2">
          <router-link
            class="text-lg font-medium text-gray-800 hover:text-green-700 hover:underline dark:text-white/90 hover:dark:text-green-300"
            to="/login"
            >Conoce</router-link
          >
          <router-link
            class="text-lg font-medium text-gray-800 hover:text-green-700 hover:underline dark:text-white/90 hover:dark:text-green-300"
            to="/login"
            >Aprende</router-link
          >
          <router-link
            class="text-lg font-medium text-gray-800 hover:text-green-700 hover:underline dark:text-white/90 hover:dark:text-green-300"
            to="/login"
            >Accede</router-link
          >
        </div>
        <div class="2xsm:gap-3 flex items-center gap-2">
          <ThemeToggler />
        </div>
      </div>
    </div>
  </header>
</template>
