import { isAxiosError } from "axios";

import { nutriSwapAPI } from "@/api/nutriSwapAPI";
import type { GetFoodInformationError, GetFoodInformationSuccess } from "../types";

export const getFoodInformationAction = async (
  food_id: number,
): Promise<GetFoodInformationError | GetFoodInformationSuccess> => {
  try {
    const { data } = await nutriSwapAPI.get(`/alimentos/${food_id}`);
    return {
      ok: true,
      foodInfo: data,
    };
  } catch (error) {
    if (isAxiosError(error)) {
      return {
        ok: false,
        message:
          error.response?.data.detail ?? "Error desconocido al obtener la información del alimento",
      };
    }

    throw new Error("No fue posible obtener la información del alimento: " + String(error));
  }
};
