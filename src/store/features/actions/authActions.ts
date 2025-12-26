import { createAsyncThunk } from "@reduxjs/toolkit"
import apiClient from "../../../interceptors/APIInterceptor"
import type { LoginUser, LoginUserResponse, UserRegister, UserRegisterResponse } from "../auth-types"
import { authTokenService } from "../../../service/AuthTokenService"

export const registerUser = createAsyncThunk<UserRegisterResponse, UserRegister>('signup', async ({ userName, password, email }: UserRegister, { rejectWithValue }) => {

  try {
    const res = await apiClient.put(`/signup`, { userName, password, email })
    authTokenService.setToken(res.data.token);
    return res.data
  }
  catch (error: any) {
    return rejectWithValue(error.message)
  }

})

export const loginUser = createAsyncThunk<LoginUserResponse, LoginUser>('login', async ({ userName: userName, password }: LoginUser, { rejectWithValue }) => {
  try {
    const res = await apiClient.post(`/login`, null, {
      params: { userName, password },
    })
    authTokenService.setToken(res.data.token);
    return res.data
  }
  catch (error: any) {
    return rejectWithValue(error.message)
  }
})