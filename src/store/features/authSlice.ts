import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "./actions/authActions";
import { authTokenService } from "../../service/AuthTokenService";


//TODO the Commented out stuffs are needed from backend. And is mandatory

export type AuthorisedUser = {
  userInfo: {
    isAuthorised: boolean;
    role?: string[];

    userName: string;
    email: string;
  };
  loading: boolean;
  error: string | null;
  success: boolean;
};

const initialState: AuthorisedUser = {
  userInfo: {
    email: "",
    role: [],
    userName: "",
    isAuthorised: false,
  },
  loading: false,
  error: null,
  success: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      authTokenService.clearToken();

      state.userInfo = {
        email: "",
        role: [],
        userName: "",
        isAuthorised: false,
      };

      state.loading = false;
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    /* ================= REGISTER ================= */

    builder.addCase(registerUser.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    });

    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;

      state.userInfo = {
        userName: action.payload.userName,
        email: action.payload.email,
        role: action.payload.role ?? [],
        // userToken: action.payload.token,
        isAuthorised: true,
      };
    });

    builder.addCase(registerUser.rejected, (state) => {
      state.loading = false;
      state.error = "Registration failed";
      state.success = false;
      state.userInfo.isAuthorised = false;
    });

    /* ================= LOGIN ================= */

    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    });

    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;

      state.userInfo = {
        userName: action.payload.userName,
        email: action.payload.email,
        // role: action.payload.role
        // permissions: action.payload.permissions ?? [],
        isAuthorised: true,
      };
    });

    builder.addCase(loginUser.rejected, (state) => {
      state.loading = false;
      state.error = "Login failed";
      state.success = false;
      state.userInfo.isAuthorised = false;
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
