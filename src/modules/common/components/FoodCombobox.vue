<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { Combobox, ComboboxInput, ComboboxOptions, ComboboxOption } from "@headlessui/vue";

const use

const foods = ref([]);
const selectedPerson = ref(foods.value[0]);
const query = ref("");

const filteredFood = computed(() =>
  query.value === ""
    ? foods
    : foods.value.filter((food) => {
        return food.toLowerCase().includes(query.value.toLowerCase());
      }),
);
onMounted(async () => {
  foods.value = await

});
</script>

<template>
  <Combobox v-model="selectedPerson">
    <ComboboxInput @change="query = $event.target.value" />
    <ComboboxOptions>
      <ComboboxOption v-for="person in filteredFood" :key="person" :value="person">
        {{ person }}
      </ComboboxOption>
    </ComboboxOptions>
  </Combobox>
</template>
