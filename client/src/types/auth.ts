export interface User {
  username: string;
}

export interface AuthResponse {
  token: string;
  message: string;
}

export interface RegisterPayload {
  username: string;
  password: string;
}
