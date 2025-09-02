<template>
  <div
    class="relative z-1 flex min-h-screen flex-col items-center justify-center overflow-hidden p-6"
  >
    <div
      class="mx-auto w-full max-w-[242px] rounded-2xl border-gray-100/50 p-5 text-center shadow-md backdrop-blur-3xl sm:max-w-[472px]"
    >
      <h1 class="text-xl font-bold text-gray-800 xl:text-2xl dark:text-white/90">
        ERROR <b class="text-red-400">404</b>
      </h1>

      <p class="my-6 text-base text-gray-700 sm:text-lg dark:text-gray-300">
        No encontramos la página que estas buscando.
      </p>

      <router-link
        to="/"
        replace
        class="inline-flex items-center justify-center rounded-lg border border-green-300 bg-white/30 px-5 py-3.5 text-sm font-medium text-sky-700 shadow-xs hover:bg-green-50/70 hover:text-sky-800 dark:border-green-700/50 dark:bg-green-800/30 dark:text-sky-400 dark:hover:bg-green-800/50 dark:hover:text-sky-200"
      >
        Regresa al inicio
      </router-link>
    </div>
    <!-- Footer -->
    <p
      class="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-2xl border-gray-100/50 p-5 text-center text-sm text-sky-700 backdrop-blur-3xl dark:text-sky-300"
    >
      &copy; {{ currentYear }} - NutriSwap
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const currentYear = ref(new Date().getFullYear());

// Optional: Update the year when the component mounts
// This is useful if your app stays open across year boundaries
onMounted(() => {
  setInterval(() => {
    currentYear.value = new Date().getFullYear();
  }, 60000); // Check every minute
});
</script>
