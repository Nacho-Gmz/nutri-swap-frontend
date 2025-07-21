import { defineStore } from "pinia";
import { ref } from "vue";
import { loginAction, registerAction } from "../actions";
import type { User } from "../interfaces";
import { useLocalStorage } from "@vueuse/core";

export const useAuthStore = defineStore("auth", () => {
  const isLoggedIn = ref<boolean>(false);
  const user = ref<User | undefined>();
  const token = ref(useLocalStorage("access-token", ""));

  const login = async (email: string, password: string): Promise<[boolean, string]> => {
    try {
      const loginResponse = await loginAction({ email, password });
      if (!loginResponse.ok) {
        logout();
        return [false, loginResponse.message];
      }

      user.value = loginResponse.user;
      token.value = loginResponse.token;
      isLoggedIn.value = true;

      return [true, "¡Inicio de sesión exitoso!"];
    } catch (error) {
      console.log(error);
      logout();
      return [false, "Error desconocido"];
    }
  };

  const register = async (
    firstName: string,
    lastName: string,
    email: string,
    password: string,
  ): Promise<[boolean, string]> => {
    try {
      const registerResponse = await registerAction({ firstName, lastName, email, password });

      if (!registerResponse.ok) {
        logout();
        return [false, registerResponse.message];
      }

      return [true, registerResponse.message];
    } catch (error) {
      console.log(error);
      logout();
      return [false, "Error desconocido"];
    }
  };

  const logout = () => {
    isLoggedIn.value = false;
    user.value = undefined;
    token.value = "";
  };

  return {
    isLoggedIn,
    user,
    token,
    login,
    register,
    logout,
  };
});
