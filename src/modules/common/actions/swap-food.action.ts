import { isAxiosError } from "axios";

import { nutriSwapAPI } from "@/api/nutriSwapAPI";
import type { Swap } from "../types";

interface SwapFoodError {
  ok: false;
  message: string;
}

interface SwapFoodSuccess {
  ok: true;
  swaps: Swap[];
}

export const swapFoodAction = async (
  originalId: number,
): Promise<SwapFoodError | SwapFoodSuccess> => {
  try {
    const { data } = await nutriSwapAPI.get(`/alimentos/ia/${originalId}`);

    return {
      ok: true,
      swaps: data,
    };
  } catch (error) {
    if (isAxiosError(error)) {
      return {
        ok: false,
        message: error.response?.data.detail ?? "Error desconocido al intercambiar un alimento",
      };
    }

    throw new Error("No fue posible realizar la petición de intercambio: " + String(error));
  }
};
