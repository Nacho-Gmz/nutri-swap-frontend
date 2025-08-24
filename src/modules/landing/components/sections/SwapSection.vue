<script setup lang="ts">
import { ref } from "vue";
import FoodCombobox from "@/modules/common/components/FoodCombobox.vue";
import SimpleCard from "@/modules/common/components/SimpleCard.vue";
import FoodCard from "@/modules/common/components/FoodCard.vue";
import { useToasts } from "@/modules/common/composables/useToast";
import { getFoodInformationAction, swapFoodAction } from "@/modules/common/actions";
import type { Alimento, Swap } from "@/modules/common/types";
import RegisterModal from "../RegisterModal.vue";
import FoodCarrousel from "@/modules/common/components/FoodCarrousel.vue";

const selectedFoodId = ref<number | null>(null);
const selectedFoodInfo = ref<Alimento | null>(null);
const possibleSwaps = ref<Swap[] | null>(null);
const isModalOpen = ref<boolean>(false);

function handleFoodSelect(id: number) {
  selectedFoodId.value = id;
}

const handleSwap = async () => {
  if (selectedFoodId.value === null) {
    useToasts().showToast("No se ha seleccionado un alimento", "error", 3000);
    return;
  }

  const swapFoodResponse = await swapFoodAction(selectedFoodId.value);
  const originalFoodInfoResponse = await getFoodInformationAction(selectedFoodId.value);

  if (!swapFoodResponse.ok || !originalFoodInfoResponse.ok) {
    useToasts().showToast("Ocurrió un error seleccionando el alimento", "error", 3000);
    return;
  }

  selectedFoodInfo.value = originalFoodInfoResponse.foodInfo;
  possibleSwaps.value = swapFoodResponse.swaps;
};

const attemptSwap = async () => {
  isModalOpen.value = true;
};
</script>

<template>
  <div class="relative flex h-screen flex-col items-center justify-center p-4 md:p-10">
    <div class="inline-block w-fit transition duration-500 ease-in-out hover:scale-105">
      <span class="block rounded-xl">
        <h1 class="glow glow-green text-5xl font-bold text-green-100 md:text-7xl">Pruébalo</h1>
      </span>
    </div>
    <simple-card class="mt-4 flex w-full flex-col gap-2">
      <div class="flex w-full flex-col items-center justify-center gap-2 md:flex-row">
        <food-combobox class="w-full grow" @select="handleFoodSelect" />
        <div class="flex w-full justify-center md:w-auto">
          <button
            class="button w-full hover:scale-105"
            :disabled="!selectedFoodId"
            @click="handleSwap"
          >
            Busca
          </button>
        </div>
      </div>
      <div v-if="selectedFoodInfo && possibleSwaps" class="flex w-full flex-col gap-2 md:flex-row">
        <div class="w-full items-center justify-center p-4 px-12 md:w-1/2">
          <food-card
            v-if="selectedFoodInfo"
            :intercambio="{ alimento: selectedFoodInfo, similitud: 100 }"
            :compare-with="null"
          />
        </div>
        <div
          v-if="possibleSwaps"
          class="w-full items-center justify-center border-t-2 border-green-800 md:w-1/2 md:border-0 dark:border-green-200"
        >
          <food-carrousel
            :intercambios="possibleSwaps"
            :compare-with="selectedFoodInfo"
            :action="attemptSwap"
          />
        </div>
      </div>
    </simple-card>
    <register-modal v-if="isModalOpen" @close="isModalOpen = false"></register-modal>
    <div class="absolute bottom-0 animate-bounce">
      <i class="bx bx-chevron-down text-8xl text-green-700 dark:text-green-300"></i>
    </div>
  </div>
</template>
