//  import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
// import * as api from './authApi' 

// interface IAuth{
//      signInUser:any,
//     loading:boolean,
//     error:any
// }

// const initialState:IAuth ={
//      signInUser:null,
//     loading:false,
//     error:null,
// }

// export const loginUser = createAsyncThunk<any> ('auth/loginuser',
//     async(data:any,{rejectWithValue})=>{
//         try{
//             const response =  await api.signInAdmin(data)
//             return response;
//         }   
//         catch(error:any){
//             return rejectWithValue(error.message)

//         }

//     }
// )


// const authSlice = createSlice({
//     name:"auth",
//     initialState,
//     reducers:{   resetauthAdminState:(state)=>{
//             state.signInUser = null
           
//         }},
//     extraReducers:(builder)=>{
//         builder.addCase(loginUser.pending, (state) =>{
//             state.loading= true 
//             state.error = null
//         })
        
//        builder.addCase(loginUser.fulfilled,(state , action:any)=>{
//             state.loading = false
//             state.signInUser=action.payload
                    
//         })
//        builder.addCase(loginUser.rejected, (state ,action:any )=>{
//             state.loading = false
//             state.error = action.payload
//         })
//     }
// })
// export const { resetauthAdminState
//  } = authSlice.actions;
// export default authSlice.reducer

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


export const loginUser = createAsyncThunk<any, { email: string; password: string }>(
  'auth/loginuser',
  async (data, { rejectWithValue }) => {
    try {
      const response = await api.signInAdmin(data);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Login failed');
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
  { email: string; otp: string }, // ✅ Accept both email and otp
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
