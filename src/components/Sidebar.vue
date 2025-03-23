<script setup lang="ts">
import { ref } from "vue";
import { useTheme } from "vuetify";

const theme = useTheme();

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark
    ? "customLight"
    : "customDark";
}

const items = ref([
  { title: "Inicio", icon: "mdi-home", route: "/" },
  { title: "Intercambio", icon: "mdi-swap-horizontal", route: "/swap" },
  { title: "Acerca de", icon: "mdi-information", route: "/about" },
]);
</script>

<template>
  <v-list>
    <v-list-item
      prepend-avatar="@/assets/logo.png"
      title="NutriSwap"
    ></v-list-item>
  </v-list>

  <v-divider></v-divider>

  <v-list density="compact" nav>
    <v-list-item
      v-for="item in items"
      :prepend-icon="item.icon"
      :key="item.title"
      :to="item.route"
      :title="item.title"
      active-class="router-link-exact-active"
      class="button"
      color="primary"
      rounded="xl"
    >
    </v-list-item>
  </v-list>
  <v-list density="compact" nav>
    <v-list-item
      prepend-icon="mdi-account"
      to="/login"
      title="Iniciar sesión"
      color="primary"
      rounded="xl"
    >
    </v-list-item>
    <v-list-item
      prepend-icon="mdi-theme-light-dark"
      @click="toggleTheme"
      title="Cambiar tema"
      color="primary"
      rounded="xl"
    >
    </v-list-item>
  </v-list>
</template>
