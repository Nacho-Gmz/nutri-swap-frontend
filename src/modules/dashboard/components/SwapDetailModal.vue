<template>
  <div
    v-if="show"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
  >
    <div
      class="relative w-full max-w-2xl rounded-2xl border border-green-200 bg-white/60 p-6 shadow-2xl backdrop-blur-2xl transition-all duration-300 dark:border-green-700 dark:bg-green-900/10"
    >
      <button
        @click="$emit('close')"
        class="absolute top-3 right-3 z-51 flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-2xl text-green-700 shadow transition hover:bg-red-100 hover:text-red-500 dark:bg-green-900/30 dark:text-green-300 dark:hover:bg-red-900/30 dark:hover:text-red-400"
        aria-label="Cerrar"
      >
        <i class="bx bx-x"></i>
      </button>
      <h2 class="glow glow-green mb-6 text-center text-2xl font-extrabold drop-shadow">
        Detalles del Intercambio
      </h2>
      <div
        v-if="loading"
        class="animate-pulse py-12 text-center text-lg text-green-700 dark:text-green-300"
      >
        Cargando información...
      </div>
      <div v-else-if="error" class="py-12 text-center text-lg text-red-600 dark:text-red-400">
        {{ error }}
      </div>
      <div v-else class="flex flex-col items-center justify-center gap-6 md:flex-row">
        <div class="w-full md:w-1/2">
          <food-card
            v-if="originalFood"
            :intercambio="{ alimento: originalFood, similitud: 100 }"
            :compare-with="null"
            class="rounded-xl border border-green-200 bg-white/70 p-2 shadow-md dark:border-green-700 dark:bg-gray-900/30"
          />
          <div v-else class="text-center text-gray-400 dark:text-gray-500">Sin información</div>
        </div>
        <div class="w-full md:w-1/2">
          <food-card
            v-if="swappedFood"
            :intercambio="{ alimento: swappedFood, similitud: 100 }"
            :compare-with="null"
            class="rounded-xl border border-green-200 bg-white/70 p-2 shadow-md dark:border-green-700 dark:bg-gray-900/30"
          />
          <div v-else class="text-center text-gray-400 dark:text-gray-500">Sin información</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import FoodCard from "@/modules/common/components/FoodCard.vue";
import { getFoodInformationAction } from "@/modules/common/actions/get-food-information.action";
import type { Food } from "@/modules/common/types/food.types";

const props = defineProps<{
  show: boolean;
  originalFoodId: number | null;
  swappedFoodId: number | null;
}>();

const originalFood = ref<Food | null>(null);
const swappedFood = ref<Food | null>(null);
const loading = ref(false);
const error = ref<string | null>(null);

watch(
  () => [props.show, props.originalFoodId, props.swappedFoodId],
  async ([show, originalId, swappedId]) => {
    if (show && originalId && swappedId) {
      loading.value = true;
      error.value = null;
      originalFood.value = null;
      swappedFood.value = null;
      const [originalRes, swappedRes] = await Promise.all([
        getFoodInformationAction(Number(originalId)),
        getFoodInformationAction(Number(swappedId)),
      ]);
      if (!originalRes.ok) {
        error.value = originalRes.message;
      } else {
        originalFood.value = originalRes.foodInfo;
      }
      if (!swappedRes.ok) {
        error.value = swappedRes.message;
      } else {
        swappedFood.value = swappedRes.foodInfo;
      }
      loading.value = false;
    }
  },
  { immediate: true },
);
</script>
