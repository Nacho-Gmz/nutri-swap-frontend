<script setup lang="ts">
import Sidebar from "@/components/layout/Sidebar.vue";
//
</script>
<template>
  <v-navigation-drawer permanent>
    <Sidebar />
  </v-navigation-drawer>
  <v-main>
    <router-view />
  </v-main>
</template>
