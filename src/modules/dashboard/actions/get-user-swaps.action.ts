import { isAxiosError } from "axios";

import { nutriSwapAPI } from "@/api/nutriSwapAPI";
import type { UserSwap } from "../types";

interface GetUserSwapsError {
  ok: false;
  message: string;
}

interface GetUserSwapsSuccess {
  ok: true;
  userSwaps: UserSwap[];
}

export const getUserSwapsAction = async (
  user_id: number,
): Promise<GetUserSwapsError | GetUserSwapsSuccess> => {
  try {
    const { data } = await nutriSwapAPI.get(`/intercambios/${user_id}`);
    return {
      ok: true,
      userSwaps: data,
    };
  } catch (error) {
    if (isAxiosError(error)) {
      return {
        ok: false,
        message:
          error.response?.data.detail ??
          "Error desconocido al obtener los intercambios del usuario",
      };
    }

    throw new Error("No fue posible obtener los intercambios del usuario: " + String(error));
  }
};
