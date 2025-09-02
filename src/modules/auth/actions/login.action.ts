import { isAxiosError } from "axios";

import { nutriSwapAPI } from "@/api/nutriSwapAPI";
import type { LoginCredentials, LoginError, LoginResponse, LoginSuccess } from "../types";

export const loginAction = async (
  loginCredentials: LoginCredentials,
): Promise<LoginError | LoginSuccess> => {
  try {
    const { data } = await nutriSwapAPI.post<LoginResponse>(`/auth/login`, loginCredentials);

    return {
      ok: true,
      token: data.access_token,
    };
  } catch (error) {
    if (isAxiosError(error)) {
      return { ok: false, message: error.response?.data.detail ?? "Error desconocido en login" };
    }

    throw new Error("No fue posible realizar la petición de login: " + String(error));
  }
};
