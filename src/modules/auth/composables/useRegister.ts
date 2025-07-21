import { ref } from "vue";
import { showToast } from "@/modules/common/composables/useToast";
import router from "@/router";
import { useAuthStore } from "../stores/auth.store";

const authStore = useAuthStore();

export const useRegister = () => {
  const firstName = ref<string>("");
  const lastName = ref<string>("");
  const email = ref<string>("");
  const password = ref<string>("");
  const showPassword = ref(false);
  const agreeToTerms = ref<boolean>(false);

  const togglePasswordVisibility = () => {
    showPassword.value = !showPassword.value;
  };

  const onRegister = async () => {
    if (!firstName.value || !lastName.value || !email.value || !password.value) {
      showToast("Campos vacios", "warning");
      return;
    }

    if (!/.+@.+\..+/.test(email.value)) {
      showToast("Correo no válido", "warning");
      return;
    }

    if (!agreeToTerms.value) {
      showToast(
        "Es necesario aceptar los términos y condiciones y la política de privacidad",
        "warning",
      );
      return;
    }

    const [ok, message] = await authStore.register(
      firstName.value,
      lastName.value,
      email.value,
      password.value,
    );

    if (!ok) {
      showToast(message, "error");
    } else {
      showToast(message, "success");
      firstName.value = "";
      lastName.value = "";
      email.value = "";
      password.value = "";
      router.push({ name: "login" });
    }
  };

  return {
    firstName,
    lastName,
    email,
    password,
    showPassword,
    agreeToTerms,
    togglePasswordVisibility,
    onRegister,
  };
};
