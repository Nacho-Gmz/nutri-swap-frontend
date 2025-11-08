<script setup lang="ts">
import { defineProps } from "vue";
import type { Food, Swap } from "../types";

const props = defineProps<{
  intercambio: Swap;
  compareWith: Food | null;
  action?: () => void;
}>();

function compareClass(key: "calories" | "lipids" | "protein" | "carbohydrates") {
  if (!props.compareWith) return "";
  const a = props.intercambio.alimento[key];
  const b = props.compareWith[key];
  if (a > b) return "more";
  if (a < b) return "less";
  return "equal";
}
</script>

<template>
  <div class="rounded-2xl p-4">
    <h3 class="glow glow-cyan text-2xl font-semibold">{{ intercambio.alimento.name }}</h3>
    <ul class="text-black dark:text-white">
      <li>
        <strong>Cantidad:</strong> {{ intercambio.alimento.quantity }}
        {{ intercambio.alimento.unit }}
      </li>
      <li><strong>Peso bruto: </strong> {{ intercambio.alimento.gross_weight }} g</li>
      <li><strong>Peso neto: </strong> {{ intercambio.alimento.net_weight }} g</li>
      <li>
        <strong>Calorías: </strong>
        <span :class="compareClass('calories')">{{ intercambio.alimento.calories }} kcal</span>
      </li>
      <li>
        <strong>Lípidos: </strong>
        <span :class="compareClass('lipids')">{{ intercambio.alimento.lipids }} g</span>
      </li>
      <li>
        <strong>Proteínas: </strong>
        <span :class="compareClass('protein')">{{ intercambio.alimento.protein }} g</span>
      </li>
      <li>
        <strong>Carbohidratos: </strong>
        <span :class="compareClass('carbohydrates')"
          >{{ intercambio.alimento.carbohydrates }} g</span
        >
      </li>

      <li v-if="compareWith">
        <strong>Similitud: </strong>
        <span class="glow glow-green">{{ intercambio.similitud.toFixed(2) }} %</span>
      </li>
    </ul>
    <div class="flex items-center justify-center">
      <button
        v-if="compareWith"
        class="button w-40 hover:scale-105 md:w-50"
        @click="if (!!action) action();"
      >
        Intercambia
      </button>
    </div>
  </div>
</template>

<style lang="css" scoped>
.equal {
  color: slategray;
}

.more {
  color: green;
}

.less {
  color: red;
}
</style>
