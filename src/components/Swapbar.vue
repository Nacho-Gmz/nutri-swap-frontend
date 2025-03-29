<script setup>
import { ref, onMounted } from "vue";

const items = ref([]);

const fetchFoodNames = async () => {
  try {
    const response = await fetch("http://localhost:5000/nombrealimentos"); // Adjust if hosted elsewhere
    const data = await response.json();
    items.value = data.map((item) => item.Alimento); // Extract food names
  } catch (error) {
    console.error("Error fetching food names:", error);
  }
};

onMounted(fetchFoodNames);
</script>

<template>
  <v-combobox
    auto-select-first="exact"
    rounded
    label="Alimento"
    variant="outlined"
    :items="items"
  ></v-combobox>
  <v-btn
    rounded
    class="text-none"
    color="primary"
    size="x-large"
    text="Busca alternativas"
    variant="flat"
  />
</template>
