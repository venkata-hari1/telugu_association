
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as api from './authApi';
import axios from 'axios';
import { origin } from '../../apiRequest/config'; 


interface ApiResponse {
  message: string;
}




interface IAuth {
  signInUser: any;
  loading: boolean;
  error: any;
  forgotMsg: string | null;
  otpVerifyMsg: string | null;
   
}


const initialState: IAuth = {
  signInUser: null,
  loading: false,
  error: null,
  forgotMsg: null,
  otpVerifyMsg: null,

};


// export const loginUser = createAsyncThunk(
//   'auth/loginUser',
//   async (payload:{data:{email:string,password:string}}, thunkAPI) => {
//     try {
//       const {data}=payload
//       const res = await axios.post(`http://localhost:6000/api/auth/signin`, {data});
//       return res.data;
//     } catch (err: any) {
//       return thunkAPI.rejectWithValue(err.response?.data?.message || 'Login failed');
//     }
//   }
// );
export const loginUser= createAsyncThunk(
  "auth/signin",
  async (payload: { data:{email:string,password:string} }, { fulfillWithValue, rejectWithValue }) => {
    try {
      const {data}=payload
      const response = await fetch(`http://localhost:8080/api/auth/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
     
      if (response.ok) {
        localStorage.setItem("token", result.token);
        return fulfillWithValue(result);
      } else {
        return rejectWithValue(result);
      }
    } catch (error: any) {
      return rejectWithValue(error.message || "Something went wrong");
    }
  }
);

export const forgetPassword = createAsyncThunk<
  ApiResponse,                            
  { email: string },                      
  { rejectValue: string }                 
>(
  'auth/forgetPassword',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.patch<ApiResponse>(`${origin}/auth/forgetpassword`, data);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data?.message || 'Something went wrong');
    }
  }
);


export const verifyOtp = createAsyncThunk<
  ApiResponse,
  { email: string; otp: string }, 
  { rejectValue: string }
>(
  'auth/verifyOtp',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.patch<ApiResponse>(`${origin}/auth/verifyotp`, data);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data?.message || 'Invalid OTP');
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
      state. otpVerifyMsg = null;
 
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
      }) .addCase(forgetPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(forgetPassword.fulfilled, (state, action: PayloadAction<ApiResponse>) => {
  state.loading = false;
  state.forgotMsg = action.payload.message;
})



      .addCase(forgetPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(verifyOtp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(verifyOtp.fulfilled, (state, action: PayloadAction<ApiResponse>) => {
  state.loading = false;
  state. otpVerifyMsg = action.payload.message;
})

      .addCase(verifyOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },


      

 
});

export const { resetauthAdminState } = authSlice.actions;
export default authSlice.reducer;
