import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";

const initialData = JSON.parse(localStorage.getItem("authData")) || null;
const initialRole = localStorage.getItem("authRole") || null;
const initialToken = localStorage.getItem("authToken") || null;

const initialState = {
  data: initialData,
  role: initialRole,
  token: initialToken,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginReducer: (state, action) => {
      state.data = action.payload.data;
      state.role = action.payload.role;
      state.token = action.payload.token;

      localStorage.setItem("authData", JSON.stringify(state.data));
      localStorage.setItem("authRole", state.role);
      localStorage.setItem("authToken", state.token);
    },
    logoutReducer: (state, action) => {
      state.data = null;
      state.role = null;
      state.token = null;

      localStorage.removeItem("authData");
      localStorage.removeItem("authRole");
      localStorage.removeItem("authToken");
    },
  },
});

export const { loginReducer, logoutReducer } = authSlice.actions;

export default authSlice.reducer;
