import { ref } from "vue";
import { useUserStore } from "../stores/userStore";
import { showToast } from "@/modules/common/composables/useToast";
import router from "@/router";
import { login } from "../services/authService";
import { isAxiosError } from "axios";

export const useAuth = () => {
  const email = ref<string>("");
  const password = ref<string>("");
  const showPassword = ref<boolean>(false);
  const user = useUserStore();

  const togglePasswordVisibility = () => {
    showPassword.value = !showPassword.value;
  };

  const handleLogin = async () => {
    if (!email.value || !password.value) {
      showToast("Campos vacios", "warning");
      return;
    }

    if (!/.+@.+\..+/.test(email.value)) {
      showToast("Correo no válido", "error");
      return;
    }

    const credentials = {
      email: email.value,
      password: password.value,
    };

    const [error] = await login(credentials);

    if (error) {
      if (isAxiosError(error)) {
        showToast(error.response?.data.detail, "error");
      }
    } else {
      showToast("¡Sesión iniciada!", "success");
      user.logIn();
      router.push({ name: "home" });
    }
  };

  return {
    email,
    password,
    showPassword,
    togglePasswordVisibility,
    handleLogin,
  };
};
