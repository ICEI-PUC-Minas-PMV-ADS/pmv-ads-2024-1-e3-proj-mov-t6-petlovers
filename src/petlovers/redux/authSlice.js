import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLogged: false,
    displayName: '',
  },
  reducers: {
    login(state, action) {
      state.isLogged = true;
      state.displayName = action.payload.displayName;
    },
    logout(state) {
      state.isLogged = false;
      state.displayName = '';
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
