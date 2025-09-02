import { isAxiosError } from "axios";

import { nutriSwapAPI } from "@/api/nutriSwapAPI";
import type { RegisterCredentials, RegisterError, RegisterSuccess } from "../types";

export const registerAction = async (
  registerCredentials: RegisterCredentials,
): Promise<RegisterError | RegisterSuccess> => {
  try {
    const { data } = await nutriSwapAPI.post(`/auth/signup`, registerCredentials);
    if (!data) {
      return { ok: false, message: "Error en registro exitoso" };
    }

    return { ok: true, message: "¡Registrado exisosamente!" };
  } catch (error) {
    if (isAxiosError(error)) {
      return { ok: false, message: error.response?.data.detail ?? "Error desconocido en registro" };
    }

    throw new Error("No fue posible realizar la petición de registro: " + String(error));
  }
};
