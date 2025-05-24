<script setup lang="ts">
import { useUserStore } from "@/stores/user";

const user = useUserStore();
</script>

<template>
  <v-app-bar color="primaryContainer">
    <v-app-bar-nav-icon
      v-if="user.isLoggedIn"
      variant="text"
      @click.stop="$emit('toggle-drawer')"
    />
    <v-toolbar-title>NutriSwap</v-toolbar-title>
    <ThemeToggler class="mr-5" />
  </v-app-bar>
</template>
