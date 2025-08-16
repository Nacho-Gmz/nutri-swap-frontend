<script setup lang="ts">
import SimpleCard from "@/modules/common/components/SimpleCard.vue";
import ButtonUI from "@/modules/common/components/ui/ButtonUI.vue";
import router from "@/router";
import { defineEmits } from "vue";
const emit = defineEmits(["close"]);

function handleOuterClick(e: MouseEvent) {
  if (e.target === e.currentTarget) {
    emit("close");
  }
}
</script>

<template>
  <div
    class="absolute top-0 left-0 z-99999999999 flex min-h-screen min-w-screen items-center justify-center backdrop-blur-2xl"
    @click="handleOuterClick"
  >
    <SimpleCard class="max-w-5/6 md:max-w-2/3"
      ><h1 class="mb-2 text-xl font-bold text-black dark:text-white">
        <router-link class="link" to="/register">Crea una cuenta</router-link> para desbloquear el
        potencial de
        <span class="text-green-600 dark:text-green-300">NutriSwap+</span>
      </h1>
      <p class="mt-4 text-wrap text-black dark:text-white">
        Con una cuenta puedes acceder a un tablero especializado que almacena todos tus intercambios
        y además consultar la información de cada intercambio que has realizado.
      </p>
      <div class="mt-4 flex items-center justify-end gap-4">
        <button class="link text-sm" @click="emit('close')">Cerrar</button>
        <ButtonUI @click="router.push('/register')">Regístrate</ButtonUI>
      </div>
    </SimpleCard>
  </div>
</template>
