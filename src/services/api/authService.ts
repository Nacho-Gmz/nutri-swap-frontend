import type {
  ChangePassword,
  LogInCredentials,
  SignInCredentials,
} from "@/types/Auth";
import axios from "axios";

const authClient = axios.create({
  baseURL: `${import.meta.env.BASE_URL}/auth`,
  timeout: 10000,
});

export async function logIn(credentials: LogInCredentials) {
  try {
    const { data } = await authClient.post(`/log-in`, credentials);
    return [null, data];
  } catch (error) {
    return [error];
  }
}

export async function signIn(credentials: SignInCredentials) {
  try {
    const { data } = await authClient.post(`/sign-in`, credentials);
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

export async function logOut() {}
