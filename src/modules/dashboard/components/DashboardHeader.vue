<script setup lang="ts">
import { ref } from "vue";
import ThemeToggler from "@/modules/common/components/ThemeToggler.vue";
import UserMenu from "./UserMenu.vue";

const isApplicationMenuOpen = ref(false);
</script>

<template>
  <header class="sticky top-0 z-99999 w-auto backdrop-blur-2xl md:backdrop-blur-none">
    <div class="flex grow flex-col items-center justify-between lg:flex-row lg:px-6">
      <div
        class="flex w-full flex-col items-center justify-between gap-2 px-3 py-3 sm:gap-4 md:flex-row lg:justify-normal lg:px-0 lg:py-4"
      >
        <div
          class="rounded-2xl p-4 md:border md:border-green-200 md:bg-white/50 md:backdrop-blur-3xl md:dark:border-green-600/30 md:dark:bg-gray-900/10"
        >
          <h1 class="glow glow-cyan block text-4xl font-bold">NutriSwap +</h1>
        </div>
        <div class="flex grow gap-2">
          <router-link class="button" :to="{ name: 'dashboard' }">Intercambios</router-link>
          <router-link class="button" :to="{ name: 'user-swapper' }">NutriSwap</router-link>
          <router-link class="button" :to="{ name: 'user-about-us' }">Información</router-link>
        </div>
      </div>

      <div
        class="flex w-full items-center justify-between gap-4 px-5 py-4 shadow-md lg:justify-end lg:px-0 lg:shadow-none"
      >
        <UserMenu />
        <ThemeToggler />
      </div>
    </div>
  </header>
</template>
