<script setup lang="ts">
import { useTheme } from "vuetify";

const theme = useTheme();

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark
    ? "customLight"
    : "customDark";
}
</script>

<template>
  <v-btn icon rounded="xl" @click="toggleTheme">
    <v-icon
      v-if="theme.global.current.value.dark"
      icon="mdi-moon-waning-crescent"
    />
    <v-icon v-else icon="mdi-white-balance-sunny" />
  </v-btn>
</template>
