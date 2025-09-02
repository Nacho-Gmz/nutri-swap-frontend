import { isAxiosError } from "axios";

import { nutriSwapAPI } from "@/api/nutriSwapAPI";
import type { RefreshTokenError, RefreshTokenResponse, RefreshTokenSuccess } from "../types";

export const refreshTokenAction = async (): Promise<RefreshTokenError | RefreshTokenSuccess> => {
  try {
    const { data } = await nutriSwapAPI.post<RefreshTokenResponse>(`/auth/refresh-token`);

    return {
      ok: true,
      token: data.access_token,
    };
  } catch (error) {
    if (isAxiosError(error)) {
      return {
        ok: false,
        message: error.response?.data.detail ?? "Error desconocido en refrescar el token",
      };
    }

    throw new Error("No fue posible realizar la petición de refrescar el token: " + String(error));
  }
};
