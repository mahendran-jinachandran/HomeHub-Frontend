export interface UserRegister {
  userName: string,
  password: string,
  email: string,
}

export interface UserRegisterResponse {
  created_at: Date,
  email: string,
  id: number,
  role: string[],
  status: string,
  updated_at: Date,
  userName: string
}

export interface LoginUser {
  userName: string,
  password: string
}

export interface LoginUserResponse {
  token: string,
  userId: number,
  email: string,
  userName: string
}