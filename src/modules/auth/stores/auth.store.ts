import { computed } from "vue";

import { defineStore } from "pinia";
import { jwtDecode } from "jwt-decode";
import { useLocalStorage } from "@vueuse/core";

import type { LoginJwtPayload, User } from "../types";

const ACCESS_TOKEN_KEY = import.meta.env.VITE_ACCESS_TOKEN_KEY;

export const useAuthStore = defineStore("auth", () => {
  const accessToken = useLocalStorage<string>(ACCESS_TOKEN_KEY, "");
  const user = useLocalStorage<User | undefined>("user", undefined);

  const isAuthenticated = computed(() => !!accessToken.value);

  const login = (token: string) => {
    const decodedToken = jwtDecode<LoginJwtPayload>(token);
    accessToken.value = token;
    user.value = { email: decodedToken.email, userId: decodedToken.user_id };
  };

  const refreshToken = (token: string) => {
    accessToken.value = token;
  };

  const logout = () => {
    user.value = undefined;
    accessToken.value = "";
  };

  return {
    isAuthenticated,
    accessToken,
    user,
    login,
    refreshToken,
    logout,
  };
});
