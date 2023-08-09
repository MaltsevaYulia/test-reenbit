import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isLogedIn: false,
};
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logIn: (state, action) => {
      state.user = action.payload;
      state.isLogedIn = true;
    },
    logOut: (state, action) => {
      state.user = null;
      state.isLogedIn = false;
    },
  },
});
export const { logIn, logOut } = authSlice.actions;
