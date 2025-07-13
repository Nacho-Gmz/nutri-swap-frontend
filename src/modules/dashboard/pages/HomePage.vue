<script setup lang="ts">
import { useUserStore } from "@/modules/auth/stores/userStore";
const user = useUserStore();
</script>

<template>
  <h1>Hola {{}}</h1>
</template>
