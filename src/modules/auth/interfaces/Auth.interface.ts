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

export type { LoginCredentials, RegisterCredentials, ChangePassword };
