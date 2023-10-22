import { createSlice } from '@reduxjs/toolkit';
import { signUp, signIn, getProfile } from './thunk';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const initialState = {
  user: null,
  userProfile: null,
  token: '',
  error: null,
  loading: 'idle',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut(state) {
      state.user = null;
      state.userProfile = null;
      state.token = '';
    },
  },
  extraReducers: builder => {
    builder
      .addCase(signUp.pending, state => {
        state.loading = 'pending';
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.loading = 'fulfilled';
        state.error = null;
        console.log('Fulfilled token:', state.token);
      })
      .addCase(signUp.rejected, (state, action) => {
        state.loading = 'rejected';
        state.error = action.payload.error;
      })
      .addCase(signIn.pending, state => {
        state.loading = 'pending';
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.loading = 'fulfilled';
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.error = null;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.loading = 'rejected';
        state.error = action.payload.error;
      })
      .addCase(getProfile.pending, state => {
        state.loading = 'pending';
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.loading = 'fulfilled';
        state.userProfile = action.payload;
        state.error = null;
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.loading = 'rejected';
        state.error = action.payload.error;
      });
  },
});

const persistConfig = {
  key: 'auth',
  storage,
};

export const persistedAuthReducer = persistReducer(
  persistConfig,
  authSlice.reducer
);

export const { logOut } = authSlice.actions;

export const currentUser = state => state.auth.user;

export const currentUserProfile = state => state.auth.userProfile;

export const accessToken = state => state.auth.token;
