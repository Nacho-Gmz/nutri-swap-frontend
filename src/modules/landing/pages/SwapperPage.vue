<script setup lang="ts">
import { ref } from "vue";
import FoodCombobox from "@/modules/common/components/FoodCombobox.vue";
import SimpleCard from "@/modules/common/components/SimpleCard.vue";
import FoodCard from "@/modules/common/components/FoodCard.vue";
import { useToasts } from "@/modules/common/composables/useToast";
import { getFoodInformationAction, swapFoodAction } from "@/modules/common/actions";
import type { Alimento, Swap } from "@/modules/common/types";

const selectedFoodId = ref<number | null>(null);
const selectedFoodInfo = ref<Alimento | null>(null);
const possibleSwaps = ref<Swap[] | null>(null);

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
  console.log(selectedFoodInfo.value);
  console.log(possibleSwaps.value);
};
</script>

<template>
  <div class="flex h-full max-h-full flex-col gap-2 overflow-hidden">
    <SimpleCard class="flex flex-col gap-2">
      <FoodCombobox @select="handleFoodSelect" />
      <button class="btn w-auto" :disabled="!selectedFoodId" @click="handleSwap">
        Intercambia
      </button>
    </SimpleCard>
    <SimpleCard class="flex max-h-[50vh] gap-2 overflow-x-auto overflow-y-auto">
      <FoodCard
        v-if="selectedFoodInfo"
        :intercambio="{ alimento: selectedFoodInfo, similitud: 100 }"
        :compare-with="null"
      />

      <div class="overflow-x-auto overflow-y-auto">
        <FoodCard
          v-for="swap in possibleSwaps"
          :key="swap.alimento.id"
          :intercambio="swap"
          :compare-with="selectedFoodInfo"
        />
      </div>
    </SimpleCard>
  </div>
</template>
