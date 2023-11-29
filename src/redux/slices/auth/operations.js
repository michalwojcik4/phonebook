import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/signup', credentials);
      setAuthHeader(res.data.token);
      Notify.success(`Account created. Welcom ${res.data.user.name}!`);
      return res.data;
    } catch (err) {
      Notify.failure(err.message);
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/login', credentials);
      setAuthHeader(res.data.token);
      Notify.success(`Welcom ${res.data.user.email}!`);
      return res.data;
    } catch (err) {
      Notify.failure(err.message);
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader();
    Notify.info('You are logged out');
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});

export const me = createAsyncThunk('auth/me', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const token = state.auth.token;
  if (!token) {
    return thunkAPI.rejectWithValue('Brak tokena');
  }

  try {
    setAuthHeader(token);
    const res = await axios.get('/users/current');
    return res.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});
