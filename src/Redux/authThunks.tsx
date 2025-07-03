import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'http://localhost:8080'; 


export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ userId, password }: { userId: string; password: string }, thunkAPI) => {
    try {
      const res = await axios.post(`${BASE_URL}/members_signin`, { userId, password });
      return res.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response?.data?.message || 'Login failed');
    }
  }
);


export const forgotPassword = createAsyncThunk(
  'auth/forgotPassword',
  async ({ userId }: { userId: string }, thunkAPI) => {
    try {
      const res = await axios.patch(`${BASE_URL}/forgetpassword`, { userId });
      return res.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response?.data?.message || 'Forgot password failed');
    }
  }
);


export const verifyOtp = createAsyncThunk(
  'auth/verifyOtp',
  async ({ userId, otp }: { userId: string; otp: string }, thunkAPI) => {
    try {
      const res = await axios.patch(`${BASE_URL}/verifyotp`, { userId, otp });
      return res.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response?.data?.message || 'OTP verification failed');
    }
  }
);


export const changePassword = createAsyncThunk(
  'auth/changePassword',
  async ({ userId, newPassword }: { userId: string; newPassword: string }, thunkAPI) => {
    try {
      const res = await axios.patch(`${BASE_URL}/changepassword`, { userId, newPassword });
      return res.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response?.data?.message || 'Change password failed');
    }
  }
);
