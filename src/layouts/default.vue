<script setup lang="ts">
import Sidebar from "@/components/Sidebar.vue";
//
</script>
<template>
  <v-navigation-drawer permanent>
    <Sidebar></Sidebar>
  </v-navigation-drawer>
  <v-main>
    <router-view />
  </v-main>
</template>
