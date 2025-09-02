import { ref } from "vue";

export type ToastType = "success" | "error" | "info" | "warning";

export interface Toast {
  id: number;
  message: string;
  type: ToastType;
  duration?: number;
}

const toasts = ref<Toast[]>([]);
let toastId = 0;

export function showToast(message: string, type: ToastType = "info", duration = 3000) {
  const id = ++toastId;
  toasts.value.push({ id, message, type, duration });
  setTimeout(() => {
    removeToast(id);
  }, duration);
}

export function removeToast(id: number) {
  toasts.value = toasts.value.filter((t) => t.id !== id);
}

export function useToasts() {
  return { toasts, showToast, removeToast };
}
