import type { JwtPayload } from "jwt-decode";

interface LoginCredentials {
  email: string;
  password: string;
}

interface RegisterCredentials {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface ChangePassword {
  originalPassword: string;
  newPassword: string;
}

interface AuthJwtPayload extends JwtPayload {
  user_id: string;
  email: string;
}

export type { LoginCredentials, RegisterCredentials, ChangePassword, AuthJwtPayload };
