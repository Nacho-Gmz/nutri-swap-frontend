<script setup lang="ts">
import { RouterView } from "vue-router";
import ThemeProvider from "@/modules/common/components/layout/ThemeProvider.vue";
import ToastContainer from "@/modules/common/components/ToastContainer.vue";
</script>

<template>
  <ThemeProvider>
    <RouterView />
    <ToastContainer />
  </ThemeProvider>
</template>
