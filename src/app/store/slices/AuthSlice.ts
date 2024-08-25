import CONFIG from "@/config";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import moment from "moment";

// Define a type for the slice state
interface AuthState {
  // user data
  isLoggedIn: boolean;
  userProfile: any;
  user: any;
  tokenExpiresAt: number;
  authToken?: string;
}

// Define the initial state using that type
const initialState: AuthState = {
  isLoggedIn: false,
  userProfile: null,
  user: null,
  tokenExpiresAt: 0,
  authToken: "",
};

export const authSlice = createSlice({
  name: "auth",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,

  reducers: {
    setUserData: (
      state: AuthState,
      action: PayloadAction<{
        userProfile: any;
        user: any;
      }>
    ) => {
      state.isLoggedIn = true;
      state.userProfile = action.payload.userProfile;
      state.user = action.payload.user;
    },

    setAuth: (state, action: PayloadAction<string>) => {
      state.tokenExpiresAt = moment()
        .add(CONFIG.TOKEN_EXPIRY_IN_SECONDS, "s")
        .unix();
      state.authToken = action.payload;
    },

    logoutUser: (state) => {
      state.isLoggedIn = false;
      state.userProfile = null;
      state.user = null;
      state.tokenExpiresAt = 0;
      state.authToken = "";
    },
    // Use the PayloadAction type to declare the contents of `action.payload`

    initializeState: (
      state,
      action: PayloadAction<{
        userProfile: any;
        user: any;
        tokenExpiresAt: number;
      }>
    ) => {
      state.isLoggedIn = false;
      state.userProfile = null;
      state.user = null;
      state.tokenExpiresAt = 0;
      state.authToken = "";
    },
  },
});

export const { setUserData, logoutUser, setAuth } = authSlice.actions;

export default authSlice.reducer;
