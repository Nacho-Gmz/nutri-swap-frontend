import { nutriSwapAPI } from "@/api/nutriSwapAPI";
import { isAxiosError } from "axios";

export const swapFoodAction = async (originalId: number) => {
  try {
    const { data } = await nutriSwapAPI.post(`/alimentos/ia/${originalId}`);

    return data;
  } catch (error) {
    if (isAxiosError(error)) {
      return error.response?.data.detail ?? "Error desconocido al intercambiar un alimento";
    }

    console.log(error);
    throw new Error("No fue posible realizar la petición de intercambio");
  }
};
