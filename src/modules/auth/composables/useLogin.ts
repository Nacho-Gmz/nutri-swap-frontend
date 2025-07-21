import { ref } from "vue";
import { showToast } from "@/modules/common/composables/useToast";
import router from "@/router";
import { useAuthStore } from "../stores/auth.store";

const authStore = useAuthStore();

export const useLogin = () => {
  const email = ref<string>("");
  const password = ref<string>("");
  const showPassword = ref(false);

  const togglePasswordVisibility = () => {
    showPassword.value = !showPassword.value;
  };

  const onLogin = async () => {
    if (!email.value || !password.value) {
      showToast("Campos vacios", "warning");
      return;
    }

    if (!/.+@.+\..+/.test(email.value)) {
      showToast("Correo no válido", "error");
      return;
    }

    const [ok, message] = await authStore.login(email.value, password.value);

    if (!ok) {
      showToast(message, "error");
    } else {
      showToast(message, "success");
      router.push({ name: "dashboard" });
    }
  };

  return { email, password, showPassword, togglePasswordVisibility, onLogin };
};
