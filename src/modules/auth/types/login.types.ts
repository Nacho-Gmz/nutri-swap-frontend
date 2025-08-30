import type { JwtPayload } from "jwt-decode";

interface LoginError {
  ok: false;
  message: string;
}

interface LoginSuccess {
  ok: true;
  token: string;
}

interface LoginCredentials {
  email: string;
  password: string;
}

interface LoginResponse {
  access_token: string;
  token_type: string;
}

interface LoginJwtPayload extends JwtPayload {
  user_id: string;
  email: string;
}

export type { LoginError, LoginSuccess, LoginCredentials, LoginResponse, LoginJwtPayload };
