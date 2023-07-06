import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const getToken = localStorage.getItem("AUTH_TOKEN");
const URL = "https://dummyjson.com/auth/login";

export const userLoginAuth = createAsyncThunk(
  "auth/fetchData",
  async ({ username, password }) => {
    try {
      const response = await axios.post(
        URL,
        { username, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("response", response);
      return response.data;
    } catch {
      console.error("somthing went wrong");
    }
  }
);

const initialState = {
  loading: false,
  user: [],
  error: null,
  token: getToken ? getToken : null,
  isAuth: getToken ? true : false,
};

const authSLice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    isAuthLogin(state) {
      state.isAuth = true;
    },
    isAuthLogout(state) {
      state.isAuth = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userLoginAuth.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(userLoginAuth.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.user = payload;
      state.isAuth = true;
    });
    builder.addCase(userLoginAuth.rejected, (state, { payload }) => {
      state.error = payload;
    });
  },
});

export default authSLice.reducer;
export const { isAuthLogin, isAuthLogout } = authSLice.actions;
