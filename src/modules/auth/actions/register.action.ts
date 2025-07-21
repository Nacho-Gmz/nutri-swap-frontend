import { nutriSwapAPI } from "@/api/nutriSwapAPI";
import { type RegisterCredentials } from "../interfaces";
import { isAxiosError } from "axios";

interface RegisterError {
  ok: false;
  message: string;
}

interface RegisterSuccess {
  ok: true;
  message: string;
}

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
    console.log(error);
    throw new Error("No fue posible realizar la petición de registro");
  }
};
