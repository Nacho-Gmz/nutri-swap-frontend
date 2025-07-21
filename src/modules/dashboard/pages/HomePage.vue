<script setup lang="ts">
import { useAuthStore } from "@/modules/auth/stores/auth.store";
const user = useAuthStore();
</script>

<template>
  <h1>Hola {{}}</h1>
</template>
