<script setup lang="ts">
import { ref } from "vue";
import FoodCombobox from "@/modules/common/components/FoodCombobox.vue";
import SimpleCard from "@/modules/common/components/SimpleCard.vue";
import FoodCard from "@/modules/common/components/FoodCard.vue";
import { useToasts } from "@/modules/common/composables/useToast";
import { getFoodInformationAction, swapFoodAction } from "@/modules/common/actions";
import { makeSwapAction } from "@/modules/dashboard/actions/make-swap.action";
import { useAuthStore } from "@/modules/auth/stores/auth.store";
import type { Alimento, Swap } from "@/modules/common/types";
import FoodCarrousel from "@/modules/common/components/FoodCarrousel.vue";

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
};

// Handler for swap action from FoodCarrousel
const authStore = useAuthStore();
const handleMakeSwap = async (swappedFoodId: number) => {
  if (!authStore.user || !selectedFoodId.value || !swappedFoodId) {
    useToasts().showToast("Faltan datos para registrar el intercambio", "error", 3000);
    return;
  }
  // Ensure userId is a number if needed
  const userId =
    typeof authStore.user.userId === "string"
      ? parseInt(authStore.user.userId, 10)
      : authStore.user.userId;
  const res = await makeSwapAction(userId, {
    original_food_id: selectedFoodId.value,
    swapped_food_id: Number(swappedFoodId),
  });
  if (res.ok) {
    useToasts().showToast("Intercambio registrado exitosamente", "success", 3000);
  } else {
    useToasts().showToast(res.message, "error", 3000);
  }
};
</script>

<template>
  <div class="flex h-full max-h-full max-w-340 flex-col gap-2 overflow-visible">
    <SimpleCard class="flex flex-col gap-2">
      <h1 class="text-green-600 dark:text-green-400">
        Bienvenido [Usuario], ¿listo para intercambiar?
      </h1>
      <FoodCombobox @select="handleFoodSelect" />
      <button class="btn w-auto" :disabled="!selectedFoodId" @click="handleSwap">
        Intercambia
      </button>

      <div v-if="selectedFoodInfo && possibleSwaps" class="flex w-full gap-2">
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
            :action="(swap) => handleMakeSwap(swap.alimento.id)"
          />
        </div>
      </div>
    </SimpleCard>
  </div>
</template>
