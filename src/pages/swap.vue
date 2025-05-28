<script lang="ts" setup>
import Card from "@/components/Card.vue";
//
</script>

<template>
  <v-card color="primaryContainer" rounded="xl">
    <Swapbar />
    <v-btn
      rounded
      color="primary"
      size="x-large"
      text="Busca alternativas"
      variant="flat"
    />
  </v-card>
</template>

<route lang="yaml">
meta:
  layout: adminLayout
</route>
