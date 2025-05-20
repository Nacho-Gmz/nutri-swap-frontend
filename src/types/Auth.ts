export interface LogInCredentials {
  correo: string;
  contraseña: string;
}

export interface SignInCredentials {
  nombre: string;
  primerApellido: string;
  segundoApellido: string;
  correo: string;
  contraseña: string;
}

export interface ChangePassword {
  contraseñaOriginal: string;
  contraseñaNueva: string;
}
