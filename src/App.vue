<script lang="ts" setup>
import { useSnackbarStore } from "@/stores/snackbar";
const snackbar = useSnackbarStore();
</script>

<template>
  <v-responsive>
    <v-app>
      <router-view />
      <v-snackbar
        v-model="snackbar.show"
        :color="snackbar.color"
        timeout="4000"
        location="bottom"
        rounded="xl"
      >
        {{ snackbar.message }}
      </v-snackbar>
    </v-app>
  </v-responsive>
</template>
