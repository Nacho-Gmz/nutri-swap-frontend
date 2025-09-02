interface RegisterError {
  ok: false;
  message: string;
}

interface RegisterSuccess {
  ok: true;
  message: string;
}

interface RegisterCredentials {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export type { RegisterError, RegisterSuccess, RegisterCredentials };
