import { useUserStore } from "@/modules/auth/stores/userStore";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import type {
  ChangePassword,
  LoginCredentials,
  RegisterCredentials,
} from "@/modules/auth/interfaces";

const ACCESS_TOKEN_KEY = "access-token";

// Decodifica el JWT y retorna el payload
function decodeJWT(token: string): any {
  try {
    return jwtDecode(token);
  } catch (e) {
    return null;
  }
}

export function saveAccessToken(token: string) {
  localStorage.setItem(ACCESS_TOKEN_KEY, token);
}

export function removeAccessToken() {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
}

const authClient = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/auth`,
  timeout: 10000,
});

export async function login(credentials: LoginCredentials) {
  try {
    const { data } = await authClient.post(`/login`, credentials);
    const accessToken = data?.access_token;
    if (accessToken) {
      saveAccessToken(accessToken);
      const payload = decodeJWT(accessToken);
      const username = payload?.username || null;
      const email = payload?.email || null;
      const user = useUserStore();
      user.logIn(username, email);
    }
    return [null, data];
  } catch (error) {
    return [error];
  }
}

export async function register(credentials: RegisterCredentials) {
  try {
    const { data } = await authClient.post(`/signup`, credentials);
    return [null, data];
  } catch (error) {
    return [error];
  }
}

export async function changePassword(password: ChangePassword) {
  try {
    const { data } = await authClient.post(`/change-password`, password);
    return [null, data];
  } catch (error) {
    return [error];
  }
}

export async function logOut() {
  const user = useUserStore();
  removeAccessToken();
  user.logOut();
}
