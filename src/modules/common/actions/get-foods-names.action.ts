import { nutriSwapAPI } from "@/api/nutriSwapAPI";
import { isAxiosError } from "axios";

export const getFoodsNamesAction = async () => {
  try {
    const { data } = await nutriSwapAPI.get(`/alimentos/nombres`);
    console.log(data);
    return data;
  } catch (error) {
    if (isAxiosError(error)) {
      return (
        error.response?.data.detail ?? "Error desconocido al obtener los nombres de los alimentos"
      );
    }

    console.log(error);
    throw new Error("No fue posible obtener el listado de los alimentos");
  }
};
