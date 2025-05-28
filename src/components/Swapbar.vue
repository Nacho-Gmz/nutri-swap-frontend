<script setup lang="ts">
import { getNombreAlimentos } from "@/services/api/foodService";
import { useSnackbarStore } from "@/stores/snackbar";
import { ref, onMounted } from "vue";

const items = ref<[]>();

const snackbar = useSnackbarStore();

const fetchFoodNames = async () => {
  const [error, data] = await getNombreAlimentos();
  if (error) {
    snackbar.showSnackbar(error.message, "error");
  }
  items.value = data; // Extract food names
};

onMounted(fetchFoodNames);
</script>

<template>
  <v-combobox
    auto-select-first="exact"
    rounded
    variant="outlined"
    label="Alimento"
    :items="items"
  />
</template>
