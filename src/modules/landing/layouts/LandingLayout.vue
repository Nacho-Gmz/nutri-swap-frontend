<script setup lang="ts">
import LandingHeader from "../components/LandingHeader.vue";
</script>

<template>
  <div class="min-h-screen xl:flex">
    <div class="flex-1 transition-all duration-300 ease-in-out">
      <LandingHeader />
      <div class="mx-auto max-w-(--breakpoint-2xl) p-4 md:p-6">
        <RouterView />
      </div>
    </div>
  </div>
</template>
