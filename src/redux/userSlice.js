// src/redux/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    loggedIn: false,
    userInfo: {},
  },
  reducers: {
    login: (state, action) => {
      state.loggedIn = true;
      state.userInfo = action.payload;
    },
    logout: (state) => {
      state.loggedIn = false;
      state.userInfo = {};
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
