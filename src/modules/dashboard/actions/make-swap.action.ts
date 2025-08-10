import { isAxiosError } from "axios";

import { nutriSwapAPI } from "@/api/nutriSwapAPI";
import type { UserSwap } from "../types";

interface MakeSwapError {
  ok: false;
  message: string;
}

interface MakeSwapSuccess {
  ok: true;
  message: string;
  swap: UserSwap;
}

export const makeSwapAction = async (user_id: number): Promise<MakeSwapError | MakeSwapSuccess> => {
  try {
    const { data } = await nutriSwapAPI.post(`/intercambios/${user_id}`);
    return {
      ok: true,
      message: "Intercambio creado exitosamente",
      swap: data,
    };
  } catch (error) {
    if (isAxiosError(error)) {
      return {
        ok: false,
        message:
          error.response?.data.detail ??
          "Error desconocido al registrar un intercambio del usuario",
      };
    }

    throw new Error("No fue posible registrar un intercambio del usuario: " + String(error));
  }
};
