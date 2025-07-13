<script setup lang="ts">
import { useSidebarProvider } from "@/modules/common/composables/useSidebar";

useSidebarProvider();
</script>

<template>
  <slot></slot>
</template>
