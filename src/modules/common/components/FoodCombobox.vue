<script setup lang="ts">
import { ref, computed, onMounted, watch, defineEmits } from "vue";
import { Combobox, ComboboxInput, ComboboxOptions, ComboboxOption } from "@headlessui/vue";
import { getFoodsNamesAction } from "../actions/get-foods-names.action";

const emit = defineEmits<{ (e: "select", id: number): void }>();
const foods = ref<{ id: number; name: string }[]>([]);
const selectedFood = ref<{ id: number; name: string }>({ id: NaN, name: "" });
const query = ref("");
const debouncedQuery = ref("");
let debounceTimeout: ReturnType<typeof setTimeout> | null = null;

watch(selectedFood, (newVal) => {
  if (newVal && !isNaN(newVal.id)) {
    emit("select", newVal.id);
  }
});

const filteredFood = computed(() => {
  const q = debouncedQuery.value.trim().toLowerCase();
  const results =
    q === "" ? foods.value : foods.value.filter((food) => food.name.toLowerCase().includes(q));
  return results.slice(0, 20); // Limit to top 20 results
});

watch(query, (newVal) => {
  if (debounceTimeout) clearTimeout(debounceTimeout);
  debounceTimeout = setTimeout(() => {
    debouncedQuery.value = newVal;
  }, 200); // 200ms debounce
});

onMounted(async () => {
  const foodNamesResponse = await getFoodsNamesAction();
  if (!foodNamesResponse.ok) return;
  foods.value = foodNamesResponse.foodNames;
});
</script>

<template>
  <Combobox v-model="selectedFood">
    <div class="relative">
      <div
        class="relative w-full cursor-default overflow-hidden rounded-lg text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-green-300 sm:text-sm"
      >
        <ComboboxInput
          class="input relative w-full cursor-default overflow-hidden rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-green-300 sm:text-sm"
          :displayValue="
            (food) =>
              food && typeof food === 'object' && 'name' in food
                ? (food as { name: string }).name
                : ''
          "
          @input="query = $event.target.value"
        />
      </div>
      <ComboboxOptions
        class="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md border border-gray-200 bg-white/50 py-1 text-base shadow-lg ring-1 ring-black/5 backdrop-blur-2xl focus:outline-none sm:text-sm dark:border-gray-600/50 dark:bg-gray-900/10"
      >
        <div
          v-if="filteredFood.length === 0 && query !== ''"
          class="relative cursor-default px-4 py-2 text-gray-700 select-none dark:text-white"
        >
          No se encontro el alimento.
        </div>
        <ComboboxOption
          v-for="food in filteredFood"
          :key="food.id"
          :value="food"
          v-slot="{ selected, active }"
        >
          <li
            class="relative cursor-default py-2 pr-4 pl-10 select-none"
            :class="{
              'bg-green-600/30 text-sky-600 dark:text-sky-400/90': active,
              'text-gray-900 dark:text-white/90': !active,
            }"
          >
            <span
              class="block truncate"
              :class="{ 'font-medium': selected, 'font-normal': !selected }"
            >
              {{ food.name }}
            </span>
            <span
              v-if="selected"
              class="absolute inset-y-0 left-0 flex items-center pl-3"
              :class="{ 'text-white': active, 'text-green-600': !active }"
            >
              <i class="bx bx-check"></i>
            </span>
          </li>
        </ComboboxOption>
      </ComboboxOptions>
    </div>
  </Combobox>
</template>
