<script setup lang="ts">
import { ref } from "vue";
import FoodCombobox from "@/modules/common/components/FoodCombobox.vue";
import SimpleCard from "@/modules/common/components/SimpleCard.vue";
import FoodCard from "@/modules/common/components/FoodCard.vue";
import { useToasts } from "@/modules/common/composables/useToast";
import { getFoodInformationAction, swapFoodAction } from "@/modules/common/actions";
import type { Alimento, Swap } from "@/modules/common/types";
import RegisterModal from "../components/RegisterModal.vue";
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
  <div class="flex h-full max-h-full max-w-340 flex-col gap-2 overflow-hidden">
    <SimpleCard class="flex flex-col gap-2">
      <FoodCombobox @select="handleFoodSelect" />
      <button class="btn w-auto" :disabled="!selectedFoodId" @click="handleSwap">
        Intercambia
      </button>

      <div class="flex w-full gap-2">
        <div class="w-1/2 items-center justify-center p-4 px-12">
          <FoodCard
            v-if="selectedFoodInfo"
            :intercambio="{ alimento: selectedFoodInfo, similitud: 100 }"
            :compare-with="null"
          />
        </div>

        <div v-if="possibleSwaps" class="w-1/2 items-center justify-center">
          <FoodCarrousel
            :intercambios="possibleSwaps"
            :compare-with="selectedFoodInfo"
            :action="attemptSwap"
          />
        </div>
      </div>
    </SimpleCard>
    <RegisterModal v-if="isModalOpen" @close="isModalOpen = false"></RegisterModal>
  </div>
</template>
