interface RefreshTokenError {
  ok: false;
  message: string;
}

interface RefreshTokenSuccess {
  ok: true;
  token: string;
}

interface RefreshTokenResponse {
  access_token: string;
  token_type: string;
}

export type { RefreshTokenError, RefreshTokenSuccess, RefreshTokenResponse };
