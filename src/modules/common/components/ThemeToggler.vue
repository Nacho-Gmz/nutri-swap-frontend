<script setup lang="ts">
import { useTheme } from "@/modules/common/components/layout/ThemeProvider.vue";

const { toggleTheme } = useTheme();
</script>

<template>
  <button
    class="flex h-11 w-11 items-center justify-center rounded-full border-2 border-green-200 bg-green-50/30 text-green-700 shadow-md backdrop-blur-md transition duration-500 ease-in-out hover:-rotate-30 hover:bg-green-100/75 dark:border-green-200 dark:bg-green-800/30 dark:text-green-200 dark:hover:bg-green-800/50"
    @click.prevent="toggleTheme"
  >
    <div class="hidden h-full items-center justify-center dark:flex">
      <i class="glow glow-green bx bx-sun text-2xl"></i>
    </div>
    <div class="flex items-center justify-center dark:hidden">
      <i class="glow glow-green bx bx-moon text-2xl"></i>
    </div>
  </button>
</template>
