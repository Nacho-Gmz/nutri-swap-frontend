<script setup lang="ts">
import ThemeToggler from "@/modules/common/components/ThemeToggler.vue";
</script>

<template>
  <header
    class="sticky top-0 z-99999 flex w-full border-b border-gray-200 bg-white/50 backdrop-blur-3xl lg:border-b dark:border-gray-600/50 dark:bg-gray-900/10"
  >
    <div class="flex grow flex-col items-center justify-between lg:flex-row lg:px-6">
      <div
        class="flex w-full items-center justify-between gap-2 px-3 py-3 sm:gap-4 lg:justify-normal lg:border-b-0 lg:px-0 lg:py-4"
      >
        <h1 class="block text-lg font-bold text-sky-600 dark:text-sky-300">NutriSwap</h1>
      </div>

      <div
        class="flex w-full flex-wrap items-center justify-between gap-4 px-2 py-4 shadow-md lg:justify-end lg:px-0 lg:shadow-none"
      >
        <div class="flex grow gap-2">
          <router-link
            class="inline-flex w-1/4 items-center justify-center gap-2 rounded-lg border-2 border-white/50 p-2 text-lg font-medium text-gray-700 shadow-md backdrop-blur-3xl transition hover:bg-white/30 hover:text-green-700 disabled:bg-sky-300 dark:border-black/20 dark:text-gray-200 dark:hover:bg-black/20 hover:dark:text-green-300"
            to="/"
            >Inicio</router-link
          >
          <router-link
            class="inline-flex w-1/4 items-center justify-center gap-2 rounded-lg border-2 border-white/50 p-2 text-lg font-medium text-gray-700 shadow-md backdrop-blur-3xl transition hover:bg-white/30 hover:text-green-700 disabled:bg-sky-300 dark:border-black/20 dark:text-gray-200 dark:hover:bg-black/20 hover:dark:text-green-300"
            to="/about"
            >Conócenos</router-link
          >
          <router-link
            class="inline-flex w-1/4 items-center justify-center gap-2 rounded-lg border-2 border-white/50 p-2 text-lg font-medium text-gray-700 shadow-md backdrop-blur-3xl transition hover:bg-white/30 hover:text-green-700 disabled:bg-sky-300 dark:border-black/20 dark:text-gray-200 dark:hover:bg-black/20 hover:dark:text-green-300"
            to="/swapper"
            >Intercambia</router-link
          >
          <router-link
            class="inline-flex w-1/4 items-center justify-center gap-2 rounded-lg border-2 border-white/50 p-2 text-lg font-medium text-gray-700 shadow-md backdrop-blur-3xl transition hover:bg-white/30 hover:text-green-700 disabled:bg-sky-300 dark:border-black/20 dark:text-gray-200 dark:hover:bg-black/20 hover:dark:text-green-300"
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
