import { useUserStore } from "@/stores/user";
import type {
  ChangePassword,
  LogInCredentials,
  SignInCredentials,
} from "@/types/Auth";
import axios from "axios";

const authClient = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/auth`,
  timeout: 10000,
});

export async function login(credentials: LogInCredentials) {
  try {
    const { data } = await authClient.post(`/login`, credentials);
    return [null, data];
  } catch (error) {
    return [error];
  }
}

export async function signup(credentials: SignInCredentials) {
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
  user.logOut();
}
