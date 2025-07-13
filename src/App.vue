<script setup lang="ts">
import { RouterView } from "vue-router";
import ThemeProvider from "@/modules/common/components/layout/ThemeProvider.vue";
import SidebarProvider from "@/modules/common/components/layout/SidebarProvider.vue";
import ToastContainer from "@/modules/common/components/ToastContainer.vue";
</script>

<template>
  <ThemeProvider>
    <SidebarProvider>
      <RouterView />
      <ToastContainer />
    </SidebarProvider>
  </ThemeProvider>
</template>
