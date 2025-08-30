import { ref } from "vue";

import router from "@/router";
import { showToast } from "@/modules/common/composables/useToast";
import { loginAction } from "../actions";
import { useAuthStore } from "../stores/auth.store";

export const useLogin = () => {
  const email = ref<string>("");
  const password = ref<string>("");
  const showPassword = ref(false);
  const auth = useAuthStore();

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

    const response = await loginAction({ email: email.value, password: password.value });
    if (!response.ok) {
      showToast(response.message, "error");
      return;
    }
    auth.login(response.token);
    showToast("Inicio de sesión exitoso", "success");
    router.push({ name: "dashboard" });
  };

  return { email, password, showPassword, togglePasswordVisibility, onLogin };
};
