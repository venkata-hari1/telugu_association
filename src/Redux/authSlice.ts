
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { baseURL, endpoints } from "../Utils/Config";


interface ApiResponse {
  message: string;
}

interface IAuth {
  signInUser: any;
  loading: boolean;
  error: any;
  forgotMsg: any;
  otpVerifyMsg: any;
  passwordResetMsg: string | null;

}


const initialState: IAuth = {
  signInUser: null,
  loading: false,
  error: null,
  forgotMsg: null,
  otpVerifyMsg: null,
  passwordResetMsg: null,

};

export const loginUser = createAsyncThunk(
  "auth/signin",
  async (payload: { data: { email: string, password: string } }, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = payload
      const response = await fetch(`${baseURL}/${endpoints.SIGNIN}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {

        localStorage.setItem("token", result.accesstoken);
        return fulfillWithValue(result);
      } else {
        return rejectWithValue(result);
      }
    } catch (error) {
      return rejectWithValue(error || "Something went wrong");
    }
  }
);

export const forgotPassword = createAsyncThunk(
  "forgotPassword",
  async (payload: { data: { email: string } }, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = payload
      const response = await fetch(`${baseURL}/${endpoints.FORGETPASSWORD}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        return fulfillWithValue(result);
      } else {
        return rejectWithValue(result);
      }
    } catch (error) {
      return rejectWithValue(error || "Something went wrong");
    }
  }
);

export const verifyOtp = createAsyncThunk(
  "verifyOtp",
  async (payload: { data: { email: string, otp: string } }, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = payload
      const response = await fetch(`${baseURL}/${endpoints.VERIFYOTP}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        return fulfillWithValue(result);
      } else {
        return rejectWithValue(result);
      }
    } catch (error) {
      return rejectWithValue(error || "Something went wrong");
    }
  }
);

export const changePassword = createAsyncThunk(
  "changePassword",
  async (
    payload: { data: { email: string; Password: string } },
    { fulfillWithValue, rejectWithValue }
  ) => {
    try {
      const { data } = payload;

      const response = await fetch(`${baseURL}/${endpoints.CHANGEPASSWORD}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        return fulfillWithValue(result);
      } else {
        return rejectWithValue(result);
      }
    } catch (error) {
      return rejectWithValue(error || "Something went wrong");
    }
  }
);


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetauthAdminState: (state) => {
      state.signInUser = null;
      state.error = null;
      state.forgotMsg = null;
      state.otpVerifyMsg = null;

    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.signInUser = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Something went wrong';
      }).addCase(forgotPassword.pending, (state) => {
        state.loading = true;
      })
      .addCase(forgotPassword.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(forgotPassword.rejected, (state) => {
        state.loading = false;
      })

      .addCase(verifyOtp.pending, (state) => {
        state.loading = true;
      })
      .addCase(verifyOtp.fulfilled, (state) => {
        state.loading = false;
      })

      .addCase(verifyOtp.rejected, (state) => {
        state.loading = false;
      })
      .addCase(changePassword.pending, (state) => {
        state.loading = true;
      })
      .addCase(changePassword.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(changePassword.rejected, (state) => {
        state.loading = false;

      });
  },
});

export const { resetauthAdminState } = authSlice.actions;
export default authSlice.reducer;
