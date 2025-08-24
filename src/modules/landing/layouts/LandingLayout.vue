<script setup lang="ts">
import ThemeToggler from "@/modules/common/components/ThemeToggler.vue";
</script>

<template>
  <div class="relative min-h-screen w-full">
    <theme-toggler class="fixed top-4 right-4 z-50" />
    <div class="h-full w-full">
      <RouterView />
    </div>
  </div>
</template>
