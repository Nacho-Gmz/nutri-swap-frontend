<script setup lang="ts">
import { computed } from "vue";
import { useUserStore } from "@/stores/user";

const userStore = useUserStore();

const items = computed(() =>
  userStore.isLoggedIn
    ? [
        { title: "Inicio", icon: "mdi-home", route: "/" },
        { title: "Intercambio", icon: "mdi-swap-horizontal", route: "/swap" },
        { title: "Acerca de", icon: "mdi-information", route: "/about" },
      ]
    : [
        { title: "Inicio", icon: "mdi-home", route: "/" },
        { title: "Intercambio", icon: "mdi-swap-horizontal", route: "/swap" },
        { title: "Acerca de", icon: "mdi-information", route: "/about" },
        { title: "Iniciar sesión", icon: "mdi-account", route: "/login" },
      ]
);
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
      <v-list-item
        v-if="userStore.isLoggedIn"
        title="Cerrar sesión"
        prepend-icon="mdi-logout"
        to="/"
        active-class="router-link-exact-active"
        class="button"
        color="primary"
        rounded="xl"
        @click="userStore.logOut()"
      />
    </v-list>
  </v-navigation-drawer>
</template>
