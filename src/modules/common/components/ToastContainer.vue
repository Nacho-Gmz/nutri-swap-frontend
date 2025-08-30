<script setup lang="ts">
import { useToasts } from "../composables/useToast";

const { toasts, removeToast } = useToasts();

function toastTypeClass(type: string) {
  switch (type) {
    case "success":
      return "bg-green-100/70 border-green-600 text-green-700";
    case "error":
      return "bg-red-100/70 border-red-600 text-red-700";
    case "warning":
      return "bg-yellow-100/70 border-yellow-600 text-yellow-700";
    default:
      return "bg-blue-100/70 border-blue-600 text-blue-700";
  }
}
</script>

<template>
  <div class="fixed right-4 bottom-4 z-99999999999999 flex flex-col gap-2">
    <transition-group name="toast-fade" tag="div">
      <div
        v-for="toast in toasts"
        :key="toast.id"
        :class="[
          'backdrop-blur-3xl',
          'bg rounded-2xl border-2 p-4',
          toastTypeClass(toast.type),
          'shadow-lg',
          'cursor-pointer',
          'w-80',
          'animate-fade-in',
        ]"
        @click="removeToast(toast.id)"
      >
        <span>{{ toast.message }}</span>
      </div>
    </transition-group>
  </div>
</template>

<style scoped>
.toast-fade-enter-active,
.toast-fade-leave-active {
  transition: all 0.3s;
}
.toast-fade-enter-from,
.toast-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
.animate-fade-in {
  animation: fadeIn 0.3s;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
