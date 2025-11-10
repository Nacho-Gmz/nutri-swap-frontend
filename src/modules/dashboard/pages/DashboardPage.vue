<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { useAuthStore } from "@/modules/auth/stores/auth.store";
import { getUserSwapsAction } from "@/modules/dashboard/actions/get-user-swaps.action";

import SimpleCard from "@/modules/common/components/SimpleCard.vue";
import SwapDetailModal from "../components/SwapDetailModal.vue";

const auth = useAuthStore();
const swaps = ref<any[]>([]);
const loading = ref(true);
const error = ref<string | null>(null);

// Pagination state
const page = ref(1);
const rowsPerPage = 10;

const showSwapDetailModal = ref(false);
const selectedOriginalFoodId = ref<number | null>(null);
const selectedSwappedFoodId = ref<number | null>(null);

const paginatedSwaps = computed(() => {
  const start = (page.value - 1) * rowsPerPage;
  return swaps.value.slice(start, start + rowsPerPage);
});
const totalPages = computed(() => Math.ceil(swaps.value.length / rowsPerPage));

const fetchSwaps = async () => {
  loading.value = true;
  error.value = null;
  const res = await getUserSwapsAction(auth.user.userId);
  if (res.ok) {
    swaps.value = res.userSwaps;
  } else {
    error.value = res.message;
  }
  loading.value = false;
};

onMounted(fetchSwaps);

function nextPage() {
  if (page.value < totalPages.value) page.value++;
}
function prevPage() {
  if (page.value > 1) page.value--;
}

function openSwapDetail(originalId: number, swappedId: number) {
  selectedOriginalFoodId.value = originalId;
  selectedSwappedFoodId.value = swappedId;
  showSwapDetailModal.value = true;
}
</script>

<template>
  <div>
    <div v-if="loading">Cargando...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else>
      <simple-card>
        <h1 class="text-2xl font-bold text-green-700 dark:text-green-300">Mis intercambios</h1>
        <div class="overflow-hidden overflow-x-auto rounded-lg">
          <table class="min-w-full divide-y divide-green-200 dark:divide-green-700">
            <thead>
              <tr class="bg-green-100/60 dark:bg-green-900/30">
                <th
                  class="px-4 py-1 text-left text-base font-bold text-green-700 dark:text-green-300"
                >
                  Alimento original
                </th>
                <th
                  class="px-4 py-1 text-left text-base font-bold text-green-700 dark:text-green-300"
                >
                  Alimento intercambiado
                </th>
                <th
                  class="px-4 py-1 text-center text-base font-bold text-green-700 dark:text-green-300"
                >
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(swap, idx) in paginatedSwaps"
                :key="idx"
                class="transition-colors odd:bg-white/60 even:bg-green-50/60 dark:odd:bg-gray-900/30 dark:even:bg-green-900/10"
              >
                <td class="px-4 py-1 text-gray-800 dark:text-white/90">
                  {{ swap.original_food.name }}
                </td>
                <td class="px-4 py-1 text-gray-800 dark:text-white/90">
                  {{ swap.swapped_food.name }}
                </td>
                <td class="px-4 py-1 text-gray-800 dark:text-white/90">
                  <div class="flex items-center justify-center gap-2">
                    <button
                      class="rounded-xl bg-sky-400 p-2 duration-300 ease-in-out hover:scale-115"
                      @click="openSwapDetail(swap.original_food.id, swap.swapped_food.id)"
                    >
                      <div class="flex items-center justify-center">
                        <i class="bx bx-info-circle text-2xl"></i>
                      </div>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="mt-4 flex items-center gap-4">
          <button
            @click="prevPage"
            :disabled="page === 1"
            class="rounded-lg border border-green-300 bg-green-100 px-3 py-1 font-medium text-green-900 transition disabled:cursor-not-allowed disabled:opacity-50 dark:border-green-700 dark:bg-green-900/30 dark:text-green-200"
          >
            Anterior
          </button>
          <span class="text-sm text-gray-700 dark:text-gray-200"
            >Página {{ page }} de {{ totalPages }}</span
          >
          <button
            @click="nextPage"
            :disabled="page === totalPages"
            class="rounded-lg border border-green-300 bg-green-100 px-3 py-1 font-medium text-green-900 transition disabled:cursor-not-allowed disabled:opacity-50 dark:border-green-700 dark:bg-green-900/30 dark:text-green-200"
          >
            Siguiente
          </button>
        </div>
      </simple-card>
    </div>
    <SwapDetailModal
      :show="showSwapDetailModal"
      :originalFoodId="selectedOriginalFoodId"
      :swappedFoodId="selectedSwappedFoodId"
      @close="showSwapDetailModal = false"
    />
  </div>
</template>
