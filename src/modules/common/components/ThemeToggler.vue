<script setup lang="ts">
import { useTheme } from "@/modules/common/components/layout/ThemeProvider.vue";

const { toggleTheme } = useTheme();
</script>

<template>
  <button
    class="relative flex h-11 w-11 items-center justify-center rounded-full border-2 border-green-400/25 bg-green-50/30 text-green-400 shadow-md backdrop-blur-md transition-colors hover:bg-green-100/75 dark:border-green-500/50 dark:bg-green-800/30 dark:text-green-500 dark:hover:bg-green-800/50"
    @click.prevent="toggleTheme"
  >
    <div class="hidden h-full items-center justify-center dark:flex">
      <i class="bx bx-sun text-2xl"></i>
    </div>
    <div class="flex items-center justify-center dark:hidden">
      <i class="bx bx-moon text-2xl"></i>
    </div>
  </button>
</template>
