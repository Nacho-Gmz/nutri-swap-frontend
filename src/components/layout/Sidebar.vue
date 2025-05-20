<script setup lang="ts">
import { ref } from "vue";

const items = ref([
  { title: "Inicio", icon: "mdi-home", route: "/" },
  { title: "Intercambio", icon: "mdi-swap-horizontal", route: "/swap" },
  { title: "Acerca de", icon: "mdi-information", route: "/about" },
  { title: "Iniciar sesión", icon: "mdi-account", route: "/login" },
]);
</script>

<template>
  <v-navigation-drawer color="primaryContainer">
    <v-list density="compact" nav>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        :prepend-icon="item.icon"
        :to="item.route"
        :title="item.title"
        active-class="router-link-exact-active"
        class="button"
        color="primary"
        rounded="xl"
      />
    </v-list>
  </v-navigation-drawer>
</template>
