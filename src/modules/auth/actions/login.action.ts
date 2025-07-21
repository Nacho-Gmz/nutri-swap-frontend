import { nutriSwapAPI } from "@/api/nutriSwapAPI";
import type { LoginCredentials, User } from "../interfaces";
import { isAxiosError } from "axios";
import { jwtDecode, type JwtPayload } from "jwt-decode";

interface LoginJwtPayload extends JwtPayload {
  user_id: string;
  email: string;
}

interface LoginError {
  ok: false;
  message: string;
}

interface LoginSuccess {
  ok: true;
  user: User;
  token: string;
}

export const loginAction = async (
  loginCredentials: LoginCredentials,
): Promise<LoginError | LoginSuccess> => {
  try {
    const { data } = await nutriSwapAPI.post(`/auth/login`, loginCredentials);

    const accessToken = data?.access_token;
    if (accessToken) {
      const payload = jwtDecode<LoginJwtPayload>(accessToken);
      const userId = payload?.user_id;
      const email = payload?.email;
      return {
        ok: true,
        user: { userId: userId, email: email },
        token: accessToken,
      };
    }

    return { ok: false, message: "Suceso inesperado en login correcto" };
  } catch (error) {
    if (isAxiosError(error)) {
      return { ok: false, message: error.response?.data.detail ?? "Error desconocido en login" };
    }

    console.log(error);
    throw new Error("No fue posible realizar la petición de login");
  }
};
