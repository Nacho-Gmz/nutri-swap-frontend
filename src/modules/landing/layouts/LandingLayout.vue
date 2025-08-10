<script setup lang="ts">
import LandingHeader from "../components/LandingHeader.vue";
</script>

<template>
  <div class="h-screen max-h-screen overflow-hidden xl:flex">
    <div class="flex h-full flex-1 flex-col transition-all duration-300 ease-in-out">
      <LandingHeader />
      <div
        class="mx-auto h-full max-h-full w-full max-w-(--breakpoint-2xl) flex-1 overflow-hidden p-4 md:p-6"
      >
        <RouterView />
      </div>
    </div>
  </div>
</template>
