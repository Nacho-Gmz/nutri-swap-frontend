import { isAxiosError } from "axios";

import { nutriSwapAPI } from "@/api/nutriSwapAPI";
import type { GetFoodsNamesError, GetFoodsNamesSuccess } from "../types";

export const getFoodsNamesAction = async (): Promise<GetFoodsNamesError | GetFoodsNamesSuccess> => {
  try {
    const { data } = await nutriSwapAPI.get(`/alimentos/nombres`);
    return {
      ok: true,
      foodNames: data,
    };
  } catch (error) {
    if (isAxiosError(error)) {
      return {
        ok: false,
        message:
          error.response?.data.detail ??
          "Error desconocido al obtener los nombres de los alimentos",
      };
    }

    throw new Error("No fue posible obtener el listado de los alimentos: " + String(error));
  }
};
